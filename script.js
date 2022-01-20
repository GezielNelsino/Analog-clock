onload = () => {
    rotateNumbers();
    changeTime();
    setInterval(changeTime, 1000);
};

const numbers = document.querySelectorAll(".numbers");

const hoursHTML = document.querySelector("#hours");
const minutesHTML = document.querySelector("#minutes");
const secondsHTML = document.querySelector("#seconds");

function rotateNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        let value = 30 * (i + 1);
        numbers[i].style.setProperty("--rotation", `${value}deg`);
        numbers[i].firstChild.style.setProperty(
            "--rotation",
            `${360 - value}deg`
        );
    }
}

function changeTime() {
    var today = new Date();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    hoursHTML.style.transform = `rotate(${hours * 30 + minutes / 2}deg)`;
    minutesHTML.style.transform = `rotate(${minutes * 6}deg)`;
    secondsHTML.style.transform = `rotate(${seconds * 6}deg)`;
}
