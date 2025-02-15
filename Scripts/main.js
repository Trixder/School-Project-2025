//variables for scrolling
let width = 0;
let index = 1;
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
    //loads data and generates html
    LoadData();

    //Resets position after refresh
    history.scrollRestoration = "manual";
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
    });

    //disables scrolling
    disableScroll();

    //sets scroll length
    if (width == null) width = screen.width;

    //TODO 1: Remove (testing)
    addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            UpdateSlider();
            index++;
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