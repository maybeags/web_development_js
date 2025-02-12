let lottoArray = [];

for( let i = 0 ; i < 45 ; i++ ) {
  lottoArray.push(i+1);
}

lottoNumbers = [];

for (let i = 0 ; i < 6 ; i++) {
  let index2 = Math.floor(Math.random()*lottoArray.length);


  let num2 = lottoArray[index2];


  lottoArray.splice(index2, 1);

  lottoNumbers.push(num2);
} 
// console.log(lottoNumbers);
// console.log(lottoArray); -> 이제 브라우저에 찍히도록 수정 예정

// for ( let i = 0 ; i < 6 ; i++ ) {
//   document.write(lottoNumbers[i]);
// }

// document.write()내부에는 HTML 먹일 수 있었습니다.
for ( let i = 0 ; i < 6 ; i++ ) {
  document.write('<span class="ball">' + lottoNumbers[i] + ' </span>');
}