//Data
let templates = {};
let questionsData;

    /* --- | Load the data | --- */
function LoadData() {
    //path of the folder and file names
    const templatesFolderPath = "../HTML/Templates/"
    const fileNames = ["Question", "Answer", "AnswerResult", "Score", "Video"]

    const jsonFolderPath = "../Questions/"
    const jsonFileName = "Testing.json"

    //loads templates
    Promise.all(fileNames.map(fileName => 
            fetch(templatesFolderPath + fileName + ".html")
                .then(response => response.text())
                .then(data => {
                    templates[fileName] = data;
                })
                .catch(error => console.error("Error loading JSON:", error))
    )).then(() => { //loads questions
        fetch(jsonFolderPath + jsonFileName)
        .then(response => response.json())
        .then(data => {
            questionsData = data;
            //generates HTML
            GenerateQuestions(questionsData, templates);
        })
        .catch(error => console.error("Error loading JSON:", error));
    });
}