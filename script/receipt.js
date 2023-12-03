let names = document.getElementById('name');
let description = document.getElementById('description');
let quantity = document.getElementById('Quantity');
let unit = document.querySelector('.unit-price');
let amount = document.querySelector('.Amount');
let addButton = document.querySelector('.add-to-cart-button');
let deleteButton = document.querySelector('.name-option');
let description2Button = document.querySelector('.description2-holder');
let Quantity2Button = document.querySelector('.quantiy2-holder');
let quantity2 = document.getElementById('Quantity2');
let d2Cancel = document.querySelector('.d-cancel-button');
let description2 = document.getElementById('description2');

description.addEventListener('input', fun1);
quantity.addEventListener('input', fun2);
addButton.addEventListener('click', fun3);
deleteButton.addEventListener('click', fun4);
description2Button.addEventListener('click', fun5);
d2Cancel.addEventListener('click', fun6);
description2.addEventListener('input', fun7);
Quantity2Button.addEventListener('click', fun8)
quantity2.addEventListener('input', fun9);
quantity2.addEventListener('mouseleave', fun10);
addButton.addEventListener('click', fun11);
console.log(document.querySelector('.Amount').innerHTML);

function fun2() {
  document.querySelector('.Amount').innerHTML = (quantity.value)*(unit.innerHTML); 
}
function fun1() {
  document.querySelector('.Amount').innerHTML = (quantity.value)*(unit.innerHTML);
  switch (description.value === 'Liter') {
    case (names.value === `Mayor 5l`):
      unit.innerHTML = 8000;
      break;
    case (names.value === `Mayor 3l`):
      unit.innerHTML = 5000;
      break;
    case (names.value === `Mayor 1l`):
      unit.innerHTML = 1600;
      break;
    case (names.value === `Oilio 1l`):
      unit.innerHTML = 1900;
      break;
    case (names.value === `Oilio 5l`):
      unit.innerHTML = 9500;
      break;
    case (names.value === `Active 5l`):
      unit.innerHTML = 8500;
      break;
    case (names.value === `Wity chocolate 2.8l`):
      unit.innerHTML = 55000;
      break;
    case (names.value === `Choco loco chocolate 2.8l`):
      unit.innerHTML = 5500;
      break;
    case (names.value === `Bambi chocolate 2.8l`):
      unit.innerHTML = 5500;
      break;
    case (names.value === `Tartiana chocolate 2.8l`):
      unit.innerHTML = 6000;
      break;


    default:
      break;
  }
}

function fun3() {
  const cusName = document.getElementById('cus-name');
  const rCusname = document.querySelector('.R-cus-name');
  const cusTel = document.getElementById('cus-tel');
  const rCusnum = document.querySelector('.cus-num');
  const serlername = document.getElementById('serler-name');
  const rSellername = document.querySelector('.p-seller');
  const dateC = document.querySelector('.current-date');

  if (cusName.value !== '') {
    rCusname.innerHTML = cusName.value;
  }
  if (cusTel.value !== '') {
    rCusnum.innerHTML = cusTel.value;
  }
  if (serlername.value !== '') {
    rSellername.innerHTML = serlername.value;
  }
  dateC.innerHTML = Date(Date) ; 
}

function fun4() {
  const optionButtons = document.querySelector('.option-button');
  if (optionButtons.id === 'option-btn') {
    optionButtons.id = '';
  }else{
    optionButtons.id = 'option-btn';
  }
  console.log(optionButtons.classList);
}
let d2Horder = document.querySelector('.dstn-holder');
console.log(d2Horder.classList);
function fun5() {
      d2Horder.classList.remove('dstn-holder');
    console.log(d2Horder.classList);
}
function fun6() {
  d2Horder.classList.add('dstn-holder');
  setTimeout(function() {
    d2Horder.classList.add('dstn-holder');
  }, 200)
}
function fun7() {
  document.querySelector('.description2-text').innerHTML = description2.value;
}

function fun8() {
  quantity2.id = '';
}
function fun9() {
  document.querySelector('.quantiy2-text').innerHTML = quantity2.value;
  console.log('hello3');
}
function fun10() {
  quantity2.id = 'Quantity2';
  console.log('hello');
}

const receiptholder = []
groupingitmem();
function groupingitmem() {
  let htmlholder = '';
  receiptholder.forEach((recieptitems, index) => {
    const itemsObject = receiptholder[index];
    const { itemname, itemdescription, itemquantity, itemunit, itemamount } = itemsObject;
    const htmlF = `
      <div class="name-option abc">
        ${itemname}
        <div class="option-button" id="option-btn">
          <button class="delete-button">delete</button>
          <button class="return-button">cancel</button>
        </div>
      </div>
      <div class="description2-holder abd">
        <p class="description2-text">${itemdescription}</p>
        <div class="description2-input dstn-holder" >
          <select id="description2" >
            <option value="emty">emty</option>
            <option value="Carton">Carton</option>
            <option value="Palette">Palette</option>
            <option value="Bag">Bag</option>
            <option value="Parket">Parket</option>
            <option value="Tin">Tin</option>
            <option value="Liter">Liter</option>
            <option value="sachets">sachets</option>
          </select>
          <button class="d-cancel-button">OK</button>
        </div>
      </div>
      <div class="quantiy2-holder abd">
        <p class="quantiy2-text" >${itemquantity}</p>
          <input type="number" min="0" id="Quantity2" class="qnty2">
      </div>
      <div class="abd unb">
        ${itemunit}
      </div>
      <div class="abd una">
        ${itemamount}
      </div>
    `;
    htmlholder += htmlF;
    document.querySelector('.rb-body').innerHTML = htmlholder;

    document.querySelectorAll('.name-option')
      .forEach((optionholder, index) => {
        optionholder
        .addEventListener('click',() => {
          fun4();
        })
      })

    document.querySelectorAll('.quantiy2-holder')
      .forEach((quantiy2holderA, index) => {
        quantiy2holderA
        .addEventListener('click',() => {
          fun8();
        })
    })
    document.querySelectorAll('.Quantity2')
      .forEach((Quantity2B, index) => {
        Quantity2B
        .addEventListener('input',() => {
          fun9();
        })
      })
    document.querySelectorAll('.Quantity2')
      .forEach((Quantity2B, index) => {
        Quantity2B
        .addEventListener('mouseleave',() => {
          fun10();
        })
      })

  })
}

function fun11() {
  const itemname = names.value;
  const itemdescription = description.value;
  const itemquantity = quantity.value;
  const itemunit = unit.innerHTML;
  const itemamount = amount.innerHTML;
  
  receiptholder.push({
    itemname,
    itemdescription,
    itemquantity,
    itemunit,
    itemamount
  })
  groupingitmem();
  names.value = 'emty';
  description.value = 'emty';
  quantity.value =  0;
  unit.innerHTML = 0;
  document.querySelector('.Amount').innerHTML = (quantity.value)*(unit.innerHTML);
  console.log(receiptholder);
}