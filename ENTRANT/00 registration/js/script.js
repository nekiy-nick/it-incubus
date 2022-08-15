let headerBlock = document.querySelector('.block-header');

let carrotBtnList = headerBlock.querySelectorAll('.block-header-ui-list__btn_carrot');

carrotBtnList.forEach( (item) => {
	item.addEventListener('click', (e) => {
		console.log(item)
	})
})

