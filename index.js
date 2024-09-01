let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homeScore = 0;
let guestScore = 0;


function increaseHomeScore(points) {
    homeScore += points;
    homeScoreEl.innerText = homeScore;

    // Add the afterglow effect if 3 points are added
    if (points === 3) {
        let button = document.querySelector("button[onclick='increaseHomeScore(3)']");
        button.classList.add("afterglow");

        // Remove the afterglow class after the animation ends
        setTimeout(function() {
            button.classList.remove("afterglow");
        }, 500); // Match this time to the animation duration
    }
}

function increaseGuestScore(points) {
    guestScore += points;
    guestScoreEl.innerText = guestScore;

    // Add the afterglow effect if 3 points are added
    if (points === 3) {
        let button = document.querySelector("button[onclick='increaseGuestScore(3)']");
        button.classList.add("afterglow");

        // Remove the afterglow class after the animation ends
        setTimeout(function() {
            button.classList.remove("afterglow");
        }, 500); // Match this time to the animation duration
    }
}

function resetNewGame() {
    guestScore = 0
    homeScore = 0
    guestScoreEl.innerText = guestScore
    homeScoreEl.innerText = homeScore
}