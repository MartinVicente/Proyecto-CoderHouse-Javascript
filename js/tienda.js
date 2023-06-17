const addToShoppingCartButtons = document.querySelectorAll ('.buy_bt');
addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked);
});

function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest('.box_main');

    const itemTitle = item.querySelector('.shirt_text').textContent;
    const itemPrice = item.querySelector('.price_text').textContent;
    const itemImage = item.querySelector('.tshirt_img').src;
    console.log('itemTitle', itemTitle, itemPrice, itemImage);
}