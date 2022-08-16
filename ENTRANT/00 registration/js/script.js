let headerBlock = document.querySelector('.block-header');

let carrotBtnList = headerBlock.querySelectorAll('.block-header-ui-list__btn');

const rabbitBody = document.querySelector('.rabbit-body');

const letsFatRabbit = function() {
	let widthRabbit = rabbitBody.style.width;

	alert(widthRabbit)
}

carrotBtnList.forEach( (item) => {
	item.addEventListener('click', (e) => {

		let itemBall = item.dataset.point;
		letsFatRabbit()
	})
})


