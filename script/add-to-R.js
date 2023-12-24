
const printbtn = document.querySelector('.js-pinte-btn');
printbtn.addEventListener('click', function() {
  print();
})

let resultingwords = [
 
  `Amigo 5kg`,
  `Amigo 25kg`,
  `Amigo 50kg`,
  `Champion rice 25kg`,
  `Champion rice 50kg`,
  `Habiba 25kg`,
  `Mada omo 1kg`,
  `Mada omo halfkg`,
  `OLA omo 1kg`,
  `OLA omo halfkg`,
  `Selecter 25kg`,
  `Mayor 5l`,
  `Mayor 3L`,
  `Mayor 1l`,
  `Oilio 3l`,
  `Oilio 5l`,
  `Active 5l`,
  `Wity chocolate 2.8l`,
  `Choco loco chocolate 2.8l`,
  `Bambi chocolate 2.8l`,
  `Tartiana chocolate 2.8l`,
  `Valledor butter 2.7l`,
  `La croix 5l`,
  `La croix 1l`,
  `Baron 5l`,
  `La croix  sachets`,
  `Iron sponge red(12)`,
  `Iron sponge net(12)`,
  `Magic mamy sponge(24)`,
  `Savon mayor`,
  `Savon clean`,
  `Savon uno`,
  `Savon  anti crise`,
  `Savon pakeh`,
  `Savon faco`,
  `Trophe can(big)`,
  `Trophe can(small)`,
  `Hiro (big)`,
  `Hiro (small)`,
  `Barvaria bottle`,
  `Barvaria can(big)`,
  `Malter guiness`,
  `Power malt`,
  `Vapur`,
  `Bullet can`,
  `Bullet sachet`,
  `Henieken (1stclass)`,
  `Henieken (2ndclass)`,
  `Booter`,
  `3X energy drink`,
  `Skoll`,
  `super morl 1l`,
  `super morl 10l`,
  `Tiara`,
  `Alex condom`,
  `Creamz biscuits`,
  `Bambil stick`,
  `Playing card`,
  `Marker`,
  `Lipton`,
  `Familia spaghetti 500g`,
  `Familia spaghetti 250g`,
  `Crackers`,
  `Vigor doctor paste`,
  `Mericle paste`,
  `Small Colgate`,
  `Gaslighter torch`,
  `Gaslighter no torch`,
  `Moontiger`,
  `Candle`,
  `Safety matches`,
  `Celor 5l`,
  `Hollandia big`,
  `Hallandia small`,
  `Roma tomat`,
  `Amor tomat`,
  `Mymy tomat`,
  `Ariel omo`,
  `3in1 wine`

];

const resultbox = document.querySelector('.resultboxF');
const inputtbox = document.getElementById('name');

inputtbox.addEventListener('input', funA);
function funA() {
  let result = [];
  let input = inputtbox.value;
  if (input.length) {
    result = resultingwords.filter((keyword) => {
     return keyword.toLowerCase().includes(input.toLowerCase());
    });
  }
  if (result.length > 15) {
    resultbox.classList.add('hide-resultboxF');
  }else {
    resultbox.classList.remove('hide-resultboxF');
  }
  display(result);
  hideB();
}

function display(result) {
  const content = result.map((list) => {
    return "<li onclick=selectInput(this)>" + list + "</li>"
  })

  resultbox.innerHTML = "<ul>" + content.join('') + "</ul>"
}

function selectInput(list) {
  inputtbox.value = list.innerHTML;
  resultbox.innerHTML = '';
  resultbox.classList.add('hide-borded');
 
}

hideB();
function hideB() {
  if (inputtbox.value === '') {
    resultbox.classList.add('hide-borded');
  } else {
    resultbox.classList.remove('hide-borded');
  }
};

