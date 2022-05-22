function displayTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var twelveHour = "AM";
    // Date() gives us the time in 24 hour notation, so we convert it to 12
    if (h == 0) {
        h = 12;
    }
    else if (h > 12) {
        h -= 12;
        twelveHour = "PM";
    }
    else if (h == 12) {
        twelveHour = "PM";
    }
    // we add padding zeroes for style cuz Date() doesn't do that
    var hh = (h < 10) ? "0" + h.toString() : h.toString();
    var mm = (m < 10) ? "0" + m.toString() : m.toString();
    var ss = (s < 10) ? "0" + s.toString() : s.toString();
    var timeNow = hh + ":" + mm + ":" + ss + " " + twelveHour;
    document.getElementById("time").innerHTML = timeNow;
    // repeat displayTime() every 500ms 
    var t = setTimeout(function () { displayTime(); }, 500);
    // i honestly don't know what this means tbh
}
displayTime();
