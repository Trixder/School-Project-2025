let score = 0;
let checked = null;
let questionsData;

function CheckAnswer() {
    let currentQuestion = checked.parentElement.parentElement.id
    const answerValue = checked.innerText;

    const correctID = questionsData.questions[currentQuestion].question.correctID;
    const selected = questionsData.questions[currentQuestion].question.answers.indexOf(answerValue);

    if (correctID == selected) {
        score++;
    }
}

function toggleCheckbox(element) {
    if (checked == null) {
        checked = element;
        checked.classList.toggle("checked");
    } else {
        checked.classList.toggle("checked");
        checked = element;
        checked.classList.toggle("checked");
    }
    console.log(element.parentElement.parentElement.id);
    CheckAnswer();
}