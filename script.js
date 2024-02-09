function setAlert() {
    var timeInput = document.getElementById("time").value;
    var timeArray = timeInput.split(":");
    var hours = parseInt(timeArray[0]);
    var minutes = parseInt(timeArray[1]);
    var seconds = parseInt(timeArray[2]);

    var currentTime = new Date();
    var hoursDiff = hours - currentTime.getHours();
    var minutesDiff = minutes - currentTime.getMinutes();
    var secondsDiff = seconds - currentTime.getSeconds();

    var milliseconds = (hoursDiff * 3600 + minutesDiff * 60 + secondsDiff) * 1000;

    if (milliseconds < 0) {
        alert("Invalid time: Please enter a time in the future.");
        return;
    }

    setTimeout(function() {
        new Notification("My Great Song");
    }, milliseconds);
}
