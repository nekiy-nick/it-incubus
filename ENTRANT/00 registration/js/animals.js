// class Animal() {
// 	name: ''
// }

const animalHead = {
	monkey: '🐵',
	frog: '🐸',
	man: '👨🏼‍🦰',
	dog: '🐶',
	cat: '🐱',
	bear: '🐻',
	pig: '🐷',
	alien: '👽',
	rabbit: '🐰',
};

let selectAnimalNode = document.querySelector('.select-animal');
const animalHeadNode = document.querySelector('.animal-body__head');


selectAnimalNode.addEventListener('change', (e) => {
	alert(selectAnimalNode.value)
	animalHeadNode.textContent = animalHead[selectAnimalNode.value];
});
