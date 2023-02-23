const form = query('.quiz-form')
const scoreResultContainer = query('.score-result-container')
const correctAnswers = ['D', 'C', 'A', 'B', 'C']

const btnGoToRepository = query('.btn-go-to-repository')

const getUserAnswers = userAnswers => {
	correctAnswers.forEach((_, index) => {
		const userAnswer = event.target[`inputQuestion${index + 1}`].value
		userAnswers.push(userAnswer)
	})
}

const showScore = () => {
	setAttribute(scoreResultContainer, 'class', 'quiz-result-style')
}

const animateScore = score => {
	let timer = null
	const time = 20
	let counter = 0

	timer = setInterval(() => {
		
		scoreResultContainer.textContent = `Acertou ${counter}% do quiz!`

		if (score === counter) {
			clearInterval(timer)
		}

		counter++
	}, time)

	scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	})
}

form.addEventListener('submit', event => {
	event.preventDefault()
	const userAnswers = []

	let score = 0
	
	getUserAnswers(userAnswers)
	
	userAnswers.forEach((userAnswer, index) => {
		if (userAnswer === correctAnswers[index]) {
			score += 20
		}
	})

	animateScore(score)
	showScore()
})

function goToRepository () {
	const repositoryName = 'https://github.com/gerafimjoaquim/quiz-interactivo'

	setAttribute(btnGoToRepository, 'target', '_blank')
	setAttribute(btnGoToRepository, 'href', repositoryName)

}

btnGoToRepository.addEventListener('click', goToRepository)
