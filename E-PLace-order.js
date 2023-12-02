const orderlist = [];
rederoderlist();
function rederoderlist() {
  let folder = '';
  for (let i = 0; i < orderlist.length; i++) {
    const fileObject = orderlist[i];
    const { name, quantity, description, unit, amount } = fileObject;
    const filehtml = `
    <div>
      ${name}
    </div>
    <div>
      ${quantity}
    </div>
    <div>
      ${description}
    </div>
    <div>
      ${unit}
    </div>
    <div>
      ${amount}
    </div>
    <div>
      <button onclick="
        orderlist.splice(${i}, 1)
        rederoderlist();
        totaladd();
        console.log(orderlist)
      "
      class="delete-button">delete</button>
      </div>
    `;
    folder += filehtml
    document.querySelector('.screen-display').innerHTML = folder
  }
}

totaladd();
function totaladd() {
  let total = 0;
  for (let i = 0; i < orderlist.length; i++) {
    const totalfile = orderlist[i];
    const {amount} = totalfile;
    total += Number(amount);
    document.querySelector('.total-price').innerHTML = total;
  }
}

function orderF() {
  const names = document.getElementById('name');
  const quantitys = document.getElementById('quantity');
  const descriptions = document.getElementById('description');
  const units = document.querySelector('.unit-price');
  const amounts = document.querySelector('.amount');
  const name = names.value
  const quantity = quantitys.value
  const description = descriptions.value
  const unit = units.innerHTML
  const amount = amounts.innerHTML

  orderlist.push({
    name,
    quantity,
    description,
    unit,
    amount
  })
  amounts.innerHTML = Number(units.innerHTML * quantitys.innerHTML);
  names.value = 'emty';
  quantitys.value = 0;
  units.innerHTML = 0;
  descriptions.value = '';
  rederoderlist();
  totaladd();
  fun4();
  fun5();
  notishide.innerHTML = Number(notishide.innerHTML) + 1
  console.log(orderlist)
  console.log(unit);
}

let names = document.getElementById('name');
let quantitys = document.getElementById('quantity');
let descriptions = document.getElementById('description');
let units = document.querySelector('.unit-price');
let amounts = document.querySelector('.amount');
quantitys.addEventListener('input', fun2);
descriptions.addEventListener('input', fun4);
names.addEventListener('input', fun4)
const name = names.value
const quantity = quantitys.value
const description = descriptions.value
const unit = units.innerHTML
const amount = amounts.innerHTML
amounts.innerHTML = Number(units.innerHTML * quantitys.value);
units.innerHTML = 0;
console.log(names);
fun2();
function fun2() {
  amounts.innerHTML = Number(units.innerHTML * quantitys.value);
}
function fun3() {
  if (names.value === 'Ovaltine' && description.value === 'Carton') {
    units.innerHTML = 3000; 
   }else if (names.value === 'Ovaltine' && description.value === 'Tin') {
    
   }

   
}
fun4()
function fun4() {
  fun2()

  amounts.innerHTML = Number(units.innerHTML * quantitys.value);

  if (descriptions.value === 'Liter' && names.value === `Dano 1l`) {
    units.innerHTML = 8000;
  }else if (descriptions.value === 'Liter' && names.value === `Mayor 5l`) {
    units.innerHTML = 8000;
  }else if (descriptions.value === 'Liter' && names.value === `Mayor 3L`) {
    units.innerHTML = 5000;
  }else if (descriptions.value === 'Liter' && names.value === `Mayor 1l`) {
    units.innerHTML = 1600;
  }else if (descriptions.value === 'Liter' && names.value === `0ilio 5l`) {
    units.innerHTML = 9500;
  }else if (descriptions.value === 'Liter' && names.value === `Oilio 1l`) {
    units.innerHTML = 1900;
  }else if (descriptions.value === 'Liter' && names.value === `Active 5l`) {
    units.innerHTML = 8500;
  }else if (descriptions.value === 'Liter' && names.value === `Wity chocolate 2.8l`) {
    units.innerHTML = 5500;
  }else if (descriptions.value === 'Liter' && names.value === `Choco loco chocolate 2.8l`) {
    units.innerHTML = 5500;
  }else if (descriptions.value === 'Liter' && names.value === `Bambi chocolate 2.8l`) {
    units.innerHTML = 5500;
  }else if (descriptions.value === 'Liter' && names.value === `Tartiana chocolate 2.8l`) {
    units.innerHTML = 6000;
  }else if (descriptions.value === 'Liter' && names.value === `Valledor butter 2.7l`) {
    units.innerHTML = 4500;
  }else if (descriptions.value === 'Liter' && names.value === `La croix 5l`) {
    units.innerHTML = 4500;
  }else if (descriptions.value === 'Liter' && names.value === `La croix 1l`) {
    units.innerHTML = 1000;
  }else if (descriptions.value === 'Liter' && names.value === `Baron 5l`) {
    units.innerHTML = 4500;
  }else if (descriptions.value === 'Parket' && names.value === `La croix  sachets`) {
    units.innerHTML = 1200;
  }else if (descriptions.value === 'Parket' && names.value === `Iron sponge red(12)`) {
    units.innerHTML = 500;
  }else if (descriptions.value === 'Parket' && names.value === `Iron sponge net(12)`) {
    units.innerHTML = 1000;
  }else if (descriptions.value === 'Parket' && names.value === `Magic mamy sponge(24)`) {
    units.innerHTML = 8500;
  }else if (descriptions.value === 'carton' && names.value === `Savon mayor`) {
    units.innerHTML = 20000;
  }else if (descriptions.value === 'carton' && names.value === `Savon clean`) {
    units.innerHTML = 21000;
  }else if (descriptions.value === 'carton' && names.value === `Savon uno`) {
    units.innerHTML = 18000;
  }else if (descriptions.value === 'carton' && names.value === `Savon  anti crise`) {
    units.innerHTML = 17000;
  }else if (descriptions.value === 'carton' && names.value === `Savon pakeh`) {
    units.innerHTML = 18500;
  }else if (descriptions.value === 'carton' && names.value === `Savon faco`) {
    units.innerHTML = 8500;
  }else if (descriptions.value === 'Bag' && names.value === `Amigo 50kg`) {
    units.innerHTML = 25000;
  }else if (descriptions.value === 'Bag' && names.value === `Amigo 25kg`) {
    units.innerHTML = 12000;
  }else if (descriptions.value === 'Bag' && names.value === `Amigo 5kg`) {
    units.innerHTML = 2600;
  }else if (descriptions.value === 'Palette' && names.value === `Bavarial bottle beer`) {
    units.innerHTML = 17000;
  }else if (descriptions.value === 'Palette' && names.value === `Skoll beer`) {
    units.innerHTML = 20500;
  }else if (descriptions.value === 'Palette' && names.value === `Bavaria can beer`) {
    units.innerHTML = 17000;
  }
}

function fun5() {
  const notishide = document.getElementById('notis-nhide');
  const popup = document.getElementById('pop-bhide');
  popup.id = '';

  setTimeout(function() {
    if (popup.id === '') {
      popup.id = 'pop-bhide'
    }
  }, 1500)
  if (notishide.id = 'notis-nhide') {
    notishide.id = '';
  }
    notishide.innerHTML = Number(notishide.innerHTML) + 1
  }
