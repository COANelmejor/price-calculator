'use strict';

module.exports.hello = async event => {
  const moment = require('moment');
  const d = require('./data');
  const q = event.queryStringParameters || {};


  const fecha = q.fecha || moment().hour(0).minute(0).format('DD-MMM').toLowerCase();
  let year = q.year || moment().hour(0).minute(0).format('YYYY').toLowerCase();
  let fechasplit = fecha.split('-');

  console.log(fecha);
  console.log(fechasplit);

  const horasxdia = parseInt(q.horasxdia) || 8;
  const totalhoras = parseInt(q.totalhoras) || 8;
  let finde = q.finde || false;
  finde = (finde == 'true') ? true : false;

  let dias = [];
  let trabajoxdia = [];
  let totaldias = 0;

  for (let i = totalhoras; i > 0; i -= horasxdia) {
    if (horasxdia <= i) {
      dias.push(horasxdia);
    } else {
      dias.push(i);
    }
  }

  for (let i = 0; i < dias.length; i++) {
    const horas = dias[i];
    let trabajo = {}
    const diainicio = moment()
      .hour(0).minute(0)
      .date(fechasplit[0])
      .month(fechasplit[1])
      .year(parseInt(year))
    if (horas >= d.inicioHoraExtra) {
      trabajo.horas_extra = horas - d.inicioHoraExtra + 1;
      trabajo.horas_normal = horas - trabajo.horas_extra;
    } else {
      trabajo.horas_normal = horas;
    }
    trabajo.fecha = diainicio.add(totaldias, 'days');
    const fechaddmmm_s = trabajo.fecha.format('DD-MMM').toLowerCase();
    const diasemana_s = trabajo.fecha.format('ddd').toLowerCase();

    trabajo.diafestivo = (d.diasFestivos.indexOf(fechaddmmm_s) > -1);
    trabajo.finde = (d.diasFinde.indexOf(diasemana_s) > -1);
    if (!finde) {
      let fecha_cambiada = true;
      while (fecha_cambiada) {
        const fechaddmmm = trabajo.fecha.format('DD-MMM').toLowerCase();
        const diasemana = trabajo.fecha.format('ddd').toLowerCase();
        if ((d.diasFestivos.indexOf(fechaddmmm) > -1) || (d.diasFinde.indexOf(diasemana) > -1)) {
          trabajo.fecha.add(1, 'days');
          totaldias++;
        } else {
          trabajo.diafestivo = false;
          trabajo.finde = false;
          fecha_cambiada = false;
        }
      }
    }
    trabajoxdia.push(trabajo)
    totaldias++
  }

  let plan = [];
  let precioTotal = 0;
  for (let td = 0; td < trabajoxdia.length; td++) {
    const trabajo = trabajoxdia[td];
    const festivoMulti = trabajo.diafestivo ? (d.precioFestivosMiltiplier || 1) : 1;
    const findeMulti = trabajo.finde ? (d.precioFindeMiltiplier || 1) : 1;
    const horas_normales = trabajo.horas_normal
    const horas_extra = trabajo.horas_extra || 0

    const diaTrabajo = {
      horas_a_trabajar: dias[td],
      fecha: trabajo.fecha.locale(d.locale).format('dddd, DD [de] MMMM [de] YYYY'),
      fecha_corta: trabajo.fecha.locale(d.locale).format('DD-MMM-YYYY'),
      diafestivo: trabajo.diafestivo,
      findesemana: trabajo.finde,

      horas_a_precio_normal: horas_normales,
      precio_de_hora_normal: d.precioHoraNormal * findeMulti * festivoMulti,
      total_por_horas_normal: horas_normales * d.precioHoraNormal * festivoMulti * findeMulti,

      horas_a_precio_extra: horas_extra,
      precio_de_hora_extra: d.precioHoraExtra * findeMulti * festivoMulti,
      total_por_horas_extra: horas_extra * d.precioHoraExtra * festivoMulti * findeMulti,

      total_por_dia: 0,
    }

    diaTrabajo.total_por_dia = diaTrabajo.total_por_horas_normal + diaTrabajo.total_por_horas_extra;
    precioTotal += diaTrabajo.total_por_dia;
    plan.push(diaTrabajo);
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
        message: `Plan Generado con éxito`,
        consulta: q,
        fecha_de_inicio: `${fecha}-${year}`,
        fecha_de_entrega: moment().year(year).month(fechasplit[1]).date(fechasplit[0]).add((totaldias), 'days').format('DD-MMM-YYYY').toLowerCase(),
        total_dias_a_trabajar: dias.length,
        tiempo_de_entrega_en_dias_calendario: totaldias + 1,
        horas_a_trabajar_por_dia: horasxdia,
        total_horas_a_trabajar: totalhoras,
        precio_total: precioTotal,
        plan_de_trabajo:plan,
        parametros: d,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};