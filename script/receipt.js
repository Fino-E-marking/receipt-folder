let names = document.getElementById('name');
let description = document.getElementById('description');
let quantity = document.getElementById('Quantity');
let unit = document.querySelector('.unit-price');
let amount = document.querySelector('.Amount');
let addD = document.querySelector('.add-d');
let discount = document.getElementById('discount');
let amountpayed = document.getElementById('amount-payed');
let addButton = document.querySelector('.add-to-cart-button');
let deleteButton = document.querySelector('.name-option');
let newreceiptbook = document.querySelector('.add-receipt-button');
names.addEventListener('input', fun1)
description.addEventListener('input', fun1);
names.addEventListener('input', fun2)
description.addEventListener('input', fun2);
quantity.addEventListener('input', fun2);
addD.addEventListener('click', fun14);
amountpayed.addEventListener('input', fun15);
amountpayed.addEventListener('blur', fun16);
amountpayed.addEventListener('mouseleave', fun16)
amountpayed.addEventListener('click', fun17);
addButton.addEventListener('click', fun3);
deleteButton.addEventListener('click', fun4);
addButton.addEventListener('click', fun11);
//newreceiptbook.addEventListener('click', fun14);

function fun2() {
  document.querySelector('.Amount').innerHTML = (quantity.value)*(unit.innerHTML); 
}
function fun14() {
  if (discount.value !== '') {
    document.querySelector('.unit-price').innerHTML = Number(unit.innerHTML) - Number(discount.value);
    fun2();
  }else {
    fun1();
    fun2();
  }
  discount.value = '';
}
function fun15() {
  if (amountpayed.value !== '') {
    document.querySelector('.a-payed').innerHTML = `${amountpayed.value}Frs`;
  }else {
    document.querySelector('.a-payed').innerHTML = `--` 
  }
  
}
function fun16() {
  const balanceholder = document.getElementById('hide-balance');
  const unpayedholder = document.getElementById('hide-unpayed');
  const stotal1 = document.getElementById('sub-total');
  const stotal2 = document.querySelector('.sub-total1-js');  
  const stotal3 = document.getElementById('sub-tota2');  
  const stotal4 = document.getElementById('sub-total3');
  const stotal5 = document.getElementById('sub-tota2');
  const ane = Number(stotal1.innerHTML)  + Number(stotal2.innerHTML) + Number(stotal3.innerHTML) + Number(stotal4.innerHTML) + Number(stotal5.innerHTML);
  const total = ane
  if (amountpayed.value !== '') {
   if (amountpayed.value < total && unpayedholder.classList.contains('hide-unpayed') && balanceholder.classList.contains ('hide-balance')){
      unpayedholder.classList.remove('hide-unpayed');
      const bil = total - Number(amountpayed.value);
      document.querySelector('.unpayed').innerHTML = `${bil}Frs`
      console.log('hello'); 
    }else if (amountpayed.value < total && unpayedholder.classList.contains('hide-unpayed') && !balanceholder.classList.contains ('hide-balance')){
      balanceholder.classList.add('hide-balance');
      unpayedholder.classList.remove('hide-unpayed');
      const bil = total - Number(amountpayed.value);
      document.querySelector('.unpayed').innerHTML = `${bil}Frs`;
      console.log('hello1'); 
    }else if (amountpayed.value > total && unpayedholder.classList.contains('hide-unpayed') && balanceholder.classList.contains ('hide-balance')) {
      balanceholder.classList.remove('hide-balance');
      const bl = Number(amountpayed.value) - total;
      document.querySelector('.balance').innerHTML = `${bl}Frs` ;
      console.log('hello2');
    }else if (amountpayed.value > total && !unpayedholder.classList.contains('hide-unpayed') && balanceholder.classList.contains ('hide-balance')) {
      unpayedholder.classList.add('hide-unpayed')
      balanceholder.classList.remove('hide-balance');
      const bl = Number(amountpayed.value) - total;
      document.querySelector('.balance').innerHTML = `${bl}Frs` ;
      console.log('hello3');
    }else {
      unpayedholder.id = 'hide-unpayed';
      balanceholder.id = 'hide-balance';
      console.log('hello4');
    }
    console.log(unpayedholder.classList.contains('hide-unpayed') && balanceholder.classList.contains ('hide-balance'));
    console.log(balanceholder.classList.contains ('hide-balance'));
    console.log(!unpayedholder.classList.contains('hide-unpayed') && balanceholder.classList.contains ('hide-balance'));
    console.log(!balanceholder.classList.contains ('hide-balance'));
  } 
}

function fun17() {
  const balanceholder = document.getElementById('hide-balance');
  const unpayedholder = document.getElementById('hide-unpayed');
  if (!unpayedholder.classList.contains('hide-unpayed') && balanceholder.classList.contains ('hide-balance')) {
    unpayedholder.classList.add('hide-unpayed');
    balanceholder.classList.add('hide-balance');
    console.log('hello6');
  }
  
}

function fun1() {
  document.querySelector('.Amount').innerHTML = (quantity.value)*(unit.innerHTML);
  if (description.value === 'emty') {
    unit.innerHTML = 0;
  }else if (names.value === `emty`) {
    unit.innerHTML = 0;
  }else if (description.value === 'Piece') {
    switch (description.value === 'Piece') {
      case (names.value === `Mayor 5l`):
        unit.innerHTML = 8000;
        break;
      case (names.value === `Mayor 3L`):
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
        unit.innerHTML = 5500;
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
      case (names.value === `OLA omo 1kg`):
        unit.innerHTML = 1500;
        break;
      case (names.value === `OLA omo halfkg`):
        unit.innerHTML = 750;
        break;
      case (names.value === `Mada omo 1kg`):
        unit.innerHTML = 1500;
        break;
      case (names.value === `Mada omo halfkg`):
        unit.innerHTML = 800;
        break;
      case (names.value === `Ariel omo 1kg`):
        unit.innerHTML = 2000;
        break;
      case (names.value === `Valledor butter 2.7l`):
        unit.innerHTML = 4500;
        break;
      case (names.value === `La croix 5l`):
        unit.innerHTML = 4500;
        break;
      case (names.value === `La croix 1l`):
        unit.innerHTML = 1000;
        break;
      case (names.value === `Baron 5l`):
        unit.innerHTML = 5000;
        break;
        case (names.value === `super morl 10l`):
        unit.innerHTML = 1500;
        break;
  
      default: unit.innerHTML = 0;
        break;
    } 
  }else if (description.value === 'Bag') {
    switch (description.value === 'Bag') {
      case (names.value === `Amigo 5kg`):
        unit.innerHTML = 2500;
        break;
      case (names.value === `Amigo 25kg`):
        unit.innerHTML = 12000;
        break;
      case (names.value === `Amigo 50kg`):
        unit.innerHTML = 24000;
        break;
      case (names.value === `Champion rice 25kg`):
        unit.innerHTML = 13500;
        break;
      case (names.value === `Champion rice 50kg`):
        unit.innerHTML = 26000;
        break;
      case (names.value === `Habiba 25kg`):
        unit.innerHTML = 13000;
        break;
      case (names.value === `Selecter 25kg`):
        unit.innerHTML = 13000;
        break;
      case (names.value === `OLA omo 1kg`):
      unit.innerHTML = 12000;
      break;
      case (names.value === `OLA omo halfkg`):
        unit.innerHTML = 12000;
        break;
      case (names.value === `Mada omo 1kg`):
        unit.innerHTML = 13000;
        break;
      case (names.value === `Mada omo halfkg`):
        unit.innerHTML = 13000;
        break;
      
      default:unit.innerHTML = 0;
        break;
    }
  }else if (description.value === 'Carton') {
    switch (description.value === 'Carton') {

      case (names.value === `Savon mayor`):
        unit.innerHTML = 20000;
        break;
      case (names.value === `Savon clean`):
        unit.innerHTML = 21000;
        break;
      case (names.value === `Savon uno`):
        unit.innerHTML = 18500;
        break;
      case (names.value === `Savon  anti crise`):
        unit.innerHTML = 15000;
        break;
      case (names.value === `Savon pakeh`):
        unit.innerHTML = 17500;
        break;
      case (names.value === `Savon faco`):
        unit.innerHTML = 17500;
        break;

      default:unit.innerHTML = 0;
        break;
    }
  }else if (description.value === 'Parket') {
    switch (description.value === 'Parket') {
      case (names.value === `La croix  sachets`):
        unit.innerHTML = 1200;
        break;
      case (names.value === `Trophe can(big)`):
        unit.innerHTML = 9500;
        break;
      case (names.value === `Trophe can(small)`):
        unit.innerHTML = 7000;
        break;
      case (names.value === `Hiro (big)`):
        unit.innerHTML = 9500;
        break;
      case (names.value === `Hiro (small)`):
        unit.innerHTML = 7000;
        break;
      case (names.value === `Barvaria bottle`):
        unit.innerHTML = 16500;
        break;
      case (names.value === `Barvaria can(big)`):
        unit.innerHTML = 17000;
        break;
      case (names.value === `Trophe can(small)`):
        unit.innerHTML = 7000;
        break;
      case (names.value === `Hiro (big)`):
        unit.innerHTML = 9500;
        break;
      case (names.value === `Hiro (small)`):
        unit.innerHTML = 7000;
        break;
      case (names.value === `Barvaria bottle`):
        unit.innerHTML = 16500;
        break;
      case (names.value === `Malter guiness`):
        unit.innerHTML = 7500;
        break;
      case (names.value === `Power malt`):
        unit.innerHTML = 14000;
        break;
      case (names.value === `Vapur`):
        unit.innerHTML = 14500;
        break;
      case (names.value === `Bullet can`):
        unit.innerHTML = 14000;
        break;
      case (names.value === `Bullet sachet`):
        unit.innerHTML = 1700;
        break;
        case (names.value === `Henieken (1stclass)`):
        unit.innerHTML = 19000;
        break;
      case (names.value === `Henieken (2ndclass)`):
        unit.innerHTML = 17500;
        break;
      case (names.value === `Booter`):
        unit.innerHTML = 18000;
        break;
      case (names.value === `3X energy drink`):
        unit.innerHTML = 15000;
        break;
      case (names.value === `super morl 1l`):
        unit.innerHTML = 1500;
        break;
        case (names.value === `Skoll`):
        unit.innerHTML = 21000;
        break;
    
      default: unit.innerHTML = 0;
        break;
    }
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
  const R1 = document.querySelector('.R1');
  const R2 = document.querySelector('.R2');
  const R3 = document.querySelector('.R3');
  const R4 = document.querySelector('.R4');
  const R5 = document.querySelector('.R5');

  if (cusName.value !== '') {
    rCusname.innerHTML = cusName.value;
    if (R1.innerHTML === '5' && R2.innerHTML <= 5) {
      document.querySelector('.R-cus-name1').innerHTML = rCusname.innerHTML;
    }
    if (R2.innerHTML === '5' && R3.innerHTML <= 5) {
      document.querySelector('.R-cus-name2').innerHTML = rCusname.innerHTML;
    }
    if (R3.innerHTML === '5' && R4.innerHTML <= 5) {
      document.querySelector('.R-cus-name3').innerHTML = rCusname.innerHTML;
    }
    if (R4.innerHTML === '5' && R5.innerHTML <= 5) {
      document.querySelector('.R-cus-name4').innerHTML = rCusname.innerHTML;
    }
  }
  if (cusTel.value !== '') {
    rCusnum.innerHTML = cusTel.value;
    if (R1.innerHTML === '5' && R2.innerHTML <= 5) {
      document.querySelector('.cus-num1').innerHTML = rCusnum.innerHTML;
    }
    if (R2.innerHTML === '5' && R3.innerHTML <= 5) {
      document.querySelector('.cus-num2').innerHTML = rCusnum.innerHTML;
    }
    if (R3.innerHTML === '5' && R4.innerHTML <= 5) {
      document.querySelector('.cus-num3').innerHTML = rCusnum.innerHTML;
    }
    if (R4.innerHTML === '5' && R5.innerHTML <= 5) {
      document.querySelector('.cus-num4').innerHTML = rCusnum.innerHTML;
    }
  }
  if (serlername.value !== '') {
    rSellername.innerHTML = serlername.value;
    if (R1.innerHTML === '5' && R2.innerHTML <= 5) {
      document.querySelector('.p-seller1').innerHTML = rSellername.innerHTML;
    }
    if (R2.innerHTML === '5' && R3.innerHTML <= 5) {
      document.querySelector('.p-seller2').innerHTML = rSellername.innerHTML;
    }
    if (R3.innerHTML === '5' && R4.innerHTML <= 5) {
      document.querySelector('.p-seller3').innerHTML = rSellername.innerHTML;
    }
    if (R4.innerHTML === '5' && R5.innerHTML <= 5) {
      document.querySelector('.p-seller4').innerHTML = rSellername.innerHTML;
    }
  }
  dateC.innerHTML = Date(Date) ;
  if (R1.innerHTML === '5' && R2.innerHTML <= 5) {
    document.querySelector('.current-date1').innerHTML = Date(Date);
  }
  if (R2.innerHTML === '5' && R3.innerHTML <= 5) {
    document.querySelector('.current-date2').innerHTML = Date(Date);
  }
  if (R3.innerHTML === '5' && R4.innerHTML <= 5) {
    document.querySelector('.current-date3').innerHTML = Date(Date);
  }
  if (R4.innerHTML === '5' && R5.innerHTML <= 5) {
    document.querySelector('.current-date4').innerHTML = Date(Date);
  } 
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

let receiptholderb = JSON.parse(localStorage.getItem('storenrpt'));

if (!receiptholderb) {
  receiptholderb = [];
}

function fun15storage() {
  localStorage.setItem('storenrpt' , JSON.stringify(receiptholderb));
}

const receiptholder = [];
const receiptholder1 = [];
const receiptholder2 = [];
const receiptholder3 = [];
const receiptholder4 = [];
const receiptholder5 = [];
groupingitmem();
function groupingitmem() {
  const serlername = document.getElementById('serler-name');
  const R1 = document.querySelector('.R1');
  const R2 = document.querySelector('.R2');
  const R3 = document.querySelector('.R3');
  const R4 = document.querySelector('.R4');
  const R5 = document.querySelector('.R5');
  
  if (R1.innerHTML <= 5 ) {
    let htmlholder1 = '';
    for (let i = 0; i < receiptholder.length; i++) {
      document.querySelector('.R1').innerHTML = (receiptholder.length);
      const itemsObject = receiptholder[i];
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
        <div class="dt-a">
          <button onclick="
            receiptholder.splice(${i}, 1);
            groupingitmem();
            fun12();
            fun13();
            fun16();
          "class="delete-action">delete</button>
        </div>
      `;
      htmlholder1 += htmlF;
        document.querySelector('.rb-body').innerHTML = htmlholder1;
    }
  }
  if (R1.innerHTML === '5' && R2.innerHTML <= 5) {
    let display = document.querySelector('.A400');
      let htmlholder1 = '';
      for (let i = 0; i < receiptholder1.length; i++) {
        document.querySelector('.R2').innerHTML = receiptholder1.length;
        const itemsObject1 = receiptholder1[i];
        const { itemname, itemdescription, itemquantity, itemunit, itemamount } = itemsObject1;
        const htmlF1 = `
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
          <div class="dt-a">
            <button onclick="
              receiptholder1.splice(${i}, 1)
              groupingitmem();
              fun12();
              fun13();
              fun16();
            "class="delete-action">delete</button>
          </div>
        `;
        htmlholder1 += htmlF1;
          document.querySelector('.receid00001-js').innerHTML = htmlholder1; 
      }
    
  }
  if (R2.innerHTML === '5' && R3.innerHTML <= 5) {
    let htmlholder2 = '';
    for (let i = 0; i < receiptholder2.length; i++) {
      document.querySelector('.R3').innerHTML = receiptholder2.length;
      const itemsObject2 = receiptholder2[i];
      const { itemname, itemdescription, itemquantity, itemunit, itemamount } = itemsObject2;
      const htmlF2 = `
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
        <div class="dt-a">
          <button onclick="
            receiptholder2.splice(${i}, 1)
            groupingitmem();
            fun12();
            fun13();
            fun16();
          "class="delete-action">delete</button>
        </div>
      `;
      htmlholder2 += htmlF2;
        document.querySelector('.receid00012-js').innerHTML = htmlholder2;
          
    }
  }
  if (R3.innerHTML === '5' && R4.innerHTML <= 5) {
    let htmlholder3 = '';
    for (let i = 0; i < receiptholder3.length; i++) {
      document.querySelector('.R4').innerHTML = receiptholder3.length;
      const itemsObject3 = receiptholder3[i];
      const { itemname, itemdescription, itemquantity, itemunit, itemamount } = itemsObject3;
      const htmlF3 = `
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
        <div class="dt-a">
          <button onclick="
            receiptholder3.splice(${i}, 1)
            groupingitmem();
            fun12();
            fun13();
            fun16();
          "class="delete-action">delete</button>
        </div>
      `;
      htmlholder3 += htmlF3;
        document.querySelector('.receid00113-js').innerHTML = htmlholder3;
          
    }
  }
  if (R4.innerHTML === '5' && R5.innerHTML <= 5) {
    let htmlholder4 = '';
    for (let i = 0; i < receiptholder4.length; i++) {
      document.querySelector('.R5').innerHTML = receiptholder4.length;
      const itemsObject4 = receiptholder4[i];
      const { itemname, itemdescription, itemquantity, itemunit, itemamount } = itemsObject4;
      const htmlF4 = `
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
        <div class="dt-a">
          <button onclick="
            receiptholder4.splice(${i}, 1)
            groupingitmem();
            fun12();
            fun13();
            fun16();
          "class="delete-action">delete</button>
        </div>
      `;
      htmlholder4 += htmlF4;
        document.querySelector('.receid01114-js').innerHTML = htmlholder4;
          
    }
  }
}


fun12();
function fun12() {
  const R1 = document.querySelector('.R1');
  const R2 = document.querySelector('.R2');
  const R3 = document.querySelector('.R3');
  const R4 = document.querySelector('.R4');
  const R5 = document.querySelector('.R5');
  
  if (R1.innerHTML <= 5) {
    let totalpovider = 0;
    for (let i = 0; i < receiptholder.length; i++) {
      const totalObject = receiptholder[i];
      const { itemamount } = totalObject;
      totalpovider += Number(itemamount);
      document.getElementById('sub-total').innerHTML = totalpovider;
    }
  }
  if (R1.innerHTML === '5' && R2.innerHTML <= 5) {
    let totalpovider1 = 0;
    for (let i = 0; i < receiptholder1.length; i++) {
      const totalObject1 = receiptholder1[i];
      const { itemamount } = totalObject1;
      totalpovider1 += Number(itemamount);
      document.querySelector('.sub-total1-js').innerHTML = totalpovider1;
    }
  }
  if (R2.innerHTML === '5' && R3.innerHTML <= 5) {
    let totalpovider2 = 0;
    for (let i = 0; i < receiptholder2.length; i++) {
      const totalObject2 = receiptholder2[i];
      const { itemamount } = totalObject2;
      totalpovider2 += Number(itemamount);
      document.getElementById('sub-tota2').innerHTML = totalpovider2;
    }
  }
  if (R3.innerHTML === '5' && R4.innerHTML <= 5) {
    let totalpovider3 = 0;
    for (let i = 0; i < receiptholder3.length; i++) {
      const totalObject3 = receiptholder3[i];
      const { itemamount } = totalObject3;
      totalpovider3 += Number(itemamount);
      document.getElementById('sub-total3').innerHTML = totalpovider3;
    }
  }
  if (R4.innerHTML === '5' && R5.innerHTML <= 5) {
    let totalpovider4 = 0;
    for (let i = 0; i < receiptholder4.length; i++) {
      const totalObject4 = receiptholder4[i];
      const { itemamount } = totalObject4;
      totalpovider4 += Number(itemamount);
      document.getElementById('sub-tota4').innerHTML = totalpovider4;
    }
  }
  
}


/*
const nextreceipt = [];
fun13();
function fun13() {
  let nextreceipthtml = '';
  for (let i = 0; i < nextreceipt.length; i++) {
    const nextreceiptelement = nextreceipt[i];
    const nextRhtml = `
      <div class="reciept-book">
        <div class="reciept-header">
          <div class="rt-1">
            <p>E PROVISION</p>
          </div>
          <div class="rt-2">
            <p>Order on:</p>
            <p class="current-date"></p>
          </div>
          <div class="rt-3">
            <P>Ndop Main-Market</P>
            <p>shed 64</p>
          </div>
          <div class="rt-4">
            <p>Customer Name:</p>
            <p class="R-cus-name">zxcvhjjhgfdxcvbnhvgcf</p>
          </div>
          <div class="rt-5">
            <p>Tel: 683404522</p>
          </div>
          <div class="rt-6">
            <p>Customer Tel:</p>
            <p class="cus-num">76542123456</p>
          </div>
          <div class="r-seller">
            <p>Seller:</p>
            <p class="p-seller">Iliasu</p>
          </div>
        </div>
        <div class="reciept-body">
          <div class="rb-header">
            <div>
              <p>Item Name</p>
            </div>
            <div>
              <p>Description</p>
            </div>
            <div>
              <p>Quantity</p>
            </div>
            <div>
              <p>Unit</p>
            </div>
            <div>
              <p>Amount</p>
            </div>
            <div>
              <p>option</p>
            </div> 
          </div>
          <div class="rb-body rb-body2">
          <div>
              <p>Ovaltine 400g</p>
            </div>
            <div>
              <p>tin</p>
            </div>
            <div>
              <p>10</p>
            </div>
            <div>
              <p>2500F</p>
            </div>
            <div>
              <p>2500000F</p>
            </div> 
            <div class="dt-a">
              <button class="delete-action">delete</button>
            </div>
          </div>
        </div>
        <div class="total-holder">
          <p class="t-text2">Thanks for shoping at E Provision</p>
          <p class="t-text">Total</p>
          <p class="total-price sub-total2" id="sub-total ">20000F</p>
        </div>
        <div>
          <p>No refund of money if good is taken in good condition.</p>
          <div class="signature-section">
            <p>Manager Signature: ...............................</p>
            <p>Customer Signature: ................................</p>
          </div>
        </div>
      </div>
    `;
    nextreceipthtml += nextRhtml;
    document.querySelector('.Newr-js').innerHTML = nextreceipthtml;
    console.log(i);
    const display = document.querySelector('.A400');
    const ordercontain = document.querySelectorAll('.rb-body');
    ordercontain.forEach((value, index) => {
      if (index === 0) {
        display.innerHTML = 'div-1';
      }
      if (index === 1) {
        display.classList.add('div-1');
       ordercontain[1].id = '0000000001' 
      }
      if (index === 2) {
        display.innerHTML = 'div-2';
        display.classList.add('div-2');
       ordercontain[2].id = '0000000012' 
      }
      /*if (index === 3) {
        display.innerHTML = 'div-3';
       ordercontain[3].id = '0000000113' 
      }
      if (index === 4) {
        display.innerHTML = 'div-4';
       ordercontain[4].id = '0000001114' 
      }
      if (index === 5) {
        display.innerHTML = 'div-5';
       ordercontain[5].id = '0000011115' 
      }
      
      

    });
    
    console.log(ordercontain.classList);
    document.querySelector('.C400').innerHTML = nextreceipt.length
  }
}

function fun14() {
  const nextRhtml2 = `
      <div class="reciept-book n2">
        <div class="reciept-header">
          <div class="rt-1">
            <p>E PROVISION</p>
          </div>
          <div class="rt-2">
            <p>Order on:</p>
            <p class="current-date"></p>
          </div>
          <div class="rt-3">
            <P>Ndop Main-Market</P>
            <p>shed 64</p>
          </div>
          <div class="rt-4">
            <p>Customer Name:</p>
            <p class="R-cus-name">zxcvhjjhgfdxcvbnhvgcf</p>
          </div>
          <div class="rt-5">
            <p>Tel: 683404522</p>
          </div>
          <div class="rt-6">
            <p>Customer Tel:</p>
            <p class="cus-num">76542123456</p>
          </div>
          <div class="r-seller">
            <p>Seller:</p>
            <p class="p-seller">Iliasu</p>
          </div>
        </div>
        <div class="reciept-body">
          <div class="rb-header">
            <div>
              <p>Item Name</p>
            </div>
            <div>
              <p>Description</p>
            </div>
            <div>
              <p>Quantity</p>
            </div>
            <div>
              <p>Unit</p>
            </div>
            <div>
              <p>Amount</p>
            </div>
            <div>
              <p>option</p>
            </div> 
          </div>
          <div class="rb-body">
          <div>
              <p>Ovaltine 400g</p>
            </div>
            <div>
              <p>tin</p>
            </div>
            <div>
              <p>10</p>
            </div>
            <div>
              <p>2500F</p>
            </div>
            <div>
              <p>2500000F</p>
            </div> 
            <div class="dt-a">
              <button class="delete-action">delete</button>
            </div>
          </div>
        </div>
        <div class="total-holder">
          <p class="t-text2">Thanks for shoping at E Provision</p>
          <p class="t-text">Total</p>
          <p class="total-price" id="sub-total">20000F</p>
        </div>
        <div>
          <p>No refund of money if good is taken in good condition.</p>
          <div class="signature-section">
            <p>Manager Signature: ...............................</p>
            <p>Customer Signature: ................................</p>
          </div>
        </div>
      </div>
    `;
    let m3 = nextRhtml2;
    nextreceipt.push(m3);
    fun13();
      groupingitmem();
      fun12();
      fun15storage();
  
} */


function fun11() {
  const R1 = document.querySelector('.R1');
  const R2 = document.querySelector('.R2');
  const R3 = document.querySelector('.R3');
  const R4 = document.querySelector('.R4');
  const R5 = document.querySelector('.R5');
  const display = document.querySelector('.A400');
  const serlername3 = document.getElementById('serler-name');
  let itemname = names.value;
  let itemdescription = description.value;
  let itemquantity = quantity.value;
  let itemunit = unit.innerHTML;
  let itemamount = amount.innerHTML;
  
  
  if (R1.innerHTML < 5) {

    let matchingitems;

    receiptholder.forEach(item => {
      if (itemname === item.itemname && itemdescription === item.itemdescription) {
        matchingitems = item;
      }
    });
    if (matchingitems) {
      matchingitems.itemquantity = Number(matchingitems.itemquantity)  + Number(itemquantity);
      matchingitems.itemamount = Number(matchingitems.itemquantity)*Number(matchingitems.itemunit);
    }else {
      receiptholder.push({
        itemname,
        itemdescription,
        itemquantity,
        itemunit,
        itemamount
      })
    }
    
    groupingitmem();
    fun12();
  }else if (R1.innerHTML === '5' && R2.innerHTML < 5) {
    let matchingitems1;

    receiptholder1.forEach(item => {
      if (itemname === item.itemname && itemdescription === item.itemdescription) {
        matchingitems1 = item;
      }
    });
   if (matchingitems1) {
      matchingitems1.itemquantity = Number(matchingitems1.itemquantity)  + Number(itemquantity);
      matchingitems1.itemamount = Number(matchingitems1.itemquantity)*Number(matchingitems1.itemunit);
    }else {
      receiptholder1.push({
        itemname,
        itemdescription,
        itemquantity,
        itemunit,
        itemamount
      })
    }
    
    groupingitmem();
    fun12();
  }else if (R2.innerHTML === '5' && R3.innerHTML < 5) {
    let matchingitems2;

    receiptholder2.forEach(item => {
      if (itemname === item.itemname && itemdescription === item.itemdescription) {
        matchingitems2 = item;
      }
    });
   if (matchingitems2) {
      matchingitems2.itemquantity = Number(matchingitems2.itemquantity)  + Number(itemquantity);
      matchingitems2.itemamount = Number(matchingitems2.itemquantity)*Number(matchingitems2.itemunit);
    }else {
      receiptholder2.push({
        itemname,
        itemdescription,
        itemquantity,
        itemunit,
        itemamount
      })
    }
    
    groupingitmem();
    fun12();
  }else if (R3.innerHTML === '5' && R4.innerHTML < 5) {
    let matchingitems3;

    receiptholder3.forEach(item => {
      if (itemname === item.itemname && itemdescription === item.itemdescription) {
        matchingitems3 = item;
      }
    });
   if (matchingitems3) {
      matchingitems3.itemquantity = Number(matchingitems3.itemquantity)  + Number(itemquantity);
      matchingitems3.itemamount = Number(matchingitems3.itemquantity)*Number(matchingitems3.itemunit);
    }else {
      receiptholder3.push({
        itemname,
        itemdescription,
        itemquantity,
        itemunit,
        itemamount
      })
    }
    
    groupingitmem();
    fun12();
  }else if (R4.innerHTML === '5' && R5.innerHTML < 5) {
    let matchingitems4;

    receiptholder4.forEach(item => {
      if (itemname === item.itemname && itemdescription === item.itemdescription) {
        matchingitems4 = item;
      }
    });
   if (matchingitems4) {
      matchingitems4.itemquantity = Number(matchingitems4.itemquantity)  + Number(itemquantity);
      matchingitems4.itemamount = Number(matchingitems4.itemquantity)*Number(matchingitems4.itemunit);
    }else {
      receiptholder4.push({
        itemname,
        itemdescription,
        itemquantity,
        itemunit,
        itemamount
      })
    }
    
    groupingitmem();
    fun12();
  }

  names.value = 'emty';
  description.value = 'emty';
  quantity.value =  0;
  unit.innerHTML = 0;
  document.querySelector('.Amount').innerHTML = (quantity.value)*(unit.innerHTML);
  discount.value = '';
  fun13()
  fun16();
}
fun13()
function fun13() {
  const R1 = document.querySelector('.R1');
  const R2 = document.querySelector('.R2');
  const R3 = document.querySelector('.R3');
  const R4 = document.querySelector('.R4');
  const R5 = document.querySelector('.R5');
  const stotal1 = document.getElementById('sub-total');
  const stotal2 = document.querySelector('.sub-total1-js');  
  const stotal3 = document.getElementById('sub-tota2');  
  const stotal4 = document.getElementById('sub-total3');
  const stotal5 = document.getElementById('sub-tota2');

  const mbc = (Number(R1.innerHTML) + Number(R2.innerHTML) + Number(R3.innerHTML) + Number(R4.innerHTML) + Number(R5.innerHTML)) ;
  if (mbc >= 10) {
    document.querySelector('.n-items').innerHTML = mbc;
  }else {
    document.querySelector('.n-items').innerHTML = `0${mbc}`;
  }
  
  const ane = Number(stotal1.innerHTML)  + Number(stotal2.innerHTML) + Number(stotal3.innerHTML) + Number(stotal4.innerHTML) + Number(stotal5.innerHTML);
   document.querySelector('.g-total').innerHTML = `${ane}Frs`;

}
  
  