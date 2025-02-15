function GenerateQuestions(questions, templates) {
    const questionsElement = document.body.getElementsByClassName("questions")[0];

    const parser = new DOMParser();

    for (const question of questions.questions) {
        
        switch (question.question.type) {
            case "question":
                GenerateQuestion(questionsElement, question, parser, templates);
                break;
            default:
                console.log("Something went wrong");
        }
    }

    width = document.getElementsByClassName("question")[0].getBoundingClientRect().width;
    loaded = true;
}

function GenerateQuestion(questionsElement, question, parser, templates) {
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