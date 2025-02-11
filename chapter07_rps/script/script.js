let userInput;
let comInput;
let randomNum = Math.random();

// 0이상 0.33미만은 가위 0.33이상 0.66 미만은 바위 0.66이상 1미만은 보로 comInput에 대입하시오.


userInput = prompt('가위, 바위, 보!')
console.log(userInput)

// 입력한 값이 가위, 바위, 보 중 하나라면 통과하는데, 잘못된 철자나 묵, 찌, 빠 등이라면 '가위, 바위, 보 중 하나를 입력해야 합니다!'를 출력하는 alert이 나올 수 있도록 조건문을 작성하시오.

if (userInput !== '가위' && userInput !== '바위' && userInput !== '보') console.log('가위, 바위, 보 중 하나를 입력해야 합니다!') 
else {
  // 이 부분이 유효성 검사를 통과한 부분이니
  // 나머지 정상 실행된 로직을 작성하도록 하는 편

  if (randomNum < 0.33) comInput = '가위';
  else if (randomNum < 0.66) comInput = '바위';
  else comInput = '보';
  
  console.log(comInput);

  // userInput을 기준으로 작성하겠습니다.
  if (userInput === '가위') {
    // comInput 비교
    if (comInput === '가위') {
      // 사용자가 비긴 경우
      alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`)
    } else if (comInput === '바위') {
      // 사용자가 진 경우
      alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`)
    } else {
      //사용자가 이긴 경우
      alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다.`)
    }
  } else if (userInput === '바위') {
    // comInput 비교
    if (comInput === '가위') {
      // 사용자가 이긴 경우
      alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다.`)
    } else if (comInput === '바위') {
      // 비긴 경우
      alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`)
    } else {
      //사용자가 진 경우
      alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`)
    }
  } else {
    // comInput 비교
    if (comInput === '가위') {
      // 사용자가 진 경우
      alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`)
    } else if (comInput === '바위') {
      // 사용자가 이긴 경우
      alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다.`)
    } else {
      //사용자가 비긴 경우
      alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`)
    }
  }
}