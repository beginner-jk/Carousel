const page_number = document.querySelector("#page-number").innerText;
const left_button = document.querySelector("button:first-child");
const right_button = document.querySelector("button:last-child");

if (page_number == 1) {
    document.body.style.backgroundImage = "url('images/image-1.png')";
} else if (page_number == 2) {
    document.body.style.backgroundImage = "url('images/image-2.png')";
} else if (page_number == 3) {
    document.body.style.backgroundImage = "url('images/image-3.png')";
} else if (page_number == 4) {
    document.body.style.backgroundImage = "url('images/image-4.png')";
} else {
    document.body.style.backgroundImage = "url('images/image-5.png')";
}

function goToBefore() {
    if (page_number == 1) {
        window.location = "5.html";
    } else if (page_number == 2) {
        window.location = "index.html";
    } else if (page_number == 3) {
        window.location = "2.html";
    } else if (page_number == 4) {
        window.location = "3.html";
    } else if (page_number == 5) {
        window.location = "4.html";
    }
}

function goToAfter() {
    if (page_number == 1) {
        window.location = "2.html";
    } else if (page_number == 2) {
        window.location = "3.html";
    } else if (page_number == 3) {
        window.location = "4.html";
    } else if (page_number == 4) {
        window.location = "5.html";
    } else if (page_number == 5) {
        window.location = "index.html";
    }
}

left_button.addEventListener("click", goToBefore);
right_button.addEventListener("click", goToAfter);