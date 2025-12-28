console.log("Products.js loaded");
let cart = [];

	function addToCart(productName) {
		cart.push(productName);
		alert(productName + " added to cart!");
		console.log("Cart:", cart);
	}

	function showCardPrice(card) {
		const price = card.querySelector(".price");
		price.style.display = "block";
	}

	function hideCardPrice(card) {
		const price = card.querySelector(".price");
		price.style.display = "none";
	}
