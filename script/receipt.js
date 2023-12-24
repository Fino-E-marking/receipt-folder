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
let reciept2 = document.getElementById('reciept-bd-00001');
let reciept3 = document.getElementById('reciept-bd-00012');
let reciept4 = document.getElementById('reciept-bd-00113');
let reciept5 = document.getElementById('reciept-bd-01114');
names.addEventListener('input', fun1);
description.addEventListener('input', fun1);
names.addEventListener('input', fun2)
description.addEventListener('input', fun2);
quantity.addEventListener('input', fun2);
addD.addEventListener('click', fun10);
amountpayed.addEventListener('input', fun15);
amountpayed.addEventListener('blur', fun16);
//amountpayed.addEventListener('mouseleave', fun16);
amountpayed.addEventListener('click', fun17);
addButton.addEventListener('click', fun3);
deleteButton.addEventListener('click', fun4);
addButton.addEventListener('click', fun11);
newreceiptbook.addEventListener('click', fun14);
addButton.addEventListener('click', fun16);

function fun2() {
  document.querySelector('.Amount').innerHTML = (quantity.value)*(unit.innerHTML); 
}
function fun10() {
  const displayalert = document.querySelector('.alerat-bd');
  if (unit.innerHTML !== '0' && discount.value !== '' && names.value !== '') {
    if (discount.value !== '') {
      if (names.value !== '') {
        document.querySelector('.unit-price').innerHTML = Number(unit.innerHTML) - Number(discount.value);
        fun2();
        discount.value = '';
        displayalert.innerText = 'Discount sucessful';
        displayalert.classList.remove('hide-alert-js');
        setTimeout(() => {
          displayalert.classList.add('hide-alert-js');
        }, 1000)
      }
    }
  }else {
    fun1();
    fun2();
  }
}
function fun15() {
  const balanceholder = document.getElementById('hide-balance');
  const unpayedholder = document.getElementById('hide-unpayed');
  if (amountpayed.value !== '') {
    document.querySelector('.a-payed').innerHTML = `${amountpayed.value}Frs`;
    unpayedholder.id = 'hide-unpayed';
    balanceholder.id = 'hide-balance';
  }else {
    document.querySelector('.a-payed').innerHTML = `0Frs`
    unpayedholder.id = 'hide-unpayed';
    balanceholder.id = 'hide-balance'; 
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
  const R1 = document.querySelector('.R1');
  const R2 = document.querySelector('.R2');
  const R3 = document.querySelector('.R3');
  const R4 = document.querySelector('.R4');
  const R5 = document.querySelector('.R5');
  const ane = Number(stotal1.innerHTML)  + Number(stotal2.innerHTML) + Number(stotal3.innerHTML) + Number(stotal4.innerHTML) + Number(stotal5.innerHTML);
  let total = ane
  const ane1 = Number(stotal1.innerHTML);
    const ane2 = Number(stotal1.innerHTML) + Number(stotal2.innerHTML);
    const ane3 = Number(stotal1.innerHTML) + Number(stotal2.innerHTML) + Number(stotal3.innerHTML);
    const ane4 = Number(stotal1.innerHTML) + Number(stotal2.innerHTML) + Number(stotal3.innerHTML) + Number(stotal4.innerHTML);
  if (reciept2.classList.contains('hide-rcpt2') && reciept3.classList.contains('hide-rcpt3') && reciept4.classList.contains('hide-rcpt4') && reciept5.classList.contains('hide-rcpt5') && R1.innerHTML < 10 ) {
    total = ane1;
  }else if (!reciept2.classList.contains('hide-rcpt2') && reciept3.classList.contains('hide-rcpt3') && reciept4.classList.contains('hide-rcpt4') && reciept5.classList.contains('hide-rcpt5')) {
    total = ane2;
  }else if (!reciept2.classList.contains('hide-rcpt2') && !reciept3.classList.contains('hide-rcpt3') && reciept4.classList.contains('hide-rcpt4') && reciept5.classList.contains('hide-rcpt5')) {
    total = ane3;
  }else if (!reciept2.classList.contains('hide-rcpt2') && !reciept3.classList.contains('hide-rcpt3') && !reciept4.classList.contains('hide-rcpt4') && reciept5.classList.contains('hide-rcpt5')) {
    total = ane4;
  }else{
    total = ane;
  }
  
  if (amountpayed.value !== '') {
   if (amountpayed.value < total && unpayedholder.classList.contains('hide-unpayed') && balanceholder.classList.contains ('hide-balance')){
      unpayedholder.classList.remove('hide-unpayed');
      balanceholder.innerHTML = '';
      const bil = total - Number(amountpayed.value);
      document.querySelector('.unpayed').innerHTML = `${bil}Frs`
      console.log('hello'); 
    }else if (amountpayed.value < total && unpayedholder.classList.contains('hide-unpayed') && !balanceholder.classList.contains ('hide-balance')){
      balanceholder.classList.add('hide-balance');
      balanceholder.innerHTML = '';
      unpayedholder.classList.remove('hide-unpayed');
      const bil = total - Number(amountpayed.value);
      document.querySelector('.unpayed').innerHTML = `${bil}Frs`;
      console.log('hello1'); 
    }else if (amountpayed.value > total && unpayedholder.classList.contains('hide-unpayed') && balanceholder.classList.contains ('hide-balance')) {
      balanceholder.classList.remove('hide-balance');
      unpayedholder.innerHTML = '';
      const bl = Number(amountpayed.value) - total;
      document.querySelector('.balance').innerHTML = `${bl}Frs` ;
      console.log('hello2');
    }else if (amountpayed.value > total && !unpayedholder.classList.contains('hide-unpayed') && balanceholder.classList.contains ('hide-balance')) {
      unpayedholder.classList.add('hide-unpayed')
      unpayedholder.innerHTML = '';
      balanceholder.classList.remove('hide-balance');
      const bl = Number(amountpayed.value) - total;
      document.querySelector('.balance').innerHTML = `${bl}Frs` ;
      console.log('hello3');
    } else {
      unpayedholder.classList.add('hide-unpayed')
      balanceholder.classList.add('hide-balance');
      unpayedholder.innerHTML = '';
      balanceholder.innerHTML = '';
      console.log('hello4');
    }
  }else {
    unpayedholder.classList.add('hide-unpayed')
    balanceholder.classList.add('hide-balance');
    unpayedholder.innerHTML = '';
    balanceholder.innerHTML = '';
  }

  const displayalert = document.querySelector('.alerat-bd');
  if (reciept2.classList.contains('hide-rcpt2') && reciept3.classList.contains('hide-rcpt3') && reciept4.classList.contains('hide-rcpt4') && reciept5.classList.contains('hide-rcpt5') && R1.innerHTML <= 10 ) {
    displayalert.innerText = 'Added to Receipt-1';
    displayalert.classList.remove('hide-alert-js');
    setTimeout(() => {
      displayalert.classList.add('hide-alert-js');
    }, 1000)
    
  }else if (!reciept2.classList.contains('hide-rcpt2') && reciept3.classList.contains('hide-rcpt3') && reciept4.classList.contains('hide-rcpt4') && reciept5.classList.contains('hide-rcpt5')) {

    displayalert.innerText = 'Added to Receipt-2';
    displayalert.classList.remove('hide-alert-js');
    setTimeout(() => {
      displayalert.classList.add('hide-alert-js');
    }, 1000)
  }else if (!reciept2.classList.contains('hide-rcpt2') && !reciept3.classList.contains('hide-rcpt3') && reciept4.classList.contains('hide-rcpt4') && reciept5.classList.contains('hide-rcpt5')) {

    displayalert.innerText = 'Added to Receipt-3';
    displayalert.classList.remove('hide-alert-js');
    setTimeout(() => {
      displayalert.classList.add('hide-alert-js');
    }, 1000)
  }else if (!reciept2.classList.contains('hide-rcpt2') && !reciept3.classList.contains('hide-rcpt3') && !reciept4.classList.contains('hide-rcpt4') && reciept5.classList.contains('hide-rcpt5')) {
    displayalert.innerText = 'Added to Receipt-4';
    displayalert.classList.remove('hide-alert-js');
    setTimeout(() => {
      displayalert.classList.add('hide-alert-js');
    }, 1000)
    document.querySelector('.g-total').innerHTML = `${ane4}Frs`;
  }else{
    displayalert.innerText = 'Added to Receipt-5';
    displayalert.classList.remove('hide-alert-js');
    setTimeout(() => {
      displayalert.classList.add('hide-alert-js');
    }, 1000)
    document.querySelector('.g-total').innerHTML = `${ane}Frs`;
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
  }else if (names.value === ``) {
    unit.innerHTML = 0;
  }else if (description.value === 'Piece') {
    switch (description.value === 'Piece') {
      case (names.value === `Mayor 5l`):
        unit.innerHTML = 8000;
        break;
      case (names.value === `Celor 5l`):
        unit.innerHTML = 8500;
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
      case (names.value === `Hollandia big`):
        unit.innerHTML = 1200;
        break;
      case (names.value === `Hallandia small`):
        unit.innerHTML = 250;
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
      case (names.value === `Tiara`):
        unit.innerHTML = 23500;
        break;
      case (names.value === `Creamz biscuits`):
        unit.innerHTML = 18500;
        break;
      case (names.value === `Familia spaghetti 500g`):
        unit.innerHTML = 8000;
        break;
      case (names.value === `Familia spaghetti 250g`):
        unit.innerHTML = 7500;
        break;
      case (names.value === `Crackers`):
        unit.innerHTML = 12000;
        break;
      case (names.value === `Mayor 5l`):
        unit.innerHTML = 30000;
        break;
      case (names.value === `Oilio 5l`):
        unit.innerHTML = 37000;
        break;
      case (names.value === `Active 5l`):
        unit.innerHTML = 29000;
        break;
      case (names.value === `Celor 5l`):
        unit.innerHTML = 23500;
        break;
      case (names.value === `3in1 wine`):
        unit.innerHTML = 3000;
        break;
      case (names.value === `Hollandia big`):
        unit.innerHTML = 10000;
        break;
      case (names.value === `Hallandia smal`):
        unit.innerHTML = 5000;
        break;
      case (names.value === `Roma tomat`):
        unit.innerHTML = 4600;
        break;
      case (names.value === `Amor tomat`):
        unit.innerHTML = 4500;
        break;
      case (names.value === `Mymy tomat`):
        unit.innerHTML = 4600;
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
      case (names.value === `Tiara`):
        unit.innerHTML = 2000;
        break;
      case (names.value === `Alex condom`):
        unit.innerHTML = 3700;
        break;
      case (names.value === `Creamz biscuits`):
        unit.innerHTML = 500;
        break;
      case (names.value === `Bambil stick`):
        unit.innerHTML = 2100;
        break;
      case (names.value === `Playing card`):
        unit.innerHTML = 1900;
        break;
      case (names.value === `Marker`):
        unit.innerHTML = 900;
        break;
      case (names.value === `Lipton`):
        unit.innerHTML = 600;
        break;
      case (names.value === `Crackers`):
        unit.innerHTML = 500;
        break;
      case (names.value === `Vigor doctor paste`):
        unit.innerHTML = 500;
        break;
      case (names.value === `Mericle paste`):
        unit.innerHTML = 500;
        break;
      case (names.value === `Small Colgate`):
        unit.innerHTML = 400;
        break;
      case (names.value === `Gaslighter torch`):
        unit.innerHTML = 3800;
        break;
      case (names.value === `Gaslighter no torch`):
        unit.innerHTML = 3500;
        break;
      case (names.value === `Moontiger`):
        unit.innerHTML = 350;
        break;
      case (names.value === `Candle`):
        unit.innerHTML = 700;
        break;
      case (names.value === `Safety matches`):
        unit.innerHTML = 200;
        break;
      case (names.value === `La croix  sachets`):
        unit.innerHTML = 1200;
        break;
      case (names.value === `Iron sponge red(12)`):
        unit.innerHTML = 500;
        break;
      case (names.value === `Iron sponge net(12`):
        unit.innerHTML = 1000;
        break;
      case (names.value === `Magic mamy sponge(24`):
        unit.innerHTML = 2000;
        break;
        case (names.value === `Familia spaghetti 500g`):
          unit.innerHTML = 500;
          break;
        case (names.value === `Familia spaghetti 250g`):
          unit.innerHTML = 250;
          break;
    
      default: unit.innerHTML = 0;
        break;

    }
  }else if (description.value === 'Row') {
    switch (description.value === 'Row') {
      case (names.value === `Roma tomat`):
        unit.innerHTML = 1000;
        break;
      case (names.value === `Amor tomat`):
        unit.innerHTML = 1000;
        break;
      case (names.value === `Mymy tomat`):
        unit.innerHTML = 1000;
        break;
      case (names.value === `Lipton`):
        unit.innerHTML = 10500;
        break;
      case (names.value === `Vigor doctor paste`):
        unit.innerHTML = 2500;
        break;
      case (names.value === `Mericle paste`):
        unit.innerHTML = 2500;
        break;
      case (names.value === `Small Colgate`):
        unit.innerHTML = 4000;
        break;
    
      default: unit.innerHTML = 0;
        break;
    }
  }
}console.log(description === 'Row');

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
    if (R1.innerHTML === '10' && R2.innerHTML <= 5) {
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
    if (R1.innerHTML === '10' && R2.innerHTML <= 5) {
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
    if (R1.innerHTML === '10' && R2.innerHTML <= 5) {
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
  if (R1.innerHTML === '10' && R2.innerHTML <= 5) {
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
  
  if (R1.innerHTML <= 10 ) {
    let htmlholder1 = '';
    for (let i = 0; i < receiptholder.length; i++) {
      document.querySelector('.R1').innerHTML = (receiptholder.length);
      const itemsObject = receiptholder[i];
      const { itemname, itemdescription, itemquantity, itemunit, itemamount } = itemsObject;
      const htmlF = `
        <div class="name-option abc">
          ${itemname}
        </div>
        <div class="description2-holder abd">
          <p class="description2-text">${itemdescription}</p>
        </div>
        <div class="quantiy2-holder abd">
          <p class="quantiy2-text" >${itemquantity}</p>
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
  if (R1.innerHTML === '10' && R2.innerHTML < 5) {
    if (!reciept2.classList.contains('hide-rcpt2')) {
      if (R1.innerHTML === '10' && R2.innerHTML <= 5) {
        let display = document.querySelector('.A400');
          let htmlholder1 = '';
          for (let i = 0; i < receiptholder1.length; i++) {
            document.querySelector('.R2').innerHTML = receiptholder1.length;
            const itemsObject1 = receiptholder1[i];
            const { itemname, itemdescription, itemquantity, itemunit, itemamount } = itemsObject1;
            const htmlF1 = `
              <div class="name-option abc">
                ${itemname}
              </div>
              <div class="description2-holder abd">
                <p class="description2-text">${itemdescription}</p>
              </div>
              <div class="quantiy2-holder abd">
                <p class="quantiy2-text" >${itemquantity}</p>
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
    }
  }

  if (R1.innerHTML === '10' && R2.innerHTML === '5' && R3.innerHTML < 5) {
    if (!reciept3.classList.contains('hide-rcpt3')) {
      if (R2.innerHTML === '5' && R3.innerHTML <= 5) {
        let htmlholder2 = '';
        for (let i = 0; i < receiptholder2.length; i++) {
          document.querySelector('.R3').innerHTML = receiptholder2.length;
          const itemsObject2 = receiptholder2[i];
          const { itemname, itemdescription, itemquantity, itemunit, itemamount } = itemsObject2;
          const htmlF2 = `
            <div class="name-option abc">
              ${itemname}
            </div>
            <div class="description2-holder abd">
              <p class="description2-text">${itemdescription}</p>
            </div>
            <div class="quantiy2-holder abd">
              <p class="quantiy2-text" >${itemquantity}</p>
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
    }
  }

  if (R1.innerHTML === '10' && R2.innerHTML === '5' && R3.innerHTML === '5' && R4.innerHTML < 5) {
    if (!reciept4.classList.contains('hide-rcpt4')) {
      if (R3.innerHTML === '5' && R4.innerHTML <= 5) {
        let htmlholder3 = '';
        for (let i = 0; i < receiptholder3.length; i++) {
          document.querySelector('.R4').innerHTML = receiptholder3.length;
          const itemsObject3 = receiptholder3[i];
          const { itemname, itemdescription, itemquantity, itemunit, itemamount } = itemsObject3;
          const htmlF3 = `
            <div class="name-option abc">
              ${itemname}
            </div>
            <div class="description2-holder abd">
              <p class="description2-text">${itemdescription}</p>
            </div>
            <div class="quantiy2-holder abd">
              <p class="quantiy2-text" >${itemquantity}</p>
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
    }
  }

  if (R1.innerHTML === '10' && R2.innerHTML === '5' && R3.innerHTML === '5' && R4.innerHTML === '5' && R5.innerHTML < 5) {
    if (!reciept5.classList.contains('hide-rcpt5')) {
      if (R4.innerHTML === '5' && R5.innerHTML <= 5) {
        let htmlholder4 = '';
        for (let i = 0; i < receiptholder4.length; i++) {
          document.querySelector('.R5').innerHTML = receiptholder4.length;
          const itemsObject4 = receiptholder4[i];
          const { itemname, itemdescription, itemquantity, itemunit, itemamount } = itemsObject4;
          const htmlF4 = `
            <div class="name-option abc">
              ${itemname}
            </div>
            <div class="description2-holder abd">
              <p class="description2-text">${itemdescription}</p>
            </div>
            <div class="quantiy2-holder abd">
              <p class="quantiy2-text" >${itemquantity}</p>
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
  }
  
}


fun12();
function fun12() {
  const R1 = document.querySelector('.R1');
  const R2 = document.querySelector('.R2');
  const R3 = document.querySelector('.R3');
  const R4 = document.querySelector('.R4');
  const R5 = document.querySelector('.R5');
  
  if (R1.innerHTML <= 10) {
    let totalpovider = 0;
    for (let i = 0; i < receiptholder.length; i++) {
      const totalObject = receiptholder[i];
      const { itemamount } = totalObject;
      totalpovider += Number(itemamount);
      document.getElementById('sub-total').innerHTML = totalpovider;
    }
  }
  if (R1.innerHTML === '10') {
    if (!reciept2.classList.contains('hide-rcpt2')) {
      if (R1.innerHTML === '10' && R2.innerHTML <= 5) {
        let totalpovider1 = 0;
        for (let i = 0; i < receiptholder1.length; i++) {
          const totalObject1 = receiptholder1[i];
          const { itemamount } = totalObject1;
          totalpovider1 += Number(itemamount);
          document.querySelector('.sub-total1-js').innerHTML = totalpovider1;
        }
      }
    }
  }
  if (R1.innerHTML === '10' && R2.innerHTML === '5' && R3.innerHTML < 5) {
    if (!reciept3.classList.contains('hide-rcpt3')) {
      if (R2.innerHTML === '5' && R3.innerHTML <= 5) {
        let totalpovider2 = 0;
        for (let i = 0; i < receiptholder2.length; i++) {
          const totalObject2 = receiptholder2[i];
          const { itemamount } = totalObject2;
          totalpovider2 += Number(itemamount);
          document.getElementById('sub-tota2').innerHTML = totalpovider2;
        }
      }
    }
  }
  if (R1.innerHTML === '10' && R2.innerHTML === '5' && R3.innerHTML === '5' && R4.innerHTML < 5) {
    if (!reciept4.classList.contains('hide-rcpt4')) {
      if (R3.innerHTML === '5' && R4.innerHTML <= 5) {
        let totalpovider3 = 0;
        for (let i = 0; i < receiptholder3.length; i++) {
          const totalObject3 = receiptholder3[i];
          const { itemamount } = totalObject3;
          totalpovider3 += Number(itemamount);
          document.getElementById('sub-total3').innerHTML = totalpovider3;
        }
      }
    }
  }
  if (R1.innerHTML === '10' && R2.innerHTML === '5' && R3.innerHTML === '5' && R4.innerHTML === '5' && R5.innerHTML < 5) {
    if (!reciept5.classList.contains('hide-rcpt5')) {
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
  }
}


function fun14() {
  const R1 = document.querySelector('.R1');
  const R2 = document.querySelector('.R2');
  const R3 = document.querySelector('.R3');
  const R4 = document.querySelector('.R4');
  const R5 = document.querySelector('.R5');

  if (R1.innerHTML === '10') {
    if (reciept2.classList.contains('hide-rcpt2')) {
      reciept2.classList.remove('hide-rcpt2');
    }
  }
  if (R1.innerHTML === '10' && R2.innerHTML === '5' && R3.innerHTML < 5) {
    if (reciept3.classList.contains('hide-rcpt3')) {
      reciept3.classList.remove('hide-rcpt3');
    }
  }
  if (R1.innerHTML === '10' && R2.innerHTML === '5' && R3.innerHTML === '5' && R4.innerHTML < 5) {
    if (reciept4.classList.contains('hide-rcpt4')) {
      reciept4.classList.remove('hide-rcpt4');
    }
  }
  if (R1.innerHTML === '10' && R2.innerHTML === '5' && R3.innerHTML === '5' && R4.innerHTML === '5' && R5.innerHTML < 5) {
    if (reciept5.classList.contains('hide-rcpt5')) {
      reciept5.classList.remove('hide-rcpt5');
    }
  }
  
} 


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
  
  if (R1.innerHTML < 10) {

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
  }else if (R1.innerHTML === '10' && R2.innerHTML < 5) {
    if (reciept2.classList.contains('hide-rcpt2')) {
      alert(`Receipt-1 is full please open new receipt and readd this item`);
    }else{
     if (R1.innerHTML === '10' && R2.innerHTML < 5) {
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
      }
    }
  }else if (R1.innerHTML === '10' && R2.innerHTML === '5' && R3.innerHTML < 5) {
    if (reciept3.classList.contains('hide-rcpt3')) {
      alert(`Receipt-2 is full please open new receipt and readd this item`);
    }else{
      if (R2.innerHTML === '5' && R3.innerHTML < 5) {
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
      }
    }
  }else if (R1.innerHTML === '10' && R2.innerHTML === '5' && R3.innerHTML === '5' && R4.innerHTML < 5) {
    if (reciept4.classList.contains('hide-rcpt4')) {
      alert(`Receipt-3 is full please open new receipt and readd this item`);
    }else{
      if (R3.innerHTML === '5' && R4.innerHTML < 5) {
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
      }
    }
  }else if (R1.innerHTML === '10' && R2.innerHTML === '5' && R3.innerHTML === '5' && R4.innerHTML === '5' && R5.innerHTML < 5) {
    if (reciept5.classList.contains('hide-rcpt5')) {
      alert(`Receipt-4 is full please open new receipt and readd this item`);
    }else{
     if (R4.innerHTML === '5' && R5.innerHTML < 5) {
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
    }
  }

  names.value = '';
  description.value = 'emty';
  quantity.value =  0;
  unit.innerHTML = 0;
  document.querySelector('.Amount').innerHTML = (quantity.value)*(unit.innerHTML);
  discount.value = '';
  fun13();
  fun16();
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
  if (stotal1.innerHTML === '' && stotal2.innerHTML === '' && stotal3.innerHTML === '' && stotal4.innerHTML === '' && stotal5.innerHTML === '') {
    document.querySelector('.g-total').innerHTML = '00';
  }
    const ane = Number(stotal1.innerHTML)  + Number(stotal2.innerHTML) + Number(stotal3.innerHTML) + Number(stotal4.innerHTML) + Number(stotal5.innerHTML);
    const ane1 = Number(stotal1.innerHTML);
    const ane2 = Number(stotal1.innerHTML) + Number(stotal2.innerHTML);
    const ane3 = Number(stotal1.innerHTML) + Number(stotal2.innerHTML) + Number(stotal3.innerHTML);
    const ane4 = Number(stotal1.innerHTML) + Number(stotal2.innerHTML) + Number(stotal3.innerHTML) + Number(stotal4.innerHTML);
    document.querySelector('.g-total').innerHTML = `${ane}Frs`;
  
  if (reciept2.classList.contains('hide-rcpt2') && reciept3.classList.contains('hide-rcpt3') && reciept4.classList.contains('hide-rcpt4') && reciept5.classList.contains('hide-rcpt5') && R1.innerHTML < 5 ) {

    document.querySelector('.g-total').innerHTML = `${ane1}Frs`;
  }else if (!reciept2.classList.contains('hide-rcpt2') && reciept3.classList.contains('hide-rcpt3') && reciept4.classList.contains('hide-rcpt4') && reciept5.classList.contains('hide-rcpt5')) {

    document.querySelector('.g-total').innerHTML = `${ane2}Frs`;
  }else if (!reciept2.classList.contains('hide-rcpt2') && !reciept3.classList.contains('hide-rcpt3') && reciept4.classList.contains('hide-rcpt4') && reciept5.classList.contains('hide-rcpt5')) {

    document.querySelector('.g-total').innerHTML = `${ane3}Frs`;
  }else if (!reciept2.classList.contains('hide-rcpt2') && !reciept3.classList.contains('hide-rcpt3') && !reciept4.classList.contains('hide-rcpt4') && reciept5.classList.contains('hide-rcpt5')) {

    document.querySelector('.g-total').innerHTML = `${ane4}Frs`;
  }else{
    document.querySelector('.g-total').innerHTML = `${ane}Frs`;
  }
}
  
  