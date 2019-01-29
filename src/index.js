/* ДЗ 6.1 - Асинхронность и работа с сетью */

/**
 * Функция должна создавать Promise, который должен быть resolved через seconds секунду после создания
 *
 * @param {number} seconds - количество секунд, через которое Promise должен быть resolved
 * @return {Promise}
 */
// задача 1 ++++++++++++++++++++++++++++++
function delayPromise(seconds) {
	return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
		}, 1000);
	});

}



/**
 * Функция должна вернуть Promise, который должен быть разрешен массивом городов, загруженным из
 * https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json
 * Элементы полученного массива должны быть отсортированы по имени города
 *
 * @return {Promise<Array<{name: String}>>}
 */
function loadAndSortTowns() {
	var prom = new Promise(function (resolve, reject) {

		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');
		xhr.send();

		xhr.addEventListener('load', function () {
			var parsJS = JSON.parse(xhr.responseText);
			var arr = [];
			for (var i = 0; i < parsJS.length; i++) {
				arr.push(parsJS[i].name);
			}
			console.log(arr.sort());
			resolve();
		});
	});

}

export {
    delayPromise,
    loadAndSortTowns
};
