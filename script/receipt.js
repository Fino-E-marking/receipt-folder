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
let newreceiptbook = document.querySelector('.add-receipt-button');
let description2 = document.getElementById('description2');

description.addEventListener('input', fun1);
quantity.addEventListener('input', fun2);
addButton.addEventListener('click', fun3);
deleteButton.addEventListener('click', fun4);
description2Button.addEventListener('click', fun5);
description2.addEventListener('input', fun7);
Quantity2Button.addEventListener('click', fun8)
quantity2.addEventListener('input', fun9);
quantity2.addEventListener('mouseleave', fun10);
addButton.addEventListener('click', fun11);
newreceiptbook.addEventListener('click', fun14);

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
const receiptholder2 = []
groupingitmem();
function groupingitmem() {
  const serlername = document.getElementById('serler-name');
  if (serlername.value === 'Iliasu') {
    let htmlholder1 = '';
    for (let i = 0; i < receiptholder.length; i++) {
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
            receiptholder.splice(${i}, 1)
            groupingitmem();
            fun12();
          "class="delete-action">delete</button>
        </div>
      `;
      htmlholder1 += htmlF;
        document.querySelector('.rb-body').innerHTML = htmlholder1;  
    }
  }else if (serlername.value === 'Eugene') {
    let htmlholder2 = '';
    for (let i = 0; i < receiptholder2.length; i++) {
      const itemsObject = receiptholder2[i];
      const { itemname, itemdescription, itemquantity, itemunit, itemamount } = itemsObject;
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
          "class="delete-action">delete</button>
        </div>
      `;
      htmlholder2 += htmlF2;
        document.querySelector('.rb-body2').innerHTML = htmlholder2;  
    }
  }
  
}

fun12();
function fun12() {
  const serlername = document.getElementById('serler-name');
  if (serlername.value === 'Iliasu') {
    let totalpovider = 0;
    for (let i = 0; i < receiptholder.length; i++) {
      const totalObject = receiptholder[i];
      const { itemamount } = totalObject;
      totalpovider += Number(itemamount);
      document.getElementById('sub-total').innerHTML = `${totalpovider} Frs`;
    }
  }else if (serlername.value === 'Eugene') {
    let totalpovider2 = 0;
    for (let i = 0; i < receiptholder2.length; i++) {
      const totalObject2 = receiptholder2[i];
      const { itemamount } = totalObject2;
      totalpovider2 += Number(itemamount);
      document.querySelector('.sub-total2').innerHTML = `${totalpovider2} Frs`;
    }
  }
  
}
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
    console.log(nextreceipt.length);
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
  
}


function fun11() {
  const serlername3 = document.getElementById('serler-name');
  let itemname = names.value;
  let itemdescription = description.value;
  let itemquantity = quantity.value;
  let itemunit = unit.innerHTML;
  let itemamount = amount.innerHTML;
  
  
  if (serlername3.value === 'Iliasu') {
    receiptholder.push({
      itemname,
      itemdescription,
      itemquantity,
      itemunit,
      itemamount
    })
    groupingitmem();
    fun12();
    fun15();
  }else if (serlername3.value === 'Eugene') {
    receiptholder2.push({
      itemname,
      itemdescription,
      itemquantity,
      itemunit,
      itemamount
    })
    console.log(receiptholder2.length);
    for (let i = 0; i < receiptholder2.length; i++) {
      const element1 = receiptholder2[i];
      if (receiptholder2.length === 10) {
        continue;
      }
    }
    
    groupingitmem();
    fun12();
  }
  names.value = 'emty';
  description.value = 'emty';
  quantity.value =  0;
  unit.innerHTML = 0;
  document.querySelector('.Amount').innerHTML = (quantity.value)*(unit.innerHTML);
}



