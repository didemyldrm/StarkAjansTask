var followNumber = 80;
var likeNumber = 803;
var timerFollow = null;
var timerLike = null;

function startTimer() {
    timerFollow = setInterval(function () {
        followNumber++;
        document.getElementById("followers").innerText = followNumber + "K";
    }, 2000);

    timerLike = setInterval(function () {
        likeNumber++;
        document.getElementById("likes").innerText = likeNumber + "K";
    }, 1000);

}
