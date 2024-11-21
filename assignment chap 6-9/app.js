// QUESTION  NO 1

// let a=10;
// document.write("  RESULTS:")
// document.write(" <br> <br> The value of a is: ",a)
// document.write(" <br>  -------------------------")
// ++a;
// document.write(" <br>  <br> The value of ++a is : ",a);
// document.write(" <br>Now the value of a is: ",a)


// document.write(" <br> <br>The value of a++ is: ",a)
// a++;
// document.write(" <br> Now the value of a is: ",a)
// --a;
// document.write(" <br> <br>The value of --a is: ",a)
// document.write("<br> Now the value of a is: ",a)


// document.write(" <br> <br>The value of a-- is: ",a);
// a--;
// document.write(" <br> Now the value of a-- is: ",a);

// QUESTION NO 2

// let a= 2;
// let b= 1;
// let result= --a - --b+ ++b +b--;
// --a;
// --b;
// ++b;
// b--;
// document.write(a)
// document.write(b)
// document.write(result)


// QUESTION NO 3

// let user=prompt("Enter Your Name!!");
// alert("Welcome to our page!!:)")

// QUESTION NO 4

// let user=prompt("Enter your number");
// for (let i=1 ; i<115 ; i++){
//     console.log(user,"x",i,"=",user*i)
// }


// QUESTION NO 5

let sub1=prompt("enter first subject");
let sub2=prompt("enter second subject");
let sub3=prompt("enter third subject");
let totalmarks=prompt("\t\t\t\t\t enter total marks");
console.log("SUBJECTS TOTALMARKS MarkOBT PERCENTAGE")
let obtainedMarks1=parseInt(prompt("enter your marks obtained"));
let obtainedMarks2=parseInt(prompt("enter your marks obtained"));
let obtainedMarks3=parseInt(prompt("enter your marks obtained"));


console.log(sub1 , "         " +totalmarks , "     "     , "      ",obtainedMarks1    ,"      "      + obtainedMarks1/totalmarks*100 + "%");

console.log(sub2 , "         " +totalmarks , "     "     , "      ",obtainedMarks2    ,"      "      , obtainedMarks2/totalmarks*100 + "%");


console.log(sub3 , "         " ,totalmarks , "      "    , "      ",obtainedMarks3   ,"      "      , obtainedMarks3/totalmarks*100 + "%");
let sum= totalmarks*3;
let totalObtained= obtainedMarks1+obtainedMarks2+obtainedMarks3;
let totalperc = totalObtained/sum*100;
console.log("      "+sum + "   "+totalObtained+"    "+totalperc+"%");







