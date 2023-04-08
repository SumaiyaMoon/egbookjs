


// //chp 20

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
//  var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
//  var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) {

// for (var j = 0; j < lastNames.length; j++) {

// fullNames.push(firstNames[i] + lastNames[j]);

// }

// }




// // chp 21

// var cleanestCities = ["Cheyenne", "cheyenne", "Santa Fe", "santa fe", "Tucson", "tucson", "Great Falls", "great falls", "Honolulu", "honolulu"];

// var cityToCheck = prompt("Enter your city");

// cityToCheck = cityToCheck.toLowerCase();

// var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];

// for (var i = 0; i <= 4; i++) {

// if (cityToCheck === cleanestCities[i]) {

// alert("It's one of the cleanest cities");

// }

// }





// // chp 22

//  var firstChar = cityToCheck.slice(0, 1);
//  console.log(firstChar);
//  var otherChars = cityToCheck.slice(1);
//  console.log(otherChars);
//  firstChar = firstChar.toUpperCase();
//  console.log(firstChar);
//  otherChars = otherChars.toLowerCase();
//  console.log(otherChars);
//  var cappedCity = firstChar + otherChars;
//  console.log(cappedCity);



//  var month = prompt("Enter a month");
//  var charsInMonth = month.length;
//   if (charsInMonth >= 3) {
//   monthAbbrev = month.slice(0, 3);
//   }
//   console.log(monthAbbrev);

// //equals sign added




// var str = prompt("Enter some text");
// console.log(str)
//  var numChars = str.length;
//  for (var i = 0; i < numChars; i++) {
//  if (str.slice(i, i + 2) === " ") {
//  alert("No double spaces!");
// //  break;
// break;
//  }
//  }








// // chp 23

// var text=" They say it should be the Second World War. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers. It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his."

// // for (var i = 0; i < text.length; i++) {
// //      if (text.slice(i, i + 12) === "World War II") {
// //      text = text.slice(0, i) + "THE SECOND WORLD WAR" + text.slice(i + 12);
// //      }
// //      }

// // console.log(text);


// // var firstChar = text.indexOf("World War II");
// // console.log(text);

// //  if (firstChar !== -1) {
// //  text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
// //  }
// // console.log(text);

// var text = "To be or not to be.";
// var segIndex = text.lastIndexOf("be");
// console.log(segIndex);






// //chp 24


// var firstName = prompt("Enter Name");
// var firstChar = firstName.slice(0, 1);
// console.log(firstChar);
// var firstChar = firstName.charAt(0);
// console.log(firstChar);

// var lastChar = firstName.charAt(firstName.length - 1);
// console.log(lastChar);



// var text= prompt("Enter any text")
// for (var i = 0; i < text.length; i++) {
//      if (text.charAt(i) === "!") {
//      alert("Exclamation point found!");
//      break;
//      }
//      }







// // chp 25
//  var text=" They say it should be the Second World War. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers. It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his."
//  var newText = text.replace("World War II", "the Second World War");
// console.log(newText);
//  var newText = text.replace(/the Second World War/g, "World War II");
//  console.log(newText);




// // chp 26
// var scoreAvg = +prompt("Enter rating")
// scoreAvg = Math.round(scoreAvg);
// console.log(scoreAvg);
// var scoreAvg = Math.ceil(.000001);
// console.log(scoreAvg);
// var scoreAvg = Math.floor(.999999);
// console.log(scoreAvg);



// // chp 27
// var randomNumber = Math.random();
// console.log(randomNumber)

// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 6) + 1;
// var numberOfStars = Math.floor(improvedNum);
// console.log(numberOfStars);



// // chp 28
// var currentAge = prompt("Enter your age.");
// var yearsEligibleToVote = currentAge - 18;
// console.log(yearsEligibleToVote);


// // var currentAge = prompt("Enter your age.");
// var qualifyingAge = currentAge + 1;
// console.log(qualifyingAge)


// // var currentAge = prompt("Enter your age.");
// var qualifyingAge = parseInt(currentAge) + 1;
// console.log(qualifyingAge)


// var myInteger = parseInt("1.9999");
// console.log(myInteger);
// var myFractional = parseFloat("1.9999");
// console.log(myFractional);




// //chp 29
// var integerString = "24"
// var num = Number(integerString);
// console.log(num);

// var floatingNumString = "24.9876";
// var num = Number(floatingNumString);
// console.log(num);


// var numberAsNumber = 1234;
// var numberAsString = numberAsNumber.toString();
// console.log(typeof numberAsString);




// // chp 30
// var price =9.95
// var taxRate= 6.5/100
// var total = price + (price * taxRate);
// console.log(total);
// var prettyTotal = total.toFixed(2);
// var currencyTotal = "$" + prettyTotal;

// var prettyTotal = total.toFixed();
// console.log(prettyTotal)
// console.log(currencyTotal)


// var num= +prompt("Enter no.");
// var str = num.toString();
//  if (str.charAt(str.length - 1) === "5") {
// str = str.slice(0, str.length - 1) + "6";
// }
// num = Number(str);
// prettyNum = num.toFixed(2);
// console.log(num);
// console.log(str);
// console.log(prettyNum);



// // chp 31
// var rightNow = new Date();
// var dateString = rightNow.toString();
// console.log(dateString);
// console.log(rightNow);
// var theDay = rightNow.getDay();
// console.log(theDay);



// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var nameOfToday = dayNames[theDay];
// var theDay = now.getDay();
// console.log(nameOfToday);



// //chp 32
// var d = new Date();
// var currentMonth = d.getMonth();
// var currYr = d.getFullYear();
// var currentHrs = d.getHours();
// var currMins = d.getMinutes();
// var currSecs = d.getSeconds()
// var currMills = d.getMilliseconds();
// var millsSince = d.getTime();
// console.log(currentMonth +" "+ currYr);
// console.log(currentHrs +" "+ currMins +" "+currSecs+" "+currMills);
// console.log(millsSince);


// //chp 33
// var today = new Date();
// var doomsday = new Date("June 30, 2035");
// var msToday = today.getTime();
// var msDoomsday = doomsday.getTime();
// console.log(msDoomsday);

// var msDiff = msDoomsday - msToday;
// var dDiff = msDiff / (1000 * 60 * 60 * 24);
// dDiff = Math.floor(dDiff);
// console.log(dDiff);



// var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime();
// var daysTillDoom = Math.floor(msDiff / (1000 * 60 * 60 * 24));
// console.log(daysTillDoom);


// var d = new Date("July 21, 1983 13:25:00");
// console.log(d);




// //chp 34
// var d = new Date();
// d.setFullYear(2001);

// d.setMonth(11);

// d.setDate(15);

// d.setHours(13);

// d.setMinutes(05);

// d.setSeconds(55);

// d.setMilliseconds(867);

// console.log(d);



// //chp 35
// function tellTime() {

//     var now = new Date();
//     var theHr = now.getHours();
//     var theMin = now.getMinutes();
//     alert("Current time: "+ theHr + ":" + theMin);

// }
// tellTime();





// // chp 36

// function greetUser() {
//      alert("Hello, there.");
//      }
// greetUser("Hello, there.");


// function greetUserxyz(greeting) {
//     var greeting = "Hello, there."

//     alert(greeting);
//     }
// greetUserxyz();
    


// function showMessage(m, string, num){
//  alert(m + string + num);
//  }
//  var month = "March";
// showMessage(month, "'s winner number is ", 23);



// // chp 37
// function calcTot(merchTot) {
// var orderTot;
// if (merchTot >= 100) {
// orderTot = merchTot;
// }
// else if (merchTot < 50.01) {
// orderTot = merchTot + 5;
// }
// else {
// orderTot = merchTot + 5 + (.03 * (merchTot - 50));
// }
// return orderTot;
// }
// var totalToCharge = calcTot(79.99);
// alert(calcTot(79.99));



//chp 38
// var theSum
// //  addNumbers();


//  function addNumbers() {

//     // theSum = 2 + 2;

//     console.log(theSum);
//     }

//     addNumbers();


    


    