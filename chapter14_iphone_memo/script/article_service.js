let boardInputDatas = {
  id: 0,
  title: "",
  content: "",
  writer: "",
};

function setInputsEvent() {
  const titleInput = document.querySelector('.main-article > input:nth-of-type(1)');
  const contentInput = document.querySelector('.main-article > textarea');
  const writerInput = document.querySelector('.main-article > input:nth-of-type(2)');
  titleInput.onkeyup = handleBoardInputOnChange;
  contentInput.onkeyup = handleBoardInputOnChange;
  writerInput.onkeyup = handleBoardInputOnChange;
}

function setButtonEvent() {
  const submitButton = document.querySelector('.write-submit-button');
  submitButton.onclick = handleBoardInputOnChange;
}

function handleSubmitOnClick() {
  saveBoard();
  clear();
}

function handleBoardInputOnChange(e) {
  boardInputDatas = {
    ...boardInputDatas,
    [e.target.name]: e.target.value,
  };
}

// saveBoard(); -> 여기부터 정의하도록 하겠습니다.
// clear();