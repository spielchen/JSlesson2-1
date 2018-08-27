let open = document.getElementById('open-btn');
console.log(open);

let goodsItem = document.getElementsByClassName('goods-item');
console.log(goodsItem);

let employers = document.querySelectorAll('.hire-employers-item');
console.log(employers);

let mainFunction = document.querySelector('.main-functions');
let btn = mainFunction.getElementsByTagName('button')[0];
console.log(btn);

let chooseItem = document.querySelector('.choose-item'),
		timeValue = document.querySelector('.time-value'),
		countBudgetValue = document.querySelector('.count-budget-value');
console.log(chooseItem, timeValue, countBudgetValue);

let budgetV = document.getElementsByClassName('budget-value')[0],
		nameV = document.getElementsByClassName('name-value')[0],
		goodsV = document.getElementsByClassName('goods-value')[0],
		itemsV = document.getElementsByClassName('items-value')[0],
		employersV = document.getElementsByClassName('employers-value')[0],
		discountV = document.getElementsByClassName('discount-value')[0],
		isopenV = document.getElementsByClassName('isopen-value')[0];

console.log(nameV, budgetV, goodsV, itemsV, employersV, discountV, isopenV)