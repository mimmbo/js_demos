// task1
let first = [
    1, 2, 3, 4, 5, 6, true, false, 'afafaf', 'fdfewfw'
]
console.log(first[0])
console.log(first[1])
console.log(first[2])
console.log(first[3])
console.log(first[4])
console.log(first[5])
console.log(first[6])
console.log(first[7])
console.log(first[8])
console.log(first[9])

// task2
let book1 = {
    title: 'Long Walk To Freedom',
    pagecount: 250,
    genre: 'Nonfiction'
}
let book2 = {
    title: 'Born A Crime',
    pagecount: 160,
    genre: 'Nonfiction'
}
let book3 = {
    title: 'The Hiding Place',
    pagecount: 210,
    genre: 'Nonfiction'
}

// task3
let book10 = {
    title: 'Long Walk To Freedom',
    pagecount: 250,
    genre: 'Nonfiction',
    author: [
        {

            name: 'Nelson Mandela',
            age: 95,

        }
    ]
}
let book20 = {
    title: 'Born A Crime',
    pagecount: 160,
    genre: 'Nonfiction',
    author: [
        {

            name: 'Trevor Noah',
            age: 40,

        }
    ]
}
let book30 = {
    title: 'The Hiding Place',
    pagecount: 210,
    genre: 'Nonfiction',
    author: [
        {

            name: 'Corrie Ten Boom',
            age: 91,

        }
    ]
}
// task4

let users = [
    {name: 'user1', username: 'as', password: 1231414},
    {name: 'user2', username: 'asawd', password: 124844},
    {name: 'user3', username: 'asawdf', password: 12385874},
    {name: 'user4', username: 'asawffa', password: 45234534},
    {name: 'user5', username: 'asasfxzc', password: 78764},
    {name: 'user6', username: 'aszxc', password: 421354},
    {name: 'user7', username: 'asvb', password: 12574},
    {name: 'user8', username: 'asqw', password: 121354344},
    {name: 'user9', username: 'aszxcas', password: 4534321544},
    {name: 'user10', username: 'asvbt', password: 14454},
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)


// task5


let days = [
    {day: 'monday', temp_morn: 20, temp_middle: 30, temp_evening: 25},
    {day: 'tuesday', temp_morn: 18, temp_middle: 30, temp_evening: 23},
    {day: 'wednesday', temp_morn: 19, temp_middle: 25, temp_evening: 20},
    {day: 'thursday', temp_morn: 25, temp_middle: 25, temp_evening: 25},
    {day: 'friday', temp_morn: 19, temp_middle: 25, temp_evening: 20},
    {day: 'saturday', temp_morn: 17, temp_middle: 20, temp_evening: 17},
    {day: 'sunday', temp_morn: 19, temp_middle: 26, temp_evening: 24},
]
// logic
// task1


let right = 'right'
let wrong = 'wrong'
let x = 5
console.log(x)

if (x !== 0) {
    console.log(right);
} else {
    console.log(wrong)
}
// task2
let time= 42

if (time<15){
    console.log('first')
}
else if(time >= 15 && time < 30){
    console.log('second')
}
else if(time >=30 && time <45){
    console.log('third')
}
else if(time >=45 && time <60){
    console.log('fourth')
}
else{
    console.log('wrong')
}
// task3

let day=15

if (day>0 &&day<=10){
    console.log('first decada')
}
else if(day>10 && day<=20){
    console.log('second decada')
}
else if(day>20 && day<=31){
    console.log('third decada')
}
else{
    console.log('wrong')
}



// task4


let daynumber = 5
let make;

switch (daynumber){
    case 1:
        make='monday';
        break;
    case 2:
        make='tuesday'
        break;
    case 3:
        make='wednesday'
        break;
    case 4:
        make='thursday'
        break;
    case 5:
        make='friday'
        break;
    case 6:
        make='saturday'
        break;
    case 7:
        make='sunday'
        break;
    default:
        make='wrong'
}
console.log(make)

// task5



let num1=425
let num2=425


if (num1 > num2){
    console.log('макс.число:' + num1)
}
else if(num2 > num1){
    console.log('макс.число:' +num2)
}
else{
    console.log('числа рівні')
}


// task6



let value=0

let xx=value || 'default'

console.log(xx)


// task7


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration>5){
    console.log('great')
}
if (coursesAndDurationArray[1].monthDuration>5){
    console.log('great')
}
if (coursesAndDurationArray[2].monthDuration>5){
    console.log('great')
}
if (coursesAndDurationArray[3].monthDuration>5){
    console.log('great')
}
if (coursesAndDurationArray[4].monthDuration>5){
    console.log('great')
}
if (coursesAndDurationArray[5].monthDuration>5){
    console.log('great')
}

