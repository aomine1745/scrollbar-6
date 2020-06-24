const progressbar = document.getElementById('progressbar')
const percent = document.getElementById('percent')

const totalHeight = document.body.scrollHeight - window.innerHeight
console.log(document.body.scrollHeight, window.innerHeight, window.pageYOffset)
window.onscroll = () => {
	console.log(window.pageYOffset, window.scrollY, document.documentElement.scrollTop)
	const progress = (window.pageYOffset / totalHeight) * 100
	progressbar.style.height = progress + '%'
	percent.innerHTML = `Page Scrolled ${Math.round(progress)} %`
}