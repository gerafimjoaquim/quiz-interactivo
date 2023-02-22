const form = query('.quiz-form')
const result = query('.quiz-result')
const correctAnswers = ['D', 'C', 'A', 'B']

const btnGoToRepository = query('.btn-go-to-repository')

form.addEventListener('submit', event => {
	event.preventDefault()

	let score = 0
	const userAnswers = [
		event.target.inputQuestion1.value,
		event.target.inputQuestion2.value,
		event.target.inputQuestion3.value,
		event.target.inputQuestion4.value
	]

	userAnswers.forEach((userAnswer, index) => {

		if (userAnswer === correctAnswers[index]){
			score += 25
		}

		let counter  = 0
		const timer = setInterval(() => {	

			if (counter === score) {
				clearInterval(timer)
			}

			result.textContent = `Acertou ${counter}% do quiz!`

			counter ++
		}, 40)
	})

	scrollTo(0,0)
	addClass(result, 'quiz-result-style')

})

function goToRepository () {
	const repositoryName = 'https://github.com/gerafimjoaquim/quiz-interactivo'

	setAttribute(btnGoToRepository, 'target', '_blank')
	setAttribute(btnGoToRepository, 'href', repositoryName)

}

btnGoToRepository.addEventListener('click', goToRepository)