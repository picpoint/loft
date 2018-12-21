/* ДЗ 3 - работа с массивами и объеектами */

/*
+++ Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
    for (var i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

/*
+++ Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {
    var mass = [];
    for (var i = 0; i < array.length; i++) {
        mass.push(fn(array[i], i, array));
    }
    return mass;
}

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {
    var previousValue = 0;
    var currentItem = 0;
    for (var i = 0; i < array.length; i++) {
        currentItem = array[i];
        previousValue += currentItem;
        fn(previousValue, array[i]);
    }
}

/*
+++ Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
		if (obj.hasOwnProperty(prop)) {
			delete obj[prop];
		}
}

/*
+++ Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
    if (obj.hasOwnProperty(prop)) {
        return true;
    } else {
        return false;
    }
}

/*
+++ Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {
	return Object.keys(obj);
}

/*
+++ Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {
			var arr, mass = [];
			arr = Object.keys(obj);
			for (var i = 0; i < arr.length; i++) {
				mass.push(arr[i].toUpperCase());
			}
			return mass;
}

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
//[1, 2, 3, 4, 5]
// from = 2
// to = 5
function slice(array, from, to) {
	var mass = [];
	for (var i = 0; i < array.length; i++) {
		if (from <= i && to !== i) {
			mass.push(array[i]);
		}
	}
	return mass;
}

/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
}

export {
    forEach,
    map,
    reduce,
    deleteProperty,
    hasProperty,
    getEnumProps,
    upperProps,
    slice,
    createProxy
};
