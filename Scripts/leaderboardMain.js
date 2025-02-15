let users = [];

    /* --- | Main | --- */
window.onload = function() {
    FetchData();
};

function FetchData() {
    //TODO 1: placeholder 100% will need changes
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => {
            for (let user of data.results) {
                users.push([user.name.first, user.dob.age]);
            }
        }).then(data => {
            users.sort((a, b) => b[1] - a[1]);

            const leaderboard = document.getElementsByClassName("leaderboard")[0];
            
            for (let i = 0; i < users.length; i++) {
                let row = document.createElement('tr');
                let thRank = document.createElement('th');
                let thName = document.createElement('th');
                let thScore = document.createElement('th');

                thRank.textContent = i+1;
                thName.textContent = users[i][0];
                thScore.textContent = users[i][1];

                row.append(thRank);
                row.append(thName);
                row.append(thScore);
                leaderboard.append(row);
            }
        } ).catch(err => console.error(err));
}