    /* --- | Generates HTML | --- */
function GenerateQuestions(questions, templates) {
    //get data of question
    const questionsElement = document.body.getElementsByClassName("questions")[0];

    for (const question of questions.questions) {
        //selects template of question to generate by type
        switch (question.question.type) {
            case "question":
                GenerateQuestion(questionsElement, question, templates);
                break;
            default:
                console.log("Missing template for question with type:" + question.question.type);
        }

        //result slide for question
        const resultHTML = parser.parseFromString(templates.AnswerResult, "text/html");
        const resultElement = resultHTML.body.firstChild;

        questionsElement.append(resultElement);
    }

    //complete result slide
    const scoreHTML = parser.parseFromString(templates.Score, "text/html");
        const scoreElement = scoreHTML.body.firstChild;

        questionsElement.append(scoreElement);

    //sets scroll length
    width = document.getElementsByClassName("question")[0].getBoundingClientRect().width;
}

    /* --- | Generates questions of type: "question" | --- */
function GenerateQuestion(questionsElement, question, templates) {
        //parses the templates to HTML
        const questionHTML = parser.parseFromString(templates.Question, "text/html");
        const questionElement = questionHTML.body.firstChild;
        const valueElement = questionHTML.body.getElementsByClassName("value")[0];
        const answersElement = questionHTML.body.getElementsByClassName("answers")[0];

        //sets value
        questionElement.id = question.question.questionID;
        valueElement.innerText = question.question.value;

        //generates the answers
        for (const answer of question.question.answers) {
            const answerHTML = parser.parseFromString(templates.Answer, "text/html");
            const answerElement = answerHTML.body.firstChild;
            answerElement.innerText = answer;
            answersElement.append(answerElement);
        }

        questionsElement.append(questionElement);
}