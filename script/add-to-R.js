let testholder = document.querySelector('.test-name-holder');
let testdeletebutton = document.getElementById('test1');
testholder.addEventListener('click', () => {
  testdeletebutton.id = '';
});
testdeletebutton.addEventListener('click', () => {
  setTimeout(function() {
    testdeletebutton.id = 'text1';
    testholder.innertext = `maryor 5l`;
  }, 1000);
});


const printbtn = document.querySelector('.js-pinte-btn');
printbtn.addEventListener('click', function() {
  print();
})
console.log(printbtn);