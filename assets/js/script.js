'use strict'
//#region ClassTask

//#region Task1

// let day = Number(prompt("Gun daxil edin")) 

// switch (day) {
//     case 1:
//         alert("Bazarertesi")
//         break;
//     case 2:
//         alert("Cersenbe axsami")
//         break;
//     case 3:
//         alert("cersenbe")
//         break;
//     case 4:
//         alert("Cume axsami")
//         break;
//     case 5:
//         alert("Cume")
//         break;
//     case 6:
//         alert("Senbe")
//         break;
//     case 7:
//         alert("Bazar")
//         break;

//     default:
//         alert("Gun movcud deyil")
//         break;
// }

//#endregion


// #region Task2
// let isMarried;

// let married = confirm("are you married?")

// if (married) {
//     alert("Diger melumatlari daxil edin")
//     let fullName = prompt("Ad Soyad");
//     let address = prompt("address");
//     let password = prompt("password");
//     let email = prompt("email");
//     if(email.trim() != "" && address.trim() != "" && password.trim() != "" && fullName.trim() != ""){
//         for (let i = 0; i < email.length; i++) {
//             if (email[i] == "@") {
//                 alert("ugurlu")
//                 break;
//             } else{
//                 alert("email yanlisdir")
//                 break;
//             }
//         }
//     } else{
//         alert("Bos melumat daxil etmek olmaz")
//     }



// }
// else {
//     alert("Sehv")
// }

//#endregion

//#endregion




//HomeTask

//#region Task1 Bolunme


// divideByThreeAndSeven(21)

// function divideByThreeAndSeven(n) {



//     if (n % 3 == 0 && n % 7 == 0) {
//         console.log("Verilmis eded 3-e ve 7-e tam bolunur ✔");        
//     } else{
//         console.log("3-e ve 7-e tam bolmek olmur ❌");        
//     }
// }


//#endregion

//#region Task2 Factorial


// factorial(4);

// function factorial(num) {
//     if (num == 0) {
//         console.log(1);
//     } else{
//         let result = 1;
//         for(let i = num; i > 0; i--){
//             result *= i;

//         }
//         console.log(result)
//     }


// }


//#endregion

//#region Task3 EvenSquareSum

// evenSquareSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "CODE", "122", "DEMO", "8"])

// function evenSquareSum(number) {
//     let sum = 0;
//     let cnt = 0;
//     for (let i = 0; i < number.length; i++) {
//         if (number[i] % 2 == 0 && typeof number[i] === "number") {
//             cnt = Math.pow(number[i], 2)
//             sum += cnt;
//         }
//     }
//     console.log(sum);
// }



//#endregion

//#region Task4 Login


// login("cavid@code.edu.az", "12345")

// function login(email, password) {

//     if (email == "cavid@code.edu.az" && password == "12345") {
//         alert("Girish olundu")
//     } else{
//         alert("Mail ve yaxud password sehvdir")
//     }
// }


//#endregion

//#region Task5 Tek Eded Array


// returnSumOfOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 10])

// function returnSumOfOddNumbers(arr) {
//     let sum = 0

//     for (let i  = 0; i  < arr.length; i++) {
//         if (arr[i] % 2 == 1) {
//             sum += arr[i];
//         }
//     }
//     console.log(sum);
// }


//#endregion

//#region Task6 Cut Eded Array


// returnCountOfEven([1, 2, 3, 4, 5, 6, 7, 8, 10])

// function returnCountOfEven(arr) {
//     let cnt = 0;

//     for (let i  = 0; i  < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             cnt++
//         }
//     }
//     console.log(cnt);
// }


//#endregion



//#region Practice

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "20", 10]

// for (let i = 0; i < numbers.length; i++) {

//     if (!isNaN(numbers[i]) && typeof(numbers[i]) == "number") {
//         if (numbers[i] % 2 == 0) {
//             console.log(numbers[i])
//         }
//     }


// }


// try {

// let isMarried = true;

//     if (isMarried) {
//         var result = "Married" 

//     }

//     document.querySelector("h1").innerText = result
//     document.querySelector("h1").style.color = "green"


// } catch (error) {

//     console.log("Error var");
//     document.querySelector("h1").innerHTML = error.message
//     document.querySelector("h1").style.color = "red"


// }   finally{
//     document.querySelector("h1").style.border = "1px solid black"
// }


// let isMarried = false

// if (!isMarried) {
//     let text = "Not Married"
// }

// console.log(text);


// let fullName = prompt("Please add your full name");

// while (fullName.trim() == "") {
//     fullName = prompt("Please add your full name again");
// }

// let email = prompt("Please add your email");

// while (email.trim() == "") {

//     email = prompt("Please add your email again");

//     let isExist = false;

//     for (let i = 0; i < email.length; i++) {

//         while(!isExist){
//             if (!email[i] == "@") {
//                 email = prompt("Please add your email again");

//             } else{
//                 isExist = true;
//                 alert("ugurlu")
//                 break;
//             }
//         }
//     }
// }


// let isMarried = confirm("Are you married?");

// if (!isMarried) {
//     alert("Evli oladiginiza gore qeydiyyat ola bilmediniz")
// } else{
//     let res =  `${fullName} ${email} ${isMarried}`
//     alert(res)
// }



// document.querySelector("input").addEventListener("keyup", function(){
//     if (document.querySelector("input").value.trim() == "") {
//         document.querySelector("span").style.display = "inline-block"
//     } else{
//         document.querySelector("span").style.display = "none"
//     }
// })

// let name = "Murad";
// let surname = "Jafarov"

// function showText(name) {

//     let isMarried = false;

//     if (isMarried) {
//         return (name + " " + surname + " " + isMarried + " Qeydiyatdan kece bilersiz");
//     } else{
//         return (name + " " + surname + " " + isMarried + " Qeydiyatdan kece bilmezsiniz");
//     }

// }

// showText(name, surname);
// console.log(showText(name, surname));


// function sumOfNumbers() {
//     console.log(arguments);
// }

//sumOfNumbers(1, 2, 3, 4, 5, 6, 7, "Salam");

// let showEmail = ()=>{
//     console.log(this);
// }

// function showFullData() {
//     console.log("DASDSAD");
// }

// let obj = {
//     name: "Murad",
//     surname: "Jafarov",
//     getData: showEmail()
// }

// obj.getData;

// console.log(obj);


// let arr = [1,2,3,4,5,6,7,8,9]

// function showNumber(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == 8) {
//             break;
//         }else{
//             console.log(arr[i]);
//         }
//     }

//     console.log("Hello World!");
// }

// console.log('showNumber(arr): ', showNumber(arr));





// showEmail()


// function test() {
//     console.log(arguments);
// }

// test(1,2,3,4,5,6)



// document.querySelector("button").addEventListener("click",function () {
//     this.style.color = "white"
//     this.style.backgroundColor = "magenta"

// })


//#endregion

















































