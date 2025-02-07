const person01 = {
  name: "김철수",
  age: 25,
  address: "부산광역시 연제구",
  married: false
};

const myArray = [true, 3.14, "Hello", person01]

console.log(myArray, myArray.length)
// myArray.length -> java 기준 field에 해당 -> () 없음

console.log(
  !myArray[0],
  myArray[1],
  myArray[2],
  myArray[3]
)

/* 배열의 내부에 있는 각 element들의 자료형을 감안하는 게 중요합니다

Java를 배운 저희들은 배열 선언할 때 int arr[] 형태로 선언하다보니까 element들의 자료형이 일치한다고 생각하는 경우가 너무 많습니다. 

그런데 JavaScript의 경우 각 element마다 고유의 자료형을 지닐 수 있기 때문에, 하나의 배열 내에서도 다양한 방식의 데이터 조작이 가능합니다.
*/

myArray[1] *= 100;
myArray[2] += " world! 🍔";

console.log(myArray[1]);
console.log(myArray[2]);


