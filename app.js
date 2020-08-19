// var holder = $('<div>').addClass('red')
// var inside = $('<div>').addClass('yellow')
// inside.text('Try this')
// holder.append(inside)
// $('.testing').append(holder)

// console.log(holder)

// console.log(holder[0].outerHTML)

// const save = () => {
//     localStorage.setItem('item', JSON.stringify(holder[0].outerHTML))
// }

// save()

// const get = () => {
//     const yep = JSON.parse(localStorage.getItem('item'))
//     console.log(yep)
//     $('.testing').append(yep)
//     save()
// }
 


// $('.bear').on('click', function () {
//     get()

// })

// function foo1 () {
//     return 1
// }

// var foo2 = function () {
//     return 2
// }

// console.log(window)

// const zipper = (first, second) => {
//     let loopLength
//     first.length > second.length ? loopLength = first.length : loopLength = second.length

//     for(var i = 0; i < loopLength; i++) {

//         if (array1[i] && array2[i]) {
//             array3.push(array1[i]);
//             array3.push(array2[i]);
//         } else if (array1[i]) {
//             array3.push(array1[i])
//         } else {
//             array3.push(array2[i])
//         }    
//     }
// }

// zipper(array2, array1)

// var array1 = ["a","b","c"];
// var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// array3 = new Array();

// const zipper2 = (first, second) => {
//     let loopLength
//     let subLength = 0
//     first.length > second.length ? loopLength = first.length : loopLength = second.length

//     for (var i = 0; i < loopLength; i++) {

//         if (first[i] && second[i]) {
//             array3.push(first[i]);
//             array3.push(second[i]);
//         } else if (second[i]) {
//             array3.push(first[subLength])
//             array3.push(second[i])
            
//             if (subLength < first.length - 1) {
//                 subLength++
//             } else {
//                 subLength = 0
//             }
//         } else if (first[i]) {
//             array3.push(first[i])
//             array3.push(second[subLength])
            
//             if (subLength < second.length - 1) {
//                 subLength++
//             } else {
//                 subLength = 0
//             }

//         }
//     }
// }


// zipper2(array2, array1)
// console.log(array3)

// const bear = 5 % 2
// console.log(bear)


// function towerBuilder(nFloors) {

//     var array = ['*']
    
//     for (var i = 1; i <= (nFloors - 1); i++) {
      
//       var number = i - 1
//       var deer = array[number] + '**'  
//       array.push(deer)
    
//     }
    
//     return array
    
//   }

//   console.log(towerBuilder(2))

// function isValidWalk(walk) {
  
//     if (walk.length != 10) {
//         return false
//     }

//     var long = 0
//     var lat = 0

//     for (var i = 0; i < walk.length; i++) {

//         if (walk[i] === 'n') {
//             long += 5
//         } else if (walk[i] === 's') {
//             long -= 5
//         } else if (walk[i] === 'w') {
//             lat += 5
//         } else {
//             lat -= 5
//         }
//     }

//     if (long === 0 && lat === 0) {
//         return true
//     } else {
//         return false
//     }
// }



// function rot13(message) {

//     var letters = message.split('')

//     for (var i = 0; i < letters.length; i++) {

//         var number = letters[i].charCodeAt()

//         if ((number >= 65 && number <= 77) || (number >= 97 && number <= 109)) {
//             number += 13
//             letters[i] = String.fromCharCode(number)
//         } else if ((number >= 78 && number <= 90) || (number >= 110 && number <= 122)) {
//             var tempNum = 90 - number
//             var remainder = 12 - tempNum
//             var newNum = 65 + remainder
//             var answer = String.fromCharCode(newNum)
//             letters[i] = answer
//         } 
//     }
//     letters = letters.join("")
//     return letters
// }

// console.log(rot13('test'))


// var a = 'A'
// console.log(a.charCodeAt() + 13)

// let findNum = 65
// let num = String.fromCharCode(findNum)
// console.log(num)


// function scramble(str1, str2)
// {
//    var str1Frequencies = [];
//    var str2Frequencies = [];
//    for(var i = 0, length = str1.length; i < length; ++i)
//    {
//        var letter = str1.charAt(i);
//        if((letter >= 'a') && (letter <= 'z'))
//        {
//            if(str1Frequencies[letter] === undefined)
//            {
//                str1Frequencies[letter] = 0;
//                console.log(str1Frequencies)
//            }

//            ++str1Frequencies[letter];
//        }
//    }

//    for(var i = 0, length = str2.length; i < length; ++i)
//    {
//        var letter = str2.charAt(i);
//        if((letter >= 'a') && (letter <= 'z'))
//        {
//            if(str2Frequencies[letter] === undefined)
//            {
//                str2Frequencies[letter] = 0;
//            }

//            ++str2Frequencies[letter];
//        }
//    }

//    var result = true;
//    var str2Keys = Object.keys(str2Frequencies);
//    console.log(str2Frequencies)
//    console.log(str2Keys)  //['c','a','t','l','e']
//    for(var i = 0, length = str2Keys.length; i < length; ++i)
//    {
//        var key = str2Keys[i];
//        console.log(key)
//        if((str1Frequencies[key] === undefined) ||
//           (str1Frequencies[key] < str2Frequencies[key]))
//        {
//            result = false;
//            break;
//        }
//    }

//    return result;
// }

// console.log(scramble('tacle', 'cattle'))

// function deleteNth(arr, n) {

//     var trackArr = {}
//     var indexArr = []

//     for (var i = 0; i < arr.length; i++) {

//         var num = arr[i]
        
//         if (trackArr[num] === undefined) {
//             trackArr[num] = 0
//         }
//         trackArr[num]++

//         if (trackArr[num] > n) {
//             indexArr.push(i)
//         }
        
//     }
    
//     for (var i = indexArr.length - 1; i>= 0; i--) {
//         arr.splice(indexArr[i], 1)
//     }
//         return arr
// }

// console.log(deleteNth([17,11,33,35,11,17,17,11,17,35,17], 1))


// var strKeys = Object.keys(arr)
//     console.log(strKeys)

// var letter = 'b';
// var deer = 'c'
// var bearArray = []
// bearArray[letter] = 5
// bearArray[deer] = 6


// console.log(bearArray)

// function expandedForm(num) {

//     var numString = String(num)
//     var newString = ""
//     var numZeros 

//     for (var i = 0; i < numString.length; i++) {

//         if (parseInt(numString[i]) > 0 && (numString[i + 1] != '0' || numString[i + 1] === undefined)) {
//             numZeros = numString.length - (i + 1)
            
//             newString += numString[i] + '0'.repeat(numZeros) + ' + '
            
//         } else if (parseInt(numString[i]) > 0 && numString[i + 1] === '0') {
//             numZeros = numString.length - (i + 1)

//             newString += numString[i] + '0'.repeat(numZeros) + ' + '
//         } 
//     }

//     newString = newString.slice(0, newString.length - 3)

//     return newString

// }
// expandedForm(91625160) //8 length
// expandedForm(12)

// var num =1234567
// var string = String(num)
// console.log(string.length) //7
// console.log(string[4]) //5
// 70897   '70000 + 800 + 90 + 7'
//90083   '90000 + 80 + 3' 

// var num = 100023
// var zees = '0'.repeat(5)
// console.log(typeof zees)


// var deer = 98765
// var beer = String(deer)
// console.log(parseInt(beer[2]))

// snail = function(array) {

//     var snail = []
    
//     for (var i = 0; i < array[0].length - 1; i++) {
//         snail.push(array[0][i])
//         console.log(snail)
//     }

//     console.log('length', array.length)

//     for (var i = 0; i < array.length - 1; i++) {
//         snail.push(array[i][array[0].length - 1])
//         console.log(snail)
//     }

//     for (var i = array.length - 2; i >= 1; i--) {
//         snail.push(array[array.length - 1][i])
//         console.log(snail)
//     }

//     for (var i = array.length -1; i >= 1; i--) {
//         snail.push(array[i][0])
//         console.log(snail)
//     }

//     for (var i = 0; i < array[2].length - 1; i++) {
//         snail.push()
//     }
// }


// snail([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]])

// function firstNonRepeatingLetter(s) {

//     if (s === "" || s === " ") {
//         return ''
//     }
    
//     var array = s.split("")

//     for (var i = 0; i < array.length; i++) {
//         var newArray = array.filter(x => x.toLowerCase() === array[i].toLowerCase())

//         if (newArray.length === array.length && newArray.length > 1) {
//             return ''
//         } else if (newArray.length === 1) {
//             return array[i]
//         } else if (i === (array.length - 1)) {
//             return ''
//         }
//     } 
// }

// console.log(firstNonRepeatingLetter('abcAbcj'))

// var year = ['a', 'b', 'c']
// if (year.includes('a')) {
//     console.log('yes')
// }

// var ele = [1,2,3,4,5,6]

// function zozo(array) {
//     var table = ele.filter(a => a > 3)
//     console.log(table)
//     console.log(array)
// }

// zozo(ele)

// var sum_pairs=function(ints, s){

//     var answer = []

//     for (var i = 0; i < ints.length; i++) { 

//         for (var j = i + 1; j < ints.length; j++) {

//             if (ints[i] + ints[j] === s) {
//                 answer.push([ints[i], ints[j], j])
//                 console.log(answer)
//             }
//         }
//     }

//     var newAnswer = answer.sort(function (a,b) {
//         return a[2] - b[2]
//     })

//     if (newAnswer[0]) {
//         newAnswer[0].pop()
//         return newAnswer[0]
//     }

    

//     return undefined
    
// }

// console.log(sum_pairs([10, 5, 2, 3, 7, 5], 10))  //3,7

// function plusMinus(arr) {
//     var positive = 0
//     var negative = 0 
//     var zero = 0

//     for(var i = 0; i < arr.length; i++) {

//         if (arr[i] < 0) {
//             negative++
//         } else if (arr[i] === 0) {
//             zero++
//         } else if (arr[i] > 0) {
//             positive++
//         }
//     }

//     positive = positive/arr.length.toPrecision(6)
//     negative = negative/arr.length.toPrecision(6)
//     zero = zero/arr.length.toFixed(6)

//     console.log(positive, negative.toPrecision(6), zero)

// }

// console.log(plusMinus([1,1,0,-1,-1]))

// var deer = [1, 1, 0, -1, -1]
// var bear = deer.split('\n')[1].split(' ')
// console.log(bear)


// function processData(input) {
//     var m = arr.map(function(e) { return parseInt(e) })
//     m.sort(function(n1, n2){
//         return n1-n2;
//     })
//     var min = 0, max = 0;
//     for(var i=0; i<5; i++){
//         i!=4 && (min+=m[i]);
//         i!=0 && (max+=m[i]);
//     }
//     console.log(min+' '+max);
// } 

// console.log(processData([1, 2, 3, 4, 5]))


/////////////////////////////////////RICK SOLUTION///////////////////////////////////////////////////////////////

// function scramble(str1, str2)
// {
//    var str1Frequencies = [];
//    var str2Frequencies = [];
//    for(var i = 0, length = str1.length; i < length; ++i)
//    {
//        var letter = str1.charAt(i);
//        if((letter >= 'a') && (letter <= 'z'))
//        {
//            if(str1Frequencies[letter] === undefined)
//            {
//                str1Frequencies[letter] = 0;
//                console.log(str1Frequencies)
//            }

//            ++str1Frequencies[letter];
//        }
//    }

//    for(var i = 0, length = str2.length; i < length; ++i)
//    {
//        var letter = str2.charAt(i);
//        if((letter >= 'a') && (letter <= 'z'))
//        {
//            if(str2Frequencies[letter] === undefined)
//            {
//                str2Frequencies[letter] = 0;
//            }

//            ++str2Frequencies[letter];
//        }
//    }

//    var result = true;
//    var str2Keys = Object.keys(str2Frequencies);
//    console.log(str2Frequencies)
//    console.log(str2Keys)  //['c','a','t','l','e']
//    for(var i = 0, length = str2Keys.length; i < length; ++i)
//    {
//        var key = str2Keys[i];
//        console.log(key)
//        if((str1Frequencies[key] === undefined) ||
//           (str1Frequencies[key] < str2Frequencies[key]))
//        {
//            result = false;
//            break;
//        }
//    }

//    return result;
// }

// console.log(scramble('tacle', 'cattle'))

// function birthdayCakeCandles(ar) {

//     var freq = []

//     for (var i = 0; i < ar.length; i++) {

//         var number = ar[i]

//         if (freq[number] === undefined) {
//             freq[number] = 0
//         }

//         ++freq[number]
//     }

//     return freq.sort((a, b) => b - a)[0]

// }

// console.log(birthdayCakeCandles([4,4,4,3,2,2,1]))


// function timeConversion(s) {

//     var truth = false
//     if (s.charAt(0) === '1' && s.charAt(1) === '2') {
//         truth = true
//     }

//     if (truth) {
//         console.log('sdfsdf')
//     }

//     if (s.charAt(8) === 'P' && !truth) {
        
//         var newHourOne = s.charAt(0)
//         var newHourTwo = s.charAt(1)
//         var finalHour = Number(newHourOne + newHourTwo) + 12
//         return finalHour.toString() + s.substring(2, 8)

//     } else if (truth && s.charAt(8) === 'A') {
//         return '00' + s.substring(2, 8)
//     } else if (s.charAt(8) === 'A' || (truth && s.charAt(8) === 'P')) {
//         return s.substring(0, 8)
//     }
    


// }

// console.log(timeConversion('12:05:45PM'))


// function gradingStudents(grades) {

//     var newGrades = []
    
//     for (var i = 0; i < grades.length; i++) {

//         for (var j = 0; j < 5; j++) {

//             var number = grades[i] + j

//             if (number % 5 === 0) {

//                 if (number - grades[i] < 3 && grades[i] >= 38) {
//                     newGrades.push(number)
//                 } else if (number - grades[i] >= 3 || grades[i] < 38) {
//                     newGrades.push(grades[i])
//                 }

//             }

//         }


//     }

//     return newGrades

// }

// console.log(gradingStudents([73, 67, 38, 33]))

// function countApplesAndOranges(s, t, a, b, apples, oranges) {

//     var appleCount = 0
//     var orangeCount = 0

//     for (var i = 0; i < apples.length; i++) {

//         var number = apples[i] + a

//         if (number >= s && number <= t) {
//             appleCount++
//         }
//     }

//     for (var i = 0; i < oranges.length; i++) {

//         var number = oranges[i] + b

//         if (number >= s && number <= t) {
//             orangeCount++
//         }
//     }

//     console.log(appleCount)
//     console.log(orangeCount)

// }

// console.log(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]))

// function kangaroo(x1, v1, x2, v2) {

//     var one = x1
//     var two = x2

//     for (var i = 0; i < 10001; i++) {
//         one += v1
//         two += v2

//         if (one == two) {
//             console.log('YES')
//             return;
//         }
//     }

//     console.log('No')
// }

// console.log(kangaroo(21, 6, 47, 3))

// function breakingRecords(scores) {

//     var highCount = 0
//     var lowCount = 0

//     var highScore = scores[0]
//     var lowScore = scores[0]

//     scores.forEach(score => {

//         if (score > highScore) {
//             highScore = score
//             highCount++
//         }

//         if (score < lowScore) {
//             lowScore = score
//             lowCount++
//         }
//     })

//     console.log(highCount, lowCount)

// }

// console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])) //9

// function birthday(s, d, m) {

//     var numOfSegs = 0

//     for (var i = 0; i < s.length; i++) {

//         var sum = s[i]

//         for (var j = 1; j < m; j++) {

//             sum += s[i + j]

//         }

//         if (sum === d) {
//             numOfSegs++
//         }

//     }
//         return numOfSegs

// }

// console.log(birthday([4], 4, 1))

// function divisibleSumPairs(n, k, ar) {

//     var count = 0

//     for (var i = 0; i < ar.length; i++) {

//         for (var j = i + 1; j < ar.length; j++) { 

//             var sum = ar[i] + ar[j]

//             if (sum % k === 0) {
//                 count++
//             }

//         }
//     }

//     return count
// }

// console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))

// function migratoryBirds(arr) {

//     var birds = []

//     for (var i = 0; i < arr.length; i++) {

//         var bird = arr[i]

//         if (birds[bird] === undefined) {

//             birds[bird] = 0
//         }

//         birds[bird]++

//     }

//     console.log(birds)

//     var max = birds[1]
//     var index = 0

//     for (var i = 2; i <=5; i++) {

//         if (birds[i] > max) {
//             max = birds[i]
//             index = i
//         }
//     }

//     return index

// }

// console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))


// const arr = [1, 1, 0, -1, -1, 1]

// function portionFinder(arr) {

//   var positive = 0
//   var negative = 0
//   var zero = 0
//   var n = arr.length

//   for (var i = 0; i < arr.length; i++) {
    
//     if (arr[i] > 0) {
//       positive++
//     } else if (arr[i] < 0) {
//       negative++
//     } else {
//       zero++
//     }
//   }

//   console.log( (positive / n).toFixed(6))
//   console.log( (negative / n).toFixed(6))
//   console.log( (zero / n).toFixed(6))
  

// }

// portionFinder(arr)

// function processData(input) {
//   var ls = input.split("\n");
//   var n = parseInt(ls[0]);
//   var gt=0,lt=0,z=0;
//   var ns = ls[1].split(" ").forEach(function(v){
//       v = parseInt(v);
//       if(v < 0){
//           lt++;
//       } else if(v > 0){
//           gt++;
//       } else {
//           z++;
//       }
//   });
//   console.log(Math.round((gt/n)*1000)/1000);
//   console.log(Math.round((lt/n)*1000)/1000);
//   console.log(Math.round((z/n)*1000)/1000);
// } 

// processData(arr)

// console.log(arr.split())

// var arr = [1, 4, 3, 2]

// function reverseArray(a) {

//   var newArr = []

//   for (var i = a.length - 1; i >= 0; i--) {
//     newArr.push(a[i])
//   }

//   console.log(newArr)

//   return newArr


// }

// reverseArray(arr)

// var arr = [
//   [-9, -9, -9, 1, 1, 1],
//   [0, -9, 0, 4, 3, 2],
//   [-9, -9, -9, 1, 2, 3],
//   [0, 0, 8, 6, 6, 0],
//   [0, 0, 0, -2, 0, 0],
//   [0, 0, 1, 2, 4, 0]
// ]

// var arr = [
//   [1,1,1,0,0,0],
//   [0,1,0,0,0,0],
//   [1,1,1,0,0,0],
//   [0,0,2,4,4,0],
//   [0,0,0,2,0,0],
//   [0,0,1,2,4,0]
// ]

// var arr = [
//   [-1,-1,0,-9,-2,-2],
//   [-2,-1,-6,-8,-2,-5],
//   [-1,-1,-1,-2,-3,-4],
//   [-1,-9,-2,-4,-4,-5],
//   [-7,-3,-3,-2,-9,-9],
//   [-1,-3,-1,-2,-4,-5]
// ]

// function hourglassSum(arr) { 

//   var highValue = 0
//   var sum = 0

//   for (var i = 0; i < arr.length - 2; i++) {

//     var top = i
//     var mid = i + 1
//     var bot = i + 2

    
//     for (var j = 0; j < arr[0].length - 2; j++) {
//       sum+= arr[top][j] + arr[top][j+1] + arr[top][j+2]
//       sum+= arr[mid][j + 1]
//       sum+= arr[bot][j] + arr[bot][j+1] + arr[bot][j+2]

//       if (i === 0 && j === 0) {
//         highValue = sum
//       }

//       if ( sum > highValue ) {
//         highValue = sum
//       }
  
//       sum = 0

//     }
    
//   }


//   console.log(highValue)
//   return highValue

// }

// hourglassSum(arr)



// function leftRotation(a, b) {

//   var arr = b

//   for (var i = 0; i < a; i++) {

//     var letter = arr[0]
//     arr.shift()
//     arr.push(letter)



//   }
//   return arr
//   console.log(arr)

// }

// console.log(leftRotation(3, [1,2,3,4,5]))


// function matchingStrings(strings, queries) {

//   var answers = []

//   for (var i = 0; i < queries.length; i++) {

//     for (var j = 0; j < strings.length; j++) {

//       if (queries[i] === strings[j] && answers[i] === undefined) {
//         answers[i] = 1
//       } else if (queries[i] === strings[j]) {
//         answers[i]++
//       }


//     }

//   }

//   for (var k = 0; k < queries.length; k++) {
//     if (answers[k] === undefined) {
//       answers[k] = 0
//     }
//   }
//   return answers
//   console.log(answers)
// }


// var string = ['def', 'de', 'fgh']
// var queries = ['de', 'lmn', 'fgh']

// console.log(matchingStrings(string, queries))



// function validSolution(board){

//   var isTrue = true;
  
//   var reduct = (array) => {
//     return array.reduce((a,b) => a + b)
//   }

//   //Check rows
//   for (var i = 0; i < 9; i++) {

//     if (reduct(board[i]) != 45) {
//       isTrue = false;
//       break;
//     } 

//   }

//   //Check columns
//   for (var i = 0; i < 9; i++) {
//     if (!isTrue) {
//       break;
//     }
//     var count = 0

//     for (var j = 0; j < 9; j++) {

//       count += board[j][0]

//       if (j === 8 && count != 45) {
//         isTrue = false
//       }

//     }
//   }

//   //check 3X3
//   var colOneCount = 0
//   var colTwoCount = 0
//   var colThreeCount = 0
  
//   for (var i = 0; i < 7; i = i + 3) {

//     if (!isTrue) {
//       break;
//     }

//     colOneCount = 0
//     colTwoCount = 0
//     colThreeCount = 0

//     for (var j = 0; j < 3; j++) {

//       if (!isTrue) {
//         break;
//       }

//       colOneCount += board[i][j]
//       colOneCount += board[i+1][j]
//       colOneCount += board[i+2][j]

//       colTwoCount += board[i][j+3]
//       colTwoCount += board[i+1][j+3]
//       colTwoCount += board[i+2][j+3]

//       colThreeCount += board[i][j+6]
//       colThreeCount += board[i+1][j+6]
//       colThreeCount += board[i+2][j+6]

//       if (j === 2) {
//         if (colOneCount != 45 || colTwoCount != 45 || colThreeCount != 45) {
//           isTrue = false;
//         }
//       }

//       }
//     }

//   return isTrue
// }

// var board = [
// [5, 3, 4, 6, 7, 8, 9, 1, 2], 
// [6, 7, 2, 1, 9, 5, 3, 4, 8],
// [1, 9, 8, 3, 4, 2, 5, 6, 7],
// [8, 5, 9, 7, 6, 1, 4, 2, 3],
// [4, 2, 6, 8, 5, 3, 7, 9, 1],
// [7, 1, 3, 9, 2, 4, 8, 5, 6],
// [9, 6, 1, 5, 3, 7, 2, 8, 4],
// [2, 8, 7, 4, 1, 9, 6, 3, 5],
// [3, 4, 5, 2, 8, 6, 1, 7, 9]]

// console.log(validSolution(board))

// var isPP = function(n){
  
// }

// var number = 123
// console.log(number.toString().split(''))

// console.log(parseInt('2'))


// function parseInt(string) {
  
//   var array = string.split(' ')
//   console.log(array)
//   var string

//   for (var i = 0; i < array.length; i++) {

//     if (array[i] === 'and') {
//       break; 
//     }

//   }


// }



// console.log(parseInt('two hundred and forty-six'))

// var text = '321';
// var integer = parseInt(text, 2);
// console.log(integer) 

// var x = 2 / 0;
// console.log(x)
// console.log(typeof x)

// console.log('brianaaa')

// if ('' === '') {
//   console.log('dog')
// }

// if ('A'.match(/[a-z]/i)) {
//   console.log('beets')
// }

// function alphanumeric(string){

//   if (string.length === 0) {
//     return false
//   }

//   var answer = true
//   var array = string.split("")
//   console.log(array)
  
//   for (var i = 0; i < array.length; i++) {

//     if (!answer) {
//       break;
//     } else if (array[i].match(/[a-z]/i)) {
//       answer = true
//     } else if (array[i] >= '0' && array[i] <= '9') {
//       answer = true
//     } else {
//       answer = false
//     }
//   }

//   return answer

// }

// console.log(alphanumeric(""))

// const quarterOf = (month) => {
  
//   if (month <= 3) {
//     return 1
//   } else if (month > 3 && month <= 6) {
//     return 2
//   } else if (month > 6 && month <=9) {
//     return 3
//   } else {
//     return 4
//   }


  
// }


// function dutyFree(normPrice, discount, hol){

//   var newDiscount = discount * .01
//   var savings = normPrice * newDiscount
//   var value = hol/savings
//   return Math.floor(value)

// }

// function dutyFree(normPrice, discount, hol){
//   return(Math.floor(hol / normPrice / discount * 100))
// }

// console.log(dutyFree(12, 50, 1000)) 

// function nextId(ids){
  
//   for (var i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
//     if (!ids.includes(i)) {
//       return i
//       break;
//     }
//   }
  
// }


// console.log(nextId([0,1,2,3,5]))


// function busTimer(time) {

//   var answer
//   var stringHours = time.charAt(0) + time.charAt(1)
//   var hour = parseInt(stringHours)
//   console.log(hour)
//   var stringMinutes = time.charAt(3) + time.charAt(4)
//   var minutes = parseInt(stringMinutes)

//   if (hour < 6) {

//     var count = 5 - hour;

//     if (count === 1) {
//       answer = 55
//     }
    

//   }


//   return answer
// }

// console.log(busTimer("04:24"))
// console.log(busTimer("05:10"))

//91
//45

// function StringReduction(str) { 

//   var stringLength;

//   ///FUNCTION TO CHECK IF STRING IS REDUCED
//   function isReduced(string) {

//     if (string.length === 1) {
//       return true
//     }

//     const array = string.split("");

//     let isTrue = true;
//     for (var i = 0; i < array.length - 1; i++) {
      
//       if (array[i] === array[i + 1]) {
//         isTrue = true;
//       } else {
//         isTrue = false;
//       }

//       if (!isTrue) {
//         break;
//       }
//     }

//     return isTrue;

//   }

//   ///FUNCTION TO REDUCE STRING
//   function innerReduction(string) {

//     let newString = "";
//     let j = 0;
//     const array = string.split("");

//     for (var i = 0; i < array.length; i++) { ///bba

//       if (i === 0 && array[i + j] === array[i + j + 1]) {

//         newString = array[i + j]
//         console.log('same', newString);
        
        
//       } else if (array[i + j] === array[i + j + 1]) {
        
//         newString += array[i + j]
//         j++
//         console.log(newString)

//       } else if ((array[i + j] === 'a' || array[i + j] === 'b') && (array[i + j + 1] === 'a' || array[i + j + 1] === 'b')) {

//         newString += 'c';
//         j++
//         console.log(newString)

//       } else if ((array[i + j] === 'b' || array[i + j] === 'c') && (array[i + j + 1] === 'b' || array[i + j + 1] === 'c')) {

//         newString += 'a';
//         j++
//         console.log(newString)

//       } else if ((array[i + j] === 'a' || array[i + j] === 'c') && (array[i + j + 1] === 'a' || array[i + j + 1] === 'c')) {

//         newString += 'b';
//         j++
//         console.log(newString)
//       }
//     }    

//     if (isReduced(newString)) {
//       console.log('done')
//       stringLength = newString.length
      
//     } else {
//       console.log('nr', newString)
//       innerReduction(newString)
//     }

//     return stringLength;
//   }

  
  
//  return innerReduction(str)
  
  
  

// }

// console.log(StringReduction('bba'));
                                                    // 0 
// function solve(arr){

//   var highNumber = 0;

//   for (var i = 0; i < arr.length; i++) {

//     for (var j = 1; j < arr[i].length; j++) {

//       for (var k = 0; k < arr[j].length; k++) {

//         if (arr[i][j] * arr[j][k] > highNumber) {
//           highNumber = arr[i][j] * arr[j][k]
//         }

//       }


//     }

//   }

//   return highNumber;
  
// }

// console.log(solve([[1, 2],[3, 4]]))


// function repeatStr (n, s) {

//   var string = s;
//   for (var i = 0; i < n - 1; i++) {
//     string += s
//   }
//   return string;
// }

// console.log(repeatStr(7, 'k'))

// function allNonConsecutive (arr) {

//   var solution = [];

//   if (arr.length <= 1) {
//     return [];
//   }

//   for (var i = 0; i < arr.length; i++) {
//     if(arr[i] + 1 === arr[i + 1] && i + 1 < arr.length) {
//       continue;
//     } else if (i + 1 < arr.length) {
//       solution.push({i: i + 1, n: arr[i + 1]})
//     }
//   }

//   return solution;
// }

// console.log(allNonConsecutive([1,2,3,4,6,7,8,10]))

// function partsSums(ls) {

//   var num = ls.length;
//   var arr = ls;
//   var result = [];
//   var sum = 0;

//   for (var i = 0; i < num; i++) {

//     for (var j = 0; j < arr.length; j++) {
//       sum += arr[j]
//     }

//     result.push(sum);
//     sum = 0;
//     arr.shift()
//   }
//   result.push(0)
//   return result;
  
// }

// console.log('final', partsSums([0, 1, 3, 6, 10]))

// ////try find total and then subtracting

// function parts(ls) {

//   var num = ls.length;
//   var result = [];

//   for (var i = 0; i < num + 1; i++) {
//     var sum = ls.reduce(function(a, b) {
//       return a + b;
//     }, 0)
//     result.push(sum);
//     ls.shift();
//   }

//   return result;
// }

// console.log('final', parts([0, 1, 3, 6, 10]))
//0 0 1 6 10      17  


function solve(arr) {
  
  arr.sort()
  if(arr[1] != 1) {
    return 1;
  }

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === (i+1)) {
      continue;
    };


  }




}

console.log(solve([1,2,8,7]))


1 2 7 8   

sum = 3
