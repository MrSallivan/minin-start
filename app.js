const modal = document.querySelector('#modal')
const content = document.querySelector('#content')
content.addEventListener('click', openCard)

function openCard(e){
	modal.classList.add('open')
}