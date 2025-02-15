let loaded = false;

function disableScroll() {
    document.body.classList.add("remove-scroll");
};

function enableScroll() {
    document.body.classList.remove("remove-scroll");
};

let width = 0;
let index = 1;

//main
window.onload = function() {
    LoadData();

    history.scrollRestoration = "manual";
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
    });


    disableScroll();


    if (document.getElementsByClassName("question")[0] != null) width = document.getElementsByClassName("question")[0].getBoundingClientRect().width;
    else width = screen.width;

    addEventListener("keydown", (e) => {
        window.scrollTo({
            top: 0,
            left: width*index,
            behavior: "smooth"
        });
        index++;
    });
};

window.onresize = function() {
    width = document.getElementsByClassName("question")[0].getBoundingClientRect().width;

    window.scrollTo({
        top: 0,
        left: width*index,
        behavior: "smooth"
    });
};