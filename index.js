// -------chapter 1 ---------
// chapter 1 Q:1----------
// alert("hello")
// chpter 1 Q2 =============
// alert("Enter?please enter a valid password ")
// chapter 1 Q3===========
// alert("Welcome to js Land \n Happy Coding?")
// chapter 1 Q4 ==========
// alert("Welcome to js Land")
// alert("Happy Coding \n prevent this page from creating addional dialogs")
// chapter 1 Q5 ======
// alert("Hello.i can run js for my browser's consol")
// console.log(alert);
// chapter 1 Q7=====
// c. Body (inside your page’s HTML)

// chapter 2 Q1======
// var userName = "hammad"
// chapter 2 Q2=====
// var myName = "hammad"
// var fullNmane = "muhammad hammad"
// chapter 2 Q4=====
// var name  = "hammad"
// alert(name)
// var age = "15 years old" 
// alert(age) 
// var qualification = "critifild web and app development"
// alert(qualification)
// chapter 2 Q5
// var  massge = "";
// alert(massge);
// chapter 2 Q6 =====
// var email = "hammad123@gmai.com"
// alert(email)
// chapter 2 Q7===
// var book = "i am tring to leran from tha book a smater \n way to leran javascript"
// alert(book)
// chapter 3 Q1========
// var age = "1 am 15 years old"
// alert(age)
// chapter 4 Q1====
// var x = 1, y = 2 , b = 3;
// chapter 4 Q2======
// Legal Variable Names:
// age
// _name
// totalAmount
// first_name
// $price
// Illegal Variable Names:
// 1stName 
// var
// function 
// @user 
// new 
// chapter 4 Q3=====
// a) "Rules for naming JS variables" is displayed as a heading.
// b) "Variable names can only contain letters, numbers, underscores, and dollar signs."
// c) "Variables must begin with a letter, underscore, or dollar sign."
// d) "Variable names are case sensitive."
// e) "Variable names should not be JS reserved keywords."
// chapter 5 Q1=======
// var city = prompt("enter your city")
// if (city == "karachi") {
//     alert("Welcome to the city of karachi")
// } else {
//     alert("Welcome to city ")
// }
// chpter 9 to 11  
//practice class code ;

// document.write("<h1> Class Code Practicing </h1>")

// let ticketPriceForKids = 50;

// document.write("<h1> Ticket Price For Kid Is " , ticketPriceForKids ," </h1> ")

// let ticketPriceForAdults = 70;

// document.write("<h1> Ticket Price For Adult Is " , ticketPriceForAdults ," </h1> ")

// let ticketPriceForAged = "entry free";

// document.write("<h1> For Olders " , ticketPriceForAged , "</h1>")

// let age = +prompt("please enter your age "); // + sign convert string to a number

// console.log(age);

// if (age <= 3) {
//     console.log("your entry is free");
// }
// else if (age > 3 && age <= 12) {
//     console.log("<h2> your ticket price is ", ticketPriceForKids ," </h2> ");

//     document.write("<h2> your ticket price is ", ticketPriceForKids, "</h2>");
// }
// else if (age >= 13 && age <= 50) {
//     console.log("your ticket price is ", ticketPriceForAdults);
//     document.write("<h2>your ticket price is ", ticketPriceForAdults, "</h2>");
// }
// else if (age > 50) {
//     console.log("your entry is free");
//     document.write("<h2> your entry is free </h2>");
// }
// else {
//     console.log("you entered an invalid number");
//     document.write("<h2> you entered an invalid number </h2>");
// }

// // assignment chap 9 to 11 ;

// //   Question 1
// document.write("<h1> Assignment Chap 9 To 11 </h1>")

// document.write("<h1> Question 1 </h1>")

// let cityName = prompt("enter a city name");

// if (cityName === "karachi"){

//     document.write("<h1> City Name " , cityName , "</h1>");

//     console.log("welcome to the city of light");
//     document.write( "<h2> welcome to the city of light  </h2>");

// } else {
//     document.write("<h1> City Name" ,);

//     console.log(" welcome to " , cityName );

//     document.write("<h2> welcome to " , cityName ,  " </h2> ");
// }

// //   Question 2

// document.write("<h1> Question 2 </h1>")

// let gender = prompt(" enter your gender ");

// if ( gender === "male"){

//     document.write("<h1> Gender " , gender ,"</h1>")

//     console.log("Good Morning sir");

//    document.write (" <h2>  Good Morning Sir </h2>");

// }
// else if ( gender === "female"){

//     document.write("<h1> Gender " , gender , "</h1>")

//     console.log("Good Morning maa'm");

//    document.write (" <h2> Good Morning maa'm </h2>");

// } else {
//     console.log("you re entered wrong gender");

//     document.write (" <h2> you re entered wrong gender </h2>");
// }

// //   Question 3
// document.write("<h1> Question 3 </h1>")

// document.write("<h1> Traffic Signal Rules.")

// let redColor = "Must stop.";

// let yellowColor = "Ready To Move."

// let greenColor = "Move Now.";

// let signalColors = prompt("Enter Only A Traffic Signal Color");

// document.write("<h2> Signal Is " , signalColors , ". </h2>" );

// if (signalColors === "red"){

//     document.write ("<h2>" , redColor , "</h2>" )
// }
// else if (signalColors === "yellow"){

//     document.write ("<h2>" , yellowColor , "</h2>" )
// }
// else if (signalColors === "green"){

//     document.write ("<h2>" , greenColor , "</h2>" )
// }else {

//     document.write("<h2> Color Must Be Red Yellow Or Green. </h2>" )

// }

// //   Question 4
// document.write("<h1> Question 4 </h1>")
// let carFuel = prompt("Enter Your Remaining Car Fuel");

// if (carFuel < 0.25) {

//     document.write(" <h2>  Please Refill The Fuel In Your Car.  </h2> ");

// }else if (carFuel > 0.25 ) {

//     document.write(" <h2> Your Fuel Is " , carFuel , " litres. Please Refill Your Car Fuel before 0.25 litres.  </h2> ");

// }

// //   Question 5
// document.write("<h1> Question 5 </h1>")

// let a = 82;

// document.write("<h2>  a = " , a , "</h2>"  );

// if ( ++a === 83 ){

//     document.write( "<h2>  ++a === 83 " , "Given Condition Of Variable Is true  </h2> ");

// }else {

//     document.write( "<h2>  ++a === 83 " , "Given Condition Of Variable Is false  </h2> ");
// }

// let b = 72;

// document.write("<h2>  b = " , b , " </h2> " );

// if ( b++ === 73 ){

//     document.write( "<h2>  b++ === 73 " , "Given Condition Of Variable Is true  </h2> ");

// }else {

//     document.write( "<h2>  b++ === 73 " , "Given Condition Of Variable Is false  </h2> ");
// }

// let c = 60;

// document.write(" <h2> c = " , c , " </h2> " );

// if (c++ === 61){

//     document.write( "<h2>  c++ === 61 " , "Given Condition Of Variable Is true  </h2> ");

// }else {

//     document.write( "<h2>  c++ === 61 " , "Given Condition Of Variable Is false  </h2> ");
// }

// if (++c === 62){

//     document.write( "<h2>  ++c === 62 " , "Given Condition Of Variable Is true  </h2> ");

// }else {

//     document.write( "<h2>  ++c === 62 " , "Given Condition Of Variable Is false  </h2> ");
// }
// if (c === 62) {

//     document.write( "<h2>  c === 62 " , "Given Condition Of Variable Is true  </h2> ");

// }else {

//     document.write( "<h2>  c === 62 " , "Given Condition Of Variable Is false  </h2> ");
// }
// if (c <= 63) {

//     document.write( "<h2>  c <= 63 " , "Given Condition Of Variable Is true  </h2> ");

// }else {

//     document.write( "<h2>  c <= 63 " , "Given Condition Of Variable Is false  </h2> ");
// }

// if (++c <= 63) {

//     document.write( "<h2>  ++c === 63 " , "Given Condition Of Variable Is true  </h2> ");

// }else {

//     document.write( "<h2>  ++c === 63 " , "Given Condition Of Variable Is false  </h2> ");
// }


// var materialCost = 18500;

// var laborCost = 1000;

// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost){

// alert("The cost equals");

// }
// if (true){

// alert("True");

// }
// if (false){

// alert("False");

// }

// if ("car" < "cat"){

//     alert("car is smaller then cat");

// }

// // //   Question 6

// document.write("<h1> Question 6 </h1>")

// document.write("<h1> MarkSheet </h3>");

// let totalMarks = 300;

// document.write(" <h2> Total Marks : " , totalMarks , " </h2> " );

// let subject_1 = +prompt("Enter Obtained Marks Of Subject 1");

// let subject_2 = +prompt("Enter Obtained Marks Of Subject 2");

// let subject_3 = +prompt("Enter Obtained Marks Of Subject 3");

// obtainedMark = subject_1 + subject_2 + subject_3 ;

// document.write(" <h2> Obtained Marks : " , obtainedMark , " </h2> " );

// let percentage = (obtainedMark / totalMarks) * 100 ;

// document.write("<h2> Percentage : " , percentage , " % </h2>");

// if ( percentage >= 80 ){

//     document.write(" <h2> Your Grade Is : A-One </h2>");

//     document.write(" <h2> Remark : Exellent </h2>");

// } else if ( percentage >= 70){

//     document.write(" <h2> Your Grade Was : A </h2>");

//     document.write(" <h2> Remark : Good </h2>");
// }
// else if (percentage >= 60){

//     document.write(" <h2> Your Grade Was : B </h2>");

//     document.write(" <h2> Remark : You Need To Improve </h2>")
// }
// else if (percentage <= 60){

//     document.write(" <h2> You're : Fail </h2>");

//     document.write(" <h2> Remark : Sorry </h2>");
// }else{
//     document.write("  <h2> You Entered An Invalid Number </h2>");
// }

// //   Question 7
// document.write("<h1> Question 7 </h1>")

// let number = 7 ;

// let guessNumber = +prompt ("Enter A Number From 1 to 10");

// if (guessNumber === 7 ){

//     document.write ("<h2> BINGO! Correct Answer </h2>");
// } if (guessNumber === 6){
//     document.write("<h2> Close enough to the correct answer </h2>");
// }else{
//     document.write("<h2> You Not Entered Any Number </h2>");
// }

// //   Question 8
// document.write("<h1> Question 8 </h1>")

// let num = +prompt(
//   "enter any number i will tell you the number is completly divided by 3"
// )

// if (num % 3 ===  0 ) {

//   console.log( num ,  " is divisible by 3");

//   document.write("<h2>" ,  num , " is divisible by 3 </h2>")
  
// }else{

//     console.log( num , " is not divisible of 3");

//     document.write("<h2>" ,  num , " is not divisible by 3 </h2>")

// }

// //   Question 9

// document.write("<h1> Question 9 </h1>")

// let Num = +prompt("Enter A Number I Will Tell You The Number Is Odd Or Even");

// if (Num % 2 === 0){

//     console.log(Num, " is even ");

//     document.write("<h2>" , Num, " is even </h2> ");

// }else if (Num % 2 !== 0){

//     console.log( Num, " is odd ");
//     document.write("<h2>" , Num, " is odd </h2>");
// }

// //   Question 10
// document.write("<h1> Question 10 </h1>")

// let T = prompt("Enter Your City Temperature");

// if (T >= 40){

//     console.log(  T,"\xB0C","It is too hot outside.");

//     document.write("<h2>" , T,"\xB0C" , " It is too hot outside. </h2>");
// }
// else if (T >= 30){

//     console.log( T,"\xB0C "," Today's Weather is Normal.");

//     document.write("<h2>" ,  T,"\xB0C" , " The Weather today is Normal. </h2>");
// }

// else if (T >= 20){

//     console.log(T,"\xB0C "," Today’s Weather is cool.");

//     document.write("<h2>" , T,"\xB0C" , " Today’s Weather is cool. </h2>");
// }

// else if (T >= 10){

//     console.log( T,"\xB0C"," OMG! Today’s weather is so Cool.");

//     document.write("<h2>" , T,"\xB0C" , " OMG! Today’s weather is so Cool. </h2>");
// }
// else if ( T <= 10 ){
//     console.log( T,"\xB0C","OMG! Today’s weather is so so so Cool. ")
// }

// else{
//     console.log("You Not Entered Any Number OR Invalid Number");

//     document.write("<h2> You Not Entered Any Number OR Invalid Number. </h2>")
// }

// //   Question 11
// document.write("<h1> Question 11 </h1>")

// let num1 =  parseInt(prompt(" enter number one ")); //parseint also convert string to a number;

// let num2 =  parseInt(prompt(" enter number two "));

// let myCalcu = prompt("please enter a arithmetic operator");

// if ( myCalcu === "+" ){

//     console.log( num1 , "+" , num2 , "=" , num1 + num2 );

//     document.write ( "<h2>" , num1 , " + " , num2 , " = " , num1 + num2 , "</h2>" );
// }
// else if ( myCalcu === "-" ){

//     console.log( num1 , " - " , num2 , " = " , num1 - num2 );

//     document.write ("<h2>" ,  num1 , " - " , num2 , " = " , num1 - num2 , "</h2>");
// }
// else if ( myCalcu ===  "*" ){

//     console.log( num1 , " * " , num2 , " = " , num1 * num2 );

//     document.write ( "<h2>" , num1 , " * " , num2 , " = " , num1 * num2 , "</h2>" );
// }
// else if ( myCalcu === "/" ){

//     console.log( num1 , " / " , num2 , " = " , num1 / num2 );

//     document.write ( "<h2>" , num1 , " / " , num2 , " = " , num1 / num2 , "</h2>" );

// } else if (myCalcu === "%") {

//     console.log(num1 , " % " , num2 , " = " , num1 % num2);

//    document.write ("<h2>" , num1 , " % " , num2 , " = " , num1 % num2 , "</h2>")
// }
// else{
//     console.log("you entered an invalid number");

//     document.write("<h2> you entered an invalid number </h2>");

// }
// chapter 12 to 13 ====
//  assignment chap 12 to 13.

// Question no 1.

// let Capital = prompt("Enter a character:");

// let charCode = Capital.charCodeAt(0);

// if (charCode >= 65 && charCode <= 90 ){
//     console.log("It is capital alphabet." , Capital);

// } else if (charCode >= 97 && charCode <= 122) {
//  console.log("it is small alphabet" , Capital)
// }
//  else {
//     console.log("It is number or something." , Capital );
// }



// // Question no 2

// let number_1 = +prompt("enter a number");

// let number_2 = +prompt("enter a number");

// if (number_1 > number_2){

//     console.log(number_1 , "is Larger then" , number_2);

// }

// else if (number_1 === number_2){

//     console.log(number_1 , " is Equal to " , number_2);

// }
//  else if (number_2 > number_1){

//     console.log(number_2 , "is Larger then" , number_1);
    
// }

// else if (number_2 === number_1){

//     console.log(number_2 , " is Equal to " , number_1);
// }

// // Question 3

// let compareNum = +prompt ("Enter A Number I Will Check Number Is Positive Negative Or Zero");

// if (compareNum === 0 ){
//     console.log("Number is Zero");
// }
// else if (compareNum > 0 ){
//     console.log("Number is Positive");
// }
// else if (compareNum < 0 ){
//     console.log("Number is Negative ");
// }


// // Question 4 

// let checkVovel = prompt ("enter any one aplabet");

// if (checkVovel === "a"){

//     console.log("Alphabet is Vovel");
// }
// else if (checkVovel === "e"){

//     console.log("Alphabet is Vovel");
// }
// else if (checkVovel === "i"){

//     console.log("Alphabet is Vovel");
// }
// else if (checkVovel === "o"){

//     console.log("Alphabet is Vovel");
// }
// else if (checkVovel === "u"){

//     console.log("Alphabet is Vovel");

// }else {
//     console.log("Alphabet is Not Vovel");
// }

// // Queation 5.

// let Password = prompt("Enter Your Password");

// userPassword = Password

// let confirmPassword = prompt("Confirm Your PassWord");

// if ( userPassword === confirmPassword ) {
//     console.log("Correct The Password You Entered Does Match The Orignal Password");
// }
// else if ( userPassword !== confirmPassword ) {
//     console.log("Incorrect Password");
// }


// // Question 6 .



// let hour = 13;

// if (hour <= 18) {

//  console.log(  "greeting = Good day");

// }

// else {

// console.log(  "greeting = Good evening");

// }




// //Question 7 .

// let Time = +prompt ("Enter Time value in 24hour Format");


// if (Time >= 0000 && Time < 1200 ){

//     console.log( " Good Morning " )

// }
// else if (Time >= 1200 && Time < 1700 ){

//     console.log( " Good Afternone " )

// }
// else if (Time >= 1700 && Time < 2100 ){

//     console.log( " Good Evening " )

// }
// else if (Time >= 2100 && Time <= 2359 ){

//     console.log( " Good Night " )

// }