// usefull links:
// https://developers.google.com/youtube/player_parameters

//modification
let resultWait = 1.5; //in seconds

//variables for scrolling
let width = 0;
let index = 0;

//required for parsing text to html
const parser = new DOMParser();

    /* --- | Disables Scrolling | --- */
function disableScroll() {
    document.body.classList.add("remove-scroll");
};

function enableScroll() {
    document.body.classList.remove("remove-scroll");
};

    /* --- | Main | --- */
window.onload = function() {
    console.log("TESTING: press \"enter\" to skip question");
    //loads data and generates html
    LoadData();

    //sets scroll length
    if (width == null) width = screen.width;

    //Resets position after refresh
    history.scrollRestoration = "manual";
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
    });

    //disables scrolling
    disableScroll();

    //TODO 1: Remove (testing only)
    addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            index++;
            UpdateSlider();
        }
    });
};

    /* --- | Basic Responsibility | --- */
window.onresize = function() {
    width = document.getElementsByClassName("question")[0].getBoundingClientRect().width;
    UpdateSlider();
};

    /* --- | Scrolls Horizontaly | --- */
function UpdateSlider() {
    window.scrollTo({
        top: 0,
        left: width*index,
        behavior: "smooth"
    });
}