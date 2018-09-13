const cv = document.getElementById("cv");
document.body.removeChild(cv);
const questionArray = [
	{
		question: "Jaka jest stolica Polski?",
		answers: {
			a: "Warszawa",
			b: "Krakow"
		},
		correctAnswer: "a"
	},
	{
		question: "Ile to 5*5?",
		answers: {
			a: "13",
			b: "25"
		},
		correctAnswer: "b"
	},
	{
		question: "Rozwiniecie skrotu HTML to:",
		answers: {
			a: "HyperTurbo Multifunctional Ladder",
			b: "HyperText Markup Language"
		},
		correctAnswer: "b"
	}
];

const quizContainer = document.getElementById('quiz');
const mainQuiz = document.getElementById('quizcontainer');

function builQuiz() {

	const output = [];

	questionArray.forEach((currentQuestion, questionNumber) => {
		const answers = [];
		for (letter in currentQuestion.answers) {
			answers.push(
				`<label><input class="icheck" type="radio" name="question${questionNumber}" value="${letter}"> 
					
					${currentQuestion.answers[letter]}
				</label>`
			);
		}


		output.push(
			`<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
<div class ="questionNum">pytanie ${questionNumber+1}/${questionArray.length}</div>
         </div>`
		);
	});
	output.push(`<div class="slide"><div class="lastone">Brak dostępu.</div>`);
	quiz.innerHTML = output.join(' ');




};


function check() {

	let correct = 0;

	questionArray.forEach((currentQuestion, questionNumber) => {

		const selector = `input[name=question` + questionNumber + `]`;
		const inputElement = quizContainer.querySelectorAll(selector);
		console.log(inputElement);
		for (let i = 0; i < inputElement.length; i++) {
			console.log(inputElement[i]);
			inputElement[i].addEventListener('click', function () {

				if (inputElement[i].value === currentQuestion.correctAnswer) {
					inputElement[i].parentElement.style.backgroundColor = "green";
					correct++;
					if (correct == 3) {
						setTimeout(function () {
							document.body.removeChild(mainQuiz);
							document.body.appendChild(cv);
						}, 300);

					}
					setTimeout(function () {
						showNextSlide();
					}, 300);


					console.log(correct);
				} else {
					inputElement[i].parentElement.style.backgroundColor = "red";
					setTimeout(function () {
						showNextSlide();
					}, 300);
				}


			})
		}



	});



}



builQuiz();
check();

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;


function showSlide(n) {

	slides[currentSlide].classList.remove('active-slide');
	slides[n].classList.add('active-slide');
	currentSlide = n;

}
showSlide(0);

function showNextSlide() {



	showSlide(currentSlide + 1);
}
