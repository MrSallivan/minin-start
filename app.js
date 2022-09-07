const modal = document.querySelector('#modal')
const content = document.querySelector('#content')
const backdrop = document.querySelector('#backdrop')
const progress = document.querySelector('#progress')

content.addEventListener('click', openCard)
backdrop.addEventListener('click', closeModal)

const technologies = [
	{ title: 'HTML', description: 'HTML text', type: 'html', done: true },
	{ title: 'CSS', description: 'CSS text', type: 'css', done: true},
	{ title: 'JavaScript', description: 'JavaScript text', type: 'JavaScript', done: true },
	{ title: 'React', description: 'React text', type: 'React', done: false },
	{ title: 'GIT', description: 'GIT text', type: 'git', done: false}
]

function openCard() {
	modal.classList.add('open')
}
function closeModal() {
	modal.classList.remove('open')
}

function init() {
	renderCards()
	renderProgress()
}

function renderCards() {
	if (technologies.length === 0) {
		content.innerHTML = `<p class="empty">Технологий пока нет добавьте первую</p>`
	} else {
		content.innerHTML = technologies.map(toCard).join('')
	}
}

function renderProgress() {
	const percent = computeProgressPercent()
	let background

	if (percent <= 30) {
		background = '#e75a5a'
	} else if (percent > 30 && percent < 70) {
		background = '#f99415'
	} else {
		background = '#73ba3c'
	}

	progress.style.background = background
	progress.style.width = `${percent}%`
	progress.textContent = percent ? percent + '%' : ''

}

function computeProgressPercent() {
	let doneCount = 0

	if (technologies.length === 0) {
		return 0
	}

	for (let i = 0; i < technologies.length; i++) {
		if (technologies[i].done) doneCount++
	}
	return Math.round((100 * doneCount) / technologies.length)
}


function toCard(tech) {
	const doneClass = tech.done ? 'done' : ''

	return `
	<div class="card ${doneClass}">
		<h3>${tech.title}</h3>
	</div>	
	`
}

init()
