var clock = document.getElementById('clock');

var updateTime = function () {
    var currentTime = new Date();
    var hours;
    var minutes;
    var seconds;

    if (currentTime.getHours()<10) {
        hours = '0' + currentTime.getHours();
    } else {
        hours = currentTime.getHours();
    }
    if (currentTime.getMinutes()<10) {
        minutes = ':0'+currentTime.getMinutes();
    } else {
        minutes = ':'+currentTime.getMinutes();
    }
    if (currentTime.getSeconds()<10) {
        seconds = ':0' + currentTime.getSeconds();
    } else {
        seconds = ':' + currentTime.getSeconds();
    }
    clock.textContent = hours + minutes + seconds;
};
setInterval(updateTime, 1000);