

const printbtn = document.querySelector('.js-pinte-btn');
printbtn.addEventListener('click', function() {
  print();
})

const use = [1, 2, { nan: 'yoo' , naf: 'meee'}]
use.forEach(element8 => {
  use[2].naf = 5;
});
//console.log(use);