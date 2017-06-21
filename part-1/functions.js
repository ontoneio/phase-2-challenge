var wk = module.exports = {}

 wk.findDayName = function (date) {
  let day;
  let monthName;
  let time = new Date(date)
  let year = time.getFullYear()
  let month = time.getMonth()
  let dayNum = time.getDate()
  let dayName = time.getDay()
    switch (dayName) {
      case 0:
          day = "Sunday";
          break;
      case 1:
          day = "Monday";
          break;
      case 2:
          day = "Tuesday";
          break;
      case 3:
          day = "Wednesday";
          break;
      case 4:
          day = "Thursday";
          break;
      case 5:
          day = "Friday";
          break;
      case 6:
          day = "Saturday";
  }
  switch (month) {
    case 0:
        monthName = "January";
        break;
    case 1:
        monthName = "February";
        break;
    case 2:
        monthName = "March";
        break;
    case 3:
        monthName = "April";
        break;
    case 4:
        monthName = "May";
        break;
    case 5:
        monthName = "June";
        break;
    case 6:
        monthName = "July";
        break;
    case 7:
        monthName = "August";
        break;
    case 8:
        monthName = "September";
        break;
    case 9:
        monthName = "October";
        break;
    case 10:
        monthName = "November";
        break;
    case 11:
        monthName = "December";
        break;
      }
  console.log("The date is " + day + " " + monthName + " " + year)
}

wk.snippet = function (string, maxlength) {
  // let strSize = string.length;
  let short = string.substring(0, maxlength)

  console.log(short + "...");
}
