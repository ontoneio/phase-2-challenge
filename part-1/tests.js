var fun = require('./functions')

testObj = {
  title: "On-tone-io",
  tracks: 15,
  genre: "breakbeat",
}

numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

fun.findDayName ("1987-01-01 07:00 MST")

fun.snippet("My name is Inigo Montoya", 10)

fun.numProps(testObj)

fun.filterBetween(numArr, 6, 14)
