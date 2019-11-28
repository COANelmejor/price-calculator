'use strict';

/**
 * # Precio de hora Normal
 * 
 * Este es el precio por hora que cobras normalmente.
 * En un ambiente normal este debe ser tu precio por hora
 */
const precioHoraNormal = 30;

/**
 * # Precio Hora Extra
 * 
 * Este es tu precio por hora extra.
 * 
 * Si tu dia normal de trabajo son 8 horas la hora 9 en adelente tendrá este precio.
 */
const precioHoraExtra = 40;

/**
 * # Máximo de horas al día
 * 
 * Este es el máximo de horas que puedes trabajar al día.
 */
const maxHorasDia = 10;

/**
 * # Inicio de Hora Extra
 * 
 * A partir de esta hora y las horas siguientes se calcularán con el precio de hora Extra.
 */
const inicioHoraExtra = 5

/**
 * # Multiplicador de precio para Fines de semana
 * 
 * Este multiplicador cambiará el precio de las horas para los fines de semana o días festivos.
 * 
 * Ejemplo: Si tu precio por hora normal son 30 y el multiplicador es 2, tu precio por hora normal 
 * en fin de semana será de 60.
 */
const horasFindeMiltiplier = 2;

/**
 * # Fin de semana
 * 
 * String[] que tiene los días considerados como parte del fin de semana
 */
const diasFinde = [
    'Sat', 'Sun'
]

const diasFesitvos = [
    '15-dic',
    '16-dic',
    '17-dic',
    '18-dic',
    '19-dic',
    '20-dic',
    '21-dic',
    '22-dic',
    '23-dic',
    '24-dic',
    '25-dic',
    '26-dic',
    '27-dic',
    '28-dic',
    '29-dic',
    '30-dic',
    '31-dic',
    '01-ene',
    '02-ene',
    '03-ene',
    '04-ene',
    '05-ene',
]

module.exports = {
    precioHoraExtra,
    precioHoraNormal,
    horasFindeMiltiplier,
    diasFinde,
    diasFesitvos
}