let score = 0;
let checked = null;
let questionsData;

function CheckAnswer() {
    let currentQuestion = checked.parentElement.parentElement.id
    const answerValue = checked.innerText;

    const correctID = questionsData.questions[currentQuestion].question.correctID;
    const selected = questionsData.questions[currentQuestion].question.answers.indexOf(answerValue);
    
    const resultElement = document.getElementsByClassName("result")[currentQuestion];

    console.log(resultElement);

    if (correctID == selected) {
        resultElement.style.backgroundColor = "green";
        score++;
    } else resultElement.style.backgroundColor = "red";


    UpdateSlider();
    index++;

    setTimeout(() => {
        UpdateSlider();
        index++;
    }, 1000);
}

function ToggleCheckbox(element) {
    if (checked == null) {
        checked = element;
        checked.classList.toggle("checked");
    } else {
        checked.classList.toggle("checked");
        checked = element;
        checked.classList.toggle("checked");
    }
}