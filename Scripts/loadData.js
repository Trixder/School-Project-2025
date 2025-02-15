function LoadData() {
    const templatesFolderPath = "../HTML/Templates/"
    const fileNames = ["Question", "Answer"]
    let templates = {};

    const jsonFolderPath = "../Questions/"
    const jsonFileName = "Testing.json"

    Promise.all(fileNames.map(fileName => 
            fetch(templatesFolderPath + fileName + ".html")
                .then(response => response.text())
                .then(data => {
                    templates[fileName] = data;
                })
                .catch(error => console.error("Error loading JSON:", error))
    )).then(() => {
        fetch(jsonFolderPath + jsonFileName)
        .then(response => response.json())
        .then(data => {
            questions = data;
            questionsData = data;
            GenerateQuestions(questions, templates);
        })
        .catch(error => console.error("Error loading JSON:", error));
    });
}