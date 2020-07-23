// ===================================  Chapter 21-25  ===================================

// ===================================  Chapter 21-25  Task_1  ===================================  

// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName + " " + lastName;
// alert(fullName.toUpperCase())

// ===================================  Chapter 21-25  Task_2  ===================================  

// var favoriteMobile = prompt("Enter your favorite mobile phone model");
// document.write("<h2>My favorite phone is: " + favoriteMobile + "<br>");
// var lengthfavoriteMobile = favoriteMobile.length;
// document.write("Length of string: " + lengthfavoriteMobile);

// ===================================  Chapter 21-25  Task_3  ===================================  

// var string = "Pakistani";
// document.write("<h2>String: " + string);
// document.write("<br>Index of 'n': " + string.indexOf("n"));

// ===================================  Chapter 21-25  Task_4  ===================================  

// var string = "Hello World";
// document.write("<h2>String: " + string);
// document.write("<br>Last index of 'l': " + string.lastIndexOf("l"));

// ===================================  Chapter 21-25  Task_5  ===================================  

// var string = "Pakistani";
// document.write("<h2>String: " + string);
// document.write("<br>Character at index 3: " + string.charAt(3));

// ===================================  Chapter 21-25  Task_6  ===================================  

// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName.concat(" ", lastName);
// alert("Welcome to our Website " + fullName.toLowerCase())

// ===================================  Chapter 21-25  Task_7  ===================================  

// var city = "Hyderabad";
// document.write("<h2>City: " + city + "<br>");
// document.write("After replacement: " + city.replace("Hyder", "Islam"));

// ===================================  Chapter 21-25  Task_8  ===================================  

// var message = "Ali and Sami are best friends. They play cricket and football together";
// document.write("<h2>Message: " + message + "<br><br>");
// document.write("After replacement: " + message.replace("and", "&"));

// ++++++++++++++++++++++++++++++++++++++++  OR  ++++++++++++++++++++++++++++++++++++++++  

// var message = "Ali and Sami are best friends. They play cricket and football together";
// document.write("<h2>Message: " + message + "<br><br>");
// var regex = /and/gi;
// var replaceMessage = (message.replace(regex, '&'));
// document.write("After replacement: " + replaceMessage);

// ===================================  Chapter 21-25  Task_9  ===================================  

// var string = "472";
// var stringtoNuumber = Number(string);
// document.write("<b>Value: " + string + "<br>Type: " + typeof (string) + "<br>Value: " + stringtoNuumber + "<br>Type: " + typeof (stringtoNuumber));

// ===================================  Chapter 21-25  Task_10  ===================================  

// var userInput = prompt("User Input");
// document.write("<b>User Input: " + userInput + "<br>Upper case: " + userInput.toUpperCase());

// ===================================  Chapter 21-25  Task_11  ===================================  

// var userInput = prompt("User Input");
// var sentence = userInput.toLowerCase().split(" ");
// for (var i = 0; i < sentence.length; i++) {
//     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
// }
// document.write("<h2>User Input: " + userInput + "<br>Title case: " + sentence.join(" "));

// ===================================  Chapter 21-25  Task_12  ===================================  

// var num = "35.36";
// var removeDot = num.split('.').join("");
// document.write("<h2>Number: " + num + "<br>Result: " + removeDot);

// ===================================  Chapter 21-25  Task_13  ===================================  

// var username = prompt("Enter Your Username");
// var regex = /^[A-Za-z0-9 ]+$/;
// var isValid = regex.test(username);
// if (!isValid) {
//     alert("Please enter a valid username");
// }
// else{
//     alert("Username is correct");
// }

// ===================================  Chapter 21-25  Task_14  ===================================  

// var customerOrder = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am ?");
// var lower_case = customerOrder.toLowerCase();
// var bakery = ["cake", "applepie", "cookie", "chips", "patties"];
// for (i = 0; i <= bakery.length; i++) {
//     if (lower_case == bakery[i]) {
//         alert(customerOrder + ' is available at index ' + i + ' in our bakery ');
//         break;
//     }
//     if (i == bakery.length) {
//         alert('We are sorry ' + customerOrder + ' is not available is our bakery ');
//     }
// }

// ===================================  Chapter 21-25  Task_15  ===================================

// const password = prompt('Enter Your Password');
// const validation = /^[A-Za-z]\w{7,14}$/;
// if (password.match(validation)) {
//     alert('Correct Password');
// }
// else {
//     alert('Password can not start with number!')
// }

// ===================================  Chapter 21-25  Task_16  ===================================  

// var university = "University of Karachi";
// var arr = university.split("");
// var text = "";
// var i;
// for (i = 0; i < arr.length; i++) {
//     text += arr[i] + "<br>"
// }
// document.write(text);

// ===================================  Chapter 21-25  Task_17  ===================================  

// var userInput = prompt("Enter Input");
// document.write("<h2>User input: " + userInput);
// var lastLetter = userInput[userInput.length - 1];
// document.write("<br>Last character of input: " + lastLetter);

// ===================================  Chapter 21-25  Task_18  ===================================

// var string = "The quick brown fox jumps over the lazy dog";
// document.write("<h3>Text: " + string + "<br>There are " + string.split("the").length + " occurrance(s) of word 'the'");





// ===================================  Chapter 26-30  ===================================

// ===================================  Chapter 26-30 Task_1 ===================================

// var number = prompt("Enter Positive Number");
// if (number > 0) {
//     document.write("<h2>Number: " + number);
//     document.write("<br>Round off value: " + Math.round(number));
//     document.write("<br>Floor value: " + Math.floor(number));
//     document.write("<br>Ceil value: " + Math.ceil(number));
// } else {
//     document.write("<br>Enter Positive Number And Try Again");
// }

// ===================================  Chapter 26-30 Task_2 ===================================

// var floatingNumber = prompt("Enter Negative Floating Point Number");
// if (floatingNumber < 0) {
//     document.write("<h2>Number: " + floatingNumber);
//     document.write("<br>Round off value: " + Math.round(floatingNumber));
//     document.write("<br>Floor value: " + Math.floor(floatingNumber));
//     document.write("<br>Ceil value: " + Math.ceil(floatingNumber));
// } else {
//     document.write("<br><h2>Enter Negative Floating Point Number And Try Again");
// }

// ===================================  Chapter 26-30 Task_3 ===================================

// var absoluteNumber = prompt("Enter a number to check whether its absolute or not");
// document.write("<h2>The absolute value of " + absoluteNumber + " is " + Math.abs(absoluteNumber))

// ===================================  Chapter 26-30 Task_4 ===================================

// return random number between 0-1
// document.write("<h2>random dice value: " + Math.random());
// return random number between 0 to one number less than a given range i.e: 10
// document.write("<h2>random dice value: " + Math.floor(Math.random() * 10));
// document.write("<h2>random dice value: " + Math.floor(Math.random() * 10));

// ===================================  Chapter 26-30 Task_5 ===================================

// var random = Math.floor(Math.random() * 3);
// if (random == 2) {
//     document.write("<h2>" + random + "<br>random coin value: Heads")
// }
// if (random == 1) {
//     document.write("<h2>" + random + "<br>random coin value: Tails")
// }

// ===================================  Chapter 26-30 Task_6 ===================================
// document.write("<h2>random number between 1 and 100: " + Math.floor(Math.random() * 100));

// ===================================  Chapter 26-30 Task_7 ===================================

// var weight = prompt('Enter you weight in kilogram to convert in pound');
// var pound = weight * 2.20462;
// alert('The ' + weight + ' kilogram weight is equal to ' + pound + ' pound');

// ===================================  Chapter 26-30 Task_8 ===================================

// var secret = Math.floor(Math.random() * 11);
// document.write(secret);
// var guessNumber = prompt("Enter a number between 1 and 10 to guess a secret random number");
// if (guessNumber == secret) {
//     alert("Congratulations you guess the right number")
// } else {
//     alert("Oops! Try Again your guess is wrong")
// }






// ===================================  Chapter 31-34  ===================================

// ===================================  Chapter 31-34 Task_1  ===================================

// for knowing current date and time
// document.write(Date());

// ===================================  Chapter 31-34 Task_2  ===================================

// getMonth(); its indexing start from 0
// var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var date = new Date();
// var month = date.getMonth() + 1;
// for (let i = 0; i < mlist.length; i++) {
//     if (month == mlist[i].length) {
//         alert("Current month: " + mlist[i - 2]);
//     }
// }

// ===================================  Chapter 31-34 Task_3  ===================================

// var weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sun"];
// var date = new Date();
// var day = date.getDay();
// for (let i = 0; i < weekDays.length; i++) {
//     if (day == weekDays[i].length) {
//         alert("<h2>Today is " + weekDays[i]);
//     }
// }

// ===================================  Chapter 31-34 Task_4  ===================================

// var date = new Date();
// var day = date.getDay();
// if (day == 5 || day == 6) {
//     document.write("<h2>It’s Fun day");
// }
// else {
//     document.write("<h2>It’s Work day");
// }

// ===================================  Chapter 31-34 Task_5  ===================================

// var d = new Date();
// var date = d.getDate();
// if (date < 16) {
//     document.write("<h2>First fifteen days of the month");
// } else {
//     document.write("<h2>Last days of the month");
// }

// ===================================  Chapter 31-34 Task_6  ===================================

// ===================================  Chapter 31-34 Task_7  ===================================

// var time = new Date();
// console.log(time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
// );
// if (time < 12) {
//     alert("It's AM")
// }
// else if (time > 12) {
//     alert("It's PM")
// }

// ===================================  Chapter 31-34 Task_8  ===================================

// alert('Letter date: ' + new Date(2020, 12, 0));

// ===================================  Chapter 31-34 Task_9  ===================================

// var date0 = new Date(2015, 0, 0);
// var date1 = new Date(2015, 5, 18);
// var numberOfDays = Math.ceil((date1 - date0) / 8.64e7);
// alert(numberOfDays + " days have passed since 1st Ramadan, 2015 ");

// ===================================  Chapter 31-34 Task_10  ===================================

// ===================================  Chapter 31-34 Task_11  ===================================

// ===================================  Chapter 31-34 Task_12  ===================================

// ===================================  Chapter 31-34 Task_13  ===================================

// var age = prompt('Enter your age');
// var today = new Date();
// var date = today.getFullYear();
// var birthYear = date - age;
// alert("Your age is " + age + "\n" + "Your birth year is " + birthYear);

// ===================================  Chapter 31-34 Task_14  ===================================

// var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var date = new Date();
// var month = date.getMonth() + 1;
// for (let i = 0; i < mlist.length; i++) {
//     if (month == mlist[i].length) {
//         var monthName = mlist[i - 2];
//     }
// }
// var customerName = prompt('Enter customer name').toUpperCase();
// var numberOfUnits = prompt('Enter number of units');
// var chargesPerUnit = prompt('Enter charges per unit');
// var netAmountPayable = numberOfUnits * chargesPerUnit;
// var netAmount = parseInt(netAmountPayable);
// var latePaymentCharges = prompt('Enter late payment surcharge');
// var latePayment = parseInt(latePaymentCharges);
// var grossAmountPayable = netAmount + latePayment;

// document.write("<h1>K-Electric Bill</h1><br>");
// document.write('Customer Name: ' + customerName + '<br>Month: ' + monthName + '<br>Number of units: ' + numberOfUnits + '<br>Charges per unit: ' + chargesPerUnit + '<br><br>Net Amount Payable (within Due Date): ' + netAmountPayable + '<br>Late payment subcharges: ' + latePaymentCharges + '<br>Gross Amount Payable (after Due Date): ' + grossAmountPayable);





// ===================================  Chapter 35-38   ===================================

// ===================================  Chapter 35-38  Task_1 ===================================

// function currentDateTime() {
//     document.write(new Date());
// }
// document.write(currentDateTime());

// ===================================  Chapter 35-38  Task_2 ===================================

// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// function fullName(firstName, lastName) {
//     return firstName + ' ' + lastName;
// }
// alert("Good Morning " + fullName(firstName, lastName));

// ===================================  Chapter 35-38  Task_3 ===================================

// var firstNumber = prompt("Enter Your First Number");
// firstNumber = parseInt(firstNumber);
// var secondNumber = prompt("Enter Your Second Number");
// secondNumber = parseInt(secondNumber);
// function addNumbers(firstNumber, secondNumber) {
//     return (firstNumber + secondNumber);
// }
// alert('Addition of ' + firstNumber + ' and ' + secondNumber + ' is ' + addNumbers(firstNumber, secondNumber));

// ===================================  Chapter 35-38  Task_4 ===================================

// function add(num1, num2) {
//     return num1 + num2;
// }
// function min(num1, num2) {
//     return num1 - num2;
// }
// function mul(num1, num2) {
//     return num1 * num2;
// }
// function div(num1, num2) {
//     return num1 / num2;
// }
// function mod(num1, num2) {
//     return num1 % num2;
// }
// var firstNumber = prompt("Enter Your First Number");
// firstNumber = parseInt(firstNumber);
// var secondNumber = prompt("Enter Your Second Number");
// secondNumber = parseInt(secondNumber);
// var operator = prompt("Enter Operator\n1-Addition\n2-Subtraction\n3-Multiplication\n4-Division\n5-Modulus");
// if (operator == 1) {
//     alert('Addition of ' + firstNumber + ' and ' + secondNumber + ' : ' + add(firstNumber, secondNumber));
// }
// else if (operator == 2) {
//     alert('Subtraction of ' + firstNumber + ' and ' + secondNumber + ' : ' + min(firstNumber, secondNumber));
// }
// else if (operator == 3) {
//     alert('Multiplication of ' + firstNumber + ' and ' + secondNumber + ' : ' + mul(firstNumber, secondNumber));
// }
// else if (operator == 4) {
//     alert('Division of ' + firstNumber + ' and ' + secondNumber + ' : ' + div(firstNumber, secondNumber));
// }
// else if (operator == 5) {
//     alert('Modulus of ' + firstNumber + ' and ' + secondNumber + ' : ' + mod(firstNumber, secondNumber));
// }
// else {
//     alert('Wrong Operator!')
// }

// ===================================  Chapter 35-38  Task_5 ===================================

// var number = prompt("Enter a number to make its square");
// number = parseInt(number);
// function square(number) {
//     return number * number;
// }
// alert('Square of ' + number + ' is ' + square(number));

// ===================================  Chapter 35-38  Task_6 ===================================

// var number = prompt("Enter a number to make its factorial");
// number = parseInt(number);
// function factorial(number) {
//     var fact = 1;
//     for (var i = 1; i <= number; i++)
//         fact = fact * i;
//     return fact;
// }
// alert('Factorial of ' + number + ' is ' + factorial(number));

// ===================================  Chapter 35-38  Task_7 ===================================

// var startNumber = prompt('Enter starting range for counting');
// var endNumber = prompt('Enter ending range for counting');
// function Counting(startNumber, endNumber) {
//     for (let i = startNumber; i <= endNumber; i++) {
//         document.write(i + '<br>');
//     }
// }
// console.log(Counting(startNumber, endNumber));

// ===================================  Chapter 35-38  Task_8 ===================================

// var base = prompt('Enter base for calculating hypotenuse of triangle');
// var perpendicular = prompt('Enter perpendicular for calculating hypotenuse of triangle');
// var number = prompt('Enter a number for making its square');

// // Outer function for calculating hypotenuse of triangle
// function Hypotenuse(base, perpendicular) {
//     // Inner function for calculating sqaure of a number
//     function Square(number) {
//         return number * number;
//     }
//     alert('Square of ' + number + ' : ' + Square(number));

//     var hypotenuse = (base * base) + (perpendicular * perpendicular);
//     return Math.sqrt(hypotenuse);
// }
// alert('Hypotenuse of triangle: ' + Hypotenuse(base, perpendicular));

// ===================================  Chapter 35-38  Task_9 ===================================

// var width = 40;
// var height = 40;
// function areaRectangle(width, height) {
//     return width * height;
// }
// // i. Arguments as value
// alert('Area of Rectangle by using arguments as value : ' + areaRectangle(30, 30));
// // ii. Arguments as variables
// alert('Area of Rectangle by using arguments as variable : ' + areaRectangle(width, height));

// ===================================  Chapter 35-38  Task_10 ===================================

// var string = prompt('Enter a string to check whether its palidrome or not');
// function Palindrome(string) {
//     var splitString = string.split("");
//     var reverseArray = splitString.reverse();
//     var joinArray = reverseArray.join("");
//     return joinArray;
// }
// var reverseString = Palindrome(string);
// if (reverseString == string) {
//     alert('The given string : (' + string + ') is palindrome');
// } else {
//     alert('The given string : (' + string + ') is not palindrome');
// }

// ===================================  Chapter 35-38  Task_11 ===================================

// var str = prompt('Enter a string to convert into title case');
// function titleCase(str) {
//     var wordsArray = str.toLowerCase().split(/\s+/);
//     var upperCased = wordsArray.map(function (word) {
//         return word.charAt(0).toUpperCase() + word.substr(1);
//     });
//     return upperCased.join(" ");
// }
// alert('Your string after converted in title case: ' + titleCase(str))

// ===================================  Chapter 35-38  Task_12 ===================================

// const str = prompt('Enter a string to to check which word is the longest');
// const strArray = str.split(" ");
// const sortedStrArray = strArray.sort(
//     (strA, strB) => {
//         return strB.length - strA.length;
//     });
// document.write('Original string: ' + str);
// document.write('<br>Largest word in a string: ' + sortedStrArray[0])

// ===================================  Chapter 35-38  Task_13 ===================================

// var str = prompt('Enter a string');
// var letter = prompt('Enter a letter to count the number of occurrence within the string');
// function char_count(str, letter) {
//     var letter_Count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str.charAt(i) == letter) {
//             letter_Count += 1;
//         }
//     }
//     return letter_Count;
// }
// document.write('Sample arguments: ' + "'" + str + "'" + ',' + "'" + letter + "'")
// document.write('<br>Occurrence of ' + letter + ' : ' + char_count(str, letter));

// ===================================  Chapter 35-38  Task_14 ===================================

// var radius = prompt('Enter radius for calculating circumference and area of circle');
// function calcCircumference(radius) {
//     return 2 * 3.142 * radius;
// }
// alert('The circumference of circle at ' + radius + ' is ' + calcCircumference(radius))
// function calcArea(radius) {
//     return 3.142 * (radius * radius);
// }
// alert('The area of circle at ' + radius + ' is ' + calcArea(radius))
