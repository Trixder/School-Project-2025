//variables for score
let score = 0;
let checked = null;

    /* --- | Checks Answer | --- */
function CheckAnswer() {
    if (checked == null) return;

    //id of current current question
    let currentQuestion = checked.parentElement.parentElement.id;
    //value of answer
    const answerValue = checked.innerText;

    //id of player answer and correct answer
    const correctID = questionsData.questions[currentQuestion].question.correctID;
    const selected = questionsData.questions[currentQuestion].question.answers.indexOf(answerValue);
    
    //TODO 1: placeholder thing
    const resultElement = document.getElementsByClassName("result")[currentQuestion];

    if (correctID == selected) {
        resultElement.style.backgroundColor = "green";
        score++;
    } else resultElement.style.backgroundColor = "red";

    //deselects the answer
    checked = null;

    //moves the slide
    UpdateSlider();
    index++;

    //waits on the result for a sec
    setTimeout(() => {
        UpdateSlider();
        index++;
    }, 1000);
}

//stores the selected answer
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