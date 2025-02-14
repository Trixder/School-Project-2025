function LoadData() {
    const folderPath = "../Questions/"
    const fileName = "Testing.json"

    fetch(folderPath + fileName)
        .then(response => response.json())
        .then(data => {
            questions = data;
            console.log("Data Loaded:", questions);
            //Call something from here;
        })
        .catch(error => console.error("Error loading JSON:", error));
}