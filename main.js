const mainContainer = document.getElementById("main-contianer");
const chevIcon = document.getElementById("chevron-down");
const closeIcon = document.getElementById("close-icon");
const answer = document.getElementById("answer");

function toggleClick(){
    if (answer.style.display === "block") {
        mainContainer.style.height = "auto";
        mainContainer.style.boxShadow = "";
        mainContainer.style.backgroundColor = "";
        chevIcon.style.display = "block";
        closeIcon.style.display = "none";
        answer.style.display = "none";
    } else {
        mainContainer.style.height = "200px";
        mainContainer.style.boxShadow = "0 3px 6px rgba(0, 0, 0, 0.3), 0 3px 6px rgba(0, 0, 0, 0.3)"
        mainContainer.style.backgroundColor = "rgb(184, 157, 166)";
        chevIcon.style.display = "none";
        closeIcon.style.display = "block";
        answer.style.display = "block";
    }
}