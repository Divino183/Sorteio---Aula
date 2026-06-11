const winningNumber = document.querySelector('.winning-number')


function prizeDraw() {
  const min = Math.ceil(document.querySelector('#min').value)
  const max = Math.floor(document.querySelector('#max').value)

  if(min >= max) {

    winningNumber.innerHTML = '⚠️';

  }else {

    const result = Math.floor(Math.random() * (max - min) + min);

    winningNumber.innerHTML = result;
  }
}
  

