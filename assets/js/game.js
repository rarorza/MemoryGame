const grid = document.querySelector('.grid');

const characters = [
  'beth',
  'jerry',
  'jessica',
  'morty',
  'pessoa-passaro',
  'pickle-rick',
  'rick',
  'summer',
  'meeseeks',
  'scroopy',
];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

let firstCard = '';
let secondCard = '';

const checkCards = () => {
  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');

  if (firstCharacter === secondCharacter) {

    firstCard.classList.add('disabled_card');
    secondCard.classList.add('disabled_card');

  } else {
    setTimeout(() => {

      firstCard.classList.remove('reveal_card');
      secondCard.classList.remove('reveal_card');

      firstCard = '';
      secondCard = '';

    }, 500);
  }
}

const revealCard = ({ target }) => {

  if (target.parentNode.className.includes('reveal_card')) {
    return;
  }

  if (firstCard === '') {

    target.parentNode.classList.add('reveal_card');
    firstCard = target.parentNode;

  } else if (secondCard === '') {

    target.parentNode.classList.add('reveal_card');
    secondCard = target.parentNode;
  }
}

const createCard = (character) => {
  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('../assets/img/${character}.png')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revealCard);
  card.setAttribute('data-character', character);

  return card;
}

const loadGame = () => {
  const duplicateCharacters = [...characters, ...characters];
  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((character) => {

    const card = createCard(character);

    grid.appendChild(card);
  });
}

loadGame();
