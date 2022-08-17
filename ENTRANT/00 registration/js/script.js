let headerBlock = document.querySelector('.block-header');

let carrotBtnList = headerBlock.querySelectorAll('.block-header-ui-list__btn');

const rabbitBody = document.querySelector('.rabbit-body__belly');

const letsFatRabbit = function(plusFat) {
	let widthRabbit = rabbitBody.offsetWidth;
	if (widthRabbit > 110) rabbitBody.style.width = '0px';
	alert(plusFat)
	rabbitBody.style.width += +widthRabbit + +plusFat + 'px';
};

carrotBtnList.forEach( (item) => {
	item.addEventListener('click', (e) => {

		let itemBall = item.dataset.point;

		letsFatRabbit(itemBall)
	})
});

