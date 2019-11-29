'use strict';

/**
 * ## Precio de hora Normal
 * 
 * Este es el precio por hora que cobras normalmente.
 * En un ambiente normal este debe ser tu precio por hora
 */
const precioHoraNormal = 30;

/**
 * ## Precio Hora Extra
 * 
 * Este es tu precio por hora extra.
 * 
 * Si tu dia normal de trabajo son 8 horas la hora 9 en adelente tendrá este precio.
 */
const precioHoraExtra = 40;

/**
 * ## Máximo de horas al día
 * 
 * [Number] con los máximos de horas que puedes trabajar al día.
 * De forma predeterminada son 10 horas por cada día
 */
// const maxHorasDia = {
//     Mon: 10,
//     Tue: 10,
//     Wed: 10,
//     Thu: 10,
//     Fri: 10,
//     Sat: 10,
//     Sun: 10,
// };

/**
 * ## Inicio de Hora Extra
 * 
 * A partir de esta hora y las horas siguientes se calcularán con el precio de hora Extra.
 */
const inicioHoraExtra = 5

/**
 * ## Multiplicador de Fines de semana
 * 
 * Este multiplicador cambiará el precio de las horas para los fines de semana.
 * 
 * Ejemplo: Si tu precio por hora normal son 30 y el multiplicador es 2, tu precio por hora normal 
 * en fin de semana será de 60.
 */
const precioFindeMiltiplier = 2;

/**
 * ## Fin de semana
 * 
 * [String] que tiene los días considerados como parte del fin de semana.
 * 
 * Los valores deben ir en minúsculas en su version abreviada a 3 letra en inglés: mon, tue, etc.
 */
const diasFinde = [
    'sat', 'sun'
]

/**
 * ## Multiplicador de días Festivos
 * 
 * Este multiplicador cambiará el precio de las horas para los días festivos.
 * 
 * De forma predeterminada copia el valor de precioFindeMiltiplier.
 * 
 * Ejemplo: Si tu precio por hora normal son 30 y el multiplicador es 2, tu precio por hora normal 
 * en fin de semana será de 60.
 */
const precioFestivosMiltiplier = precioFindeMiltiplier;

/**
 * ## Días Festivos
 * 
 * [String] que tiene Días considerados Fesitvos.
 * 
 * El formato debe ser **"dd-mmm"** donde **"dd"** es el día en 2 dígitos: 00, 01, 02, etc. y 
 * **"mmm"** es el mes en formato de 3 letras en inglés: "jan", "feb", "mar", etc.
 */
const diasFestivos = [
    '01-jan',
    '02-jan',
    '03-jan',
    '04-jan',
    '05-jan',
    '09-apr',
    '10-apr',
    '11-apr',
    '12-apr',
    '01-may',
    '29-jun',
    '15-sep',
    '20-oct',
    '01-nov',
    '16-dec',
    '17-dec',
    '18-dec',
    '19-dec',
    '20-dec',
    '21-dec',
    '22-dec',
    '23-dec',
    '24-dec',
    '25-dec',
    '26-dec',
    '27-dec',
    '28-dec',
    '29-dec',
    '30-dec',
    '31-dec',
]

const locale = 'es';

module.exports = {
    inicioHoraExtra,
    precioHoraNormal,
    precioHoraExtra,
    diasFinde,
    precioFindeMiltiplier,
    diasFestivos,
    precioFestivosMiltiplier,
    locale
}