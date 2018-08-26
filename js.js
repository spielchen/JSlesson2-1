let open = document.getElementById('open-btn');
console.log(open);

let goodsItem = document.getElementsByClassName('goods-item');
console.log(goodsItem);

let employers = document.querySelectorAll('.hire-employers-item');
console.log(employers);

let mainFunction = document.querySelector('.main-functions');
let btn = mainFunction.getElementsByTagName('button');
console.log(btn);

let chooseItem = document.querySelector('.choose-item'),
		timeValue = document.querySelector('.time-value'),
		countBudgetValue = document.querySelector('.count-budget-value');
console.log(chooseItem, timeValue, countBudgetValue);

let budgetV = document.getElementsByClassName('budget-value'),
		nameV = document.getElementsByClassName('name-value'),
		goodsV = document.getElementsByClassName('goods-value'),
		itemsV = document.getElementsByClassName('items-value'),
		employersV = document.getElementsByClassName('employers-value'),
		discountV = document.getElementsByClassName('discount-value'),
		isopenV = document.getElementsByClassName('isopen-value');

console.log(nameV, budgetV, goodsV, itemsV, employersV, discountV, isopenV)