'use strict';

/**
*  Меняет порядок элементов в массиве на противоположныйю.
*  Если в функцию вторым аргументом передаётся число — то переставляются все элементы массива кроме нескольких первых (количество зависит от числа).
*  Если число отрицательное — то на месте остаются элементы в конце массива.
*
* @param {array} ar - массив
* @param {number} order - число отвечающее за нетронутые элементы массива
* @return {array} новый массив
* @example
* // returns [3,2,1]
* inverse([1,2,3],0);
* @example
* // returns [1,3,2]
* inverse([1,2,3],1);
* @example
* // returns [2,1,3]
* inverse([1,2,3],-1);
*/

const inverse = (ar, order = 0) => {
    if (!Number.isInteger(order) || !Array.isArray(ar)) {
        return false;
    }
    let localAr = [...ar];
    localAr.splice(order, 0, ...localAr.splice(order > 0 ? order : 0, localAr.length - Math.abs(order)).reverse());
    return localAr;
}
