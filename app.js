
const foods=[
{name:'Burger',price:120},
{name:'Pizza',price:250},
{name:'Fried Rice',price:180},
{name:'Shawarma',price:150}
];

let total=0;

function renderFoods(list=foods){
document.getElementById('food-list').innerHTML=list.map(f=>
`<div class="card">
<h3>${f.name}</h3>
<p>₹${f.price}</p>
<button onclick="addToCart('${f.name}',${f.price})">Add to Cart</button>
</div>`).join('');
}

function filterFoods(){
const q=document.getElementById('search').value.toLowerCase();
renderFoods(foods.filter(f=>f.name.toLowerCase().includes(q)));
}

function addToCart(name,price){
const li=document.createElement('li');
li.textContent=name+' - ₹'+price;
document.getElementById('cart').appendChild(li);
total+=price;
document.getElementById('total').textContent=total;
}

function payNow(){
window.location.href='upi://pay?pa=YOUR_UPI_ID@okaxis&pn=Foodie&am='+total+'&cu=INR';
}

renderFoods();
