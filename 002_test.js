// let a = "spartan";

// function count(str) {
//     for (let i = 0; i < str.length; i++) {
//         let input;
//         input = [...str];
//         let count = 0;
//         for (let j = 0; j < input.length; j++) {
//             if (input[j] === input[i]) {
//                 count++;
//                 input[i] = count;
//                 console.log(count);
//             }
//         }
//     }
// }

// console.log(count(a));

/////////////////////////////////////////////////////
// function countCharacters(str){
//     let charCount = {};
//     for (let i=0; i<str.length; i++) {
//         const char = str[i];
//         if (charCount[char]) {
//             charCount[char]++;
//         } else {
//             charCount[char]=1;
//         } 
//     }
//     return charCount;
// }

// let a = "spartan";

// console.log(countCharacters(a));

/////////////////////////////////////////////////////
// 문제 1. 주어진 문자열을 뒤집어서 반환하는 함수를 작성해주세요!
// 예를 들어, 문자열 'spartan'이 주어지면, 결과는 다음과 같아야 합니다: 'natraps'*

// function reverse(str){
//     let temps = [];
//     for (let i=0; i<str.length; i++) {
//         let temp = str.length - i - 1;
//         temps[i] = str[temp];
//     }
//     return temps;
// }

// let a = "spartan";

// console.log(reverse(a));

/////////////////////////////////////////////////////
// 문제 2. 주어진 문자열을 요약하는 함수를 작성해주세요!
// 예를 들어, 문자열 ‘aaabbbc’가 주어지면 결과는 다음과 같아야 합니다: ‘a3/b3/c1’
// 또한, 문자열 ‘ahhhhz’가 주어지면 결과는 다음과 같아야 합니다: ‘a1/h4/z1’

// function countCharacters(str) {
//     let charCount = {};
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         if (charCount[char]) {
//             charCount[char]++;
//         } else {
//             charCount[char] = 1;
//         }
//     }
//     return charCount;
// }

// function summarize(obj) {
//     // 임시 배열
//     let temps = [];
//     // 임시 문자
//     let temp;
//     // 반복문(obj의 길이만큼)
//     for (i=0; i<Object.keys(obj).length; i++) {
//         // 유사배열의 i의 key와 value를 받아 합쳐서 임시 문자에 할당해준다.
//         temp = Object.keys(obj)[i] + Object.values(obj)[i];
//         // 그 값을 임시 배열에 추가해준다.
//         temps.push(temp);
//     }
//     // 임시 배열의 값을 /를 기준으로 이어붙여 문자열을 만들어주고 return한다.
//     return temps.join("/");
// }

// let a = "spartan";

// // console.log(countCharacters(a));
// console.log(summarize(countCharacters(a)));

/////////////////////////////////////////////////////
// 문제 3. 주어진 숫자가 소수인지 아닌지 판별하는 함수를 작성해주세요.
// 소수는 1과 자기 자신으로만 나누어지는 1보다 큰 정수입니다.
// (힌트: 나머지 값을 구하는 연산자는 % 입니다. → e.g. 3 % 2는 1입니다.)

// 구현 실패
function primeNumber(num) {
    let temp;
    if (num > 2) {
        for (let i = 2; i <= num; i++) {
            let test = num % i;
            if (test === 0) {
                return "숫자 " + num + "는 소수가 아닙니다.";
            } else {
                // return "숫자 " + num + "는 소수입니다.";
                continue;
            }
        }
        return "숫자 " + num + "는 소수입니다.";
    } else if (num == 2) {
        return "숫자 " + 2 + "는 소수입니다.";
    } else {
        return "숫자 " + num + "는 소수가 아닙니다.";
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(primeNumber(arr[0]));
console.log(primeNumber(arr[1]));
console.log(primeNumber(arr[2]));
console.log(primeNumber(arr[3]));
console.log(primeNumber(arr[4]));
console.log(primeNumber(arr[5]));
console.log(primeNumber(arr[6]));
console.log(primeNumber(arr[7]));
console.log(primeNumber(arr[8]));
console.log(primeNumber(arr[9]));