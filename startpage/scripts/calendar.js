function displayDate() {
    var today = new Date();
    var dayInWeek = "";
    var month = "";
    var day = "";
    var year = "";
    var m = today.getMonth();
    // month full name
    switch (m) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
        default:
            month = ""; //display nothing
            console.log("Something is catastrophically wrong");
    }
    // day full name
    var w = today.getDay();
    switch (w) {
        case 0:
            dayInWeek = "Sunday";
            break;
        case 1:
            dayInWeek = "Monday";
            break;
        case 2:
            dayInWeek = "Tuesday";
            break;
        case 3:
            dayInWeek = "Wednesday";
            break;
        case 4:
            dayInWeek = "Thursday";
            break;
        case 5:
            dayInWeek = "Friday";
            break;
        case 6:
            dayInWeek = "Saturday";
            break;
        default:
            dayInWeek = ""; //display nothing
            console.log("Something is catastrophically wrong");
    }
    day = today.getDate().toString();
    year = today.getFullYear().toString();
    var dayToday = dayInWeek + ", " + month + " " + day + " " + year;
    console.log("Welcome back. Today is " + dayToday);
    document.getElementById("date").innerHTML = dayToday;
    var t = setTimeout(function () { displayDate(); }, 1000);
}
displayDate();
