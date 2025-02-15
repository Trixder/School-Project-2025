function GenerateQuestions(questions, templates) {
    const questionsElement = document.body.getElementsByClassName("questions")[0];

    for (const question of questions.questions) {
        switch (question.question.type) {
            case "question":
                GenerateQuestion(questionsElement, question, templates);
                break;
            default:
                console.log("Missing template for question with type:" + question.question.type);
        }

        const resultHTML = parser.parseFromString(templates.AnswerResult, "text/html");
        const resultElement = resultHTML.body.firstChild;

        questionsElement.append(resultElement);
    }

    const scoreHTML = parser.parseFromString(templates.Score, "text/html");
        const scoreElement = scoreHTML.body.firstChild;

        questionsElement.append(scoreElement);

    width = document.getElementsByClassName("question")[0].getBoundingClientRect().width;
}

function GenerateQuestion(questionsElement, question, templates) {
        const questionHTML = parser.parseFromString(templates.Question, "text/html");
        const questionElement = questionHTML.body.firstChild;
        const valueElement = questionHTML.body.getElementsByClassName("value")[0];
        const answersElement = questionHTML.body.getElementsByClassName("answers")[0];

        questionElement.id = question.question.questionID;
        valueElement.innerText = question.question.value;

        for (const answer of question.question.answers) {
            const answerHTML = parser.parseFromString(templates.Answer, "text/html");
            const answerElement = answerHTML.body.firstChild;
            answerElement.innerText = answer;
            answersElement.append(answerElement);
        }

        questionsElement.append(questionElement);
}