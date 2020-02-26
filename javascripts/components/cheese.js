import util from '../helpers/util.js';
import cheeseData from '../helpers/data/cheese-data.js';

const selectCheese = (e) => {
  const cheeseId = e.target.id;
  cheeseData.setSelectedCheese(cheeseId);
}

const buttonEvent = (e) => {
  const buttons = document.getElementsByClassName('cheese-button');
  for(let i=0; i< buttons.length; i++){
    buttons[i].addEventListener('click', selectCheese);
  }
}

const makeCheeseButtons = () => {
  const allCheeses = cheeseData.getCheese();
  let domString = '';

  allCheeses.forEach((cheese) => {
    domString +=  '<div class="btn-lg">'
      domString +=  `<button type="button" class="btn btn-warning cheese-btn cheese-button" id="${cheese.id}">`,
      domString +=  `${cheese.type}`,
      domString +=  '</button>'
      domString +=  '</div>'
  });
  util.printToDom('cheese-container', domString);
  buttonEvent();
}

export default { makeCheeseButtons };

