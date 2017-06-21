var wk = module.exports = {}

 wk.findDayName = function (date) {
  let day;
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
  console.log("The date is " + month + " " + day + " " + year)
}
