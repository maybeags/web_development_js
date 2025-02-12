let num1, num2, num3, num4, num5, num6; // 복수의 변수 선언

num1 = Math.floor((Math.random() * 45) + 1 );
num2 = Math.floor((Math.random() * 45) + 1 );
num3 = Math.floor((Math.random() * 45) + 1 );
num4 = Math.floor((Math.random() * 45) + 1 );
num5 = Math.floor((Math.random() * 45) + 1 );
num6 = Math.floor((Math.random() * 45) + 1 );

while ( num2 === num1 ) {
  num2 = Math.floor((Math.random() * 45) + 1 );
}


console.log(num1, num2, num3, num4, num5, num6);