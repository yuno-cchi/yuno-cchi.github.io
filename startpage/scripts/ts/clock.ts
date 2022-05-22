function displayTime() {
    const today = new Date();
    let h: number = today.getHours();
    let m: number = today.getMinutes();
    let s: number = today.getSeconds();
    let twelveHour: string = "AM";

    // Date() gives us the time in 24 hour notation, so we convert it to 12
    if(h == 0) {
        h = 12;
    } else if (h > 12) {
        h -= 12;
        twelveHour = "PM";
    } else if (h == 12) {
        twelveHour = "PM";
    }

    // we add padding zeroes for style cuz Date() doesn't do that

    let hh: string = (h < 10) ? "0" + h.toString() : h.toString();
    let mm: string = (m < 10) ? "0" + m.toString() : m.toString();
    let ss: string = (s < 10) ? "0" + s.toString() : s.toString();

    let timeNow: string = hh + ":" + mm + ":" + ss + " " +  twelveHour;

    document.getElementById("time").innerHTML = timeNow;

    // repeat displayTime() every 500ms 
    let t = setTimeout(function(){ displayTime() }, 500);
    // i honestly don't know what this means tbh
}

displayTime();