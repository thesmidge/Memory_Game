document.addEventListener('DOMContentLoaded', () =>{

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
      img: 'images/dragon1.jpeg'
    },
    {
      name: 'dragon2',
      img: 'images/dragon1.jpeg'
    },
    {
      name: 'dragon3',
      img: 'images/dragon1.jpeg'
    },
    {
      name: 'dragon3',
      img: 'images/dragon1.jpeg'
    },
    {
      name: 'dragon4',
      img: 'images/dragon1.jpeg'
    },
    {
      name: 'dragon4',
      img: 'images/dragon1.jpeg'
    },
    {
      name: 'dragon5',
      img: 'images/dragon1.jpeg'
    },
    {
      name: 'dragon5',
      img: 'images/dragon1.jpeg'
    },
    {
      name: 'dragon6',
      img: 'images/dragon1.jpeg'
    },
    {
      name: 'dragon6',
      img: 'images/dragon1.jpeg'
    },
  ]
  const grid = document.querySelector('.grid');

  function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
      let card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i)
      // card.addEventListener('click', flipcard);
      grid.appendChild(card)
    }
  }
  createBoard()

})



