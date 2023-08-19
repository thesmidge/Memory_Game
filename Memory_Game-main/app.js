document.addEventListener('DOMContentLoaded', () => {

  const cardArray = [
    {
      name: 'dragon1',
      img: 'images/dragon1.jpeg'
    },
    {
      name: 'dragon1',
      img: 'images/dragon1.jpeg'
    },
    {
      name: 'dragon2',
      img: 'images/dragon2.jpeg'
    },
    {
      name: 'dragon2',
      img: 'images/dragon2.jpeg'
    },
    {
      name: 'dragon3',
      img: 'images/dragon3.jpeg'
    },
    {
      name: 'dragon3',
      img: 'images/dragon3.jpeg'
    },
    {
      name: 'dragon4',
      img: 'images/dragon4.jpeg'
    },
    {
      name: 'dragon4',
      img: 'images/dragon4.jpeg'
    },
    {
      name: 'dragon5',
      img: 'images/dragon5.jpeg'
    },
    {
      name: 'dragon5',
      img: 'images/dragon5.jpeg'
    },
    {
      name: 'dragon6',
      img: 'images/dragon6.jpeg'
    },
    {
      name: 'dragon6',
      img: 'images/dragon6.jpeg'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //create your board
  function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
      let card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry try again')
    }
    cardsChosen = []
    cardsChosenId =[]
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!';
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
  }
}
createBoard();
})