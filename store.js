if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready()
}

function ready() {
// Remove button functionality
    var removeCartButtons = document.getElementsByClassName('remove-btn');
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++ ){
        var button = removeCartButtons[i]
        button.addEventListener('click', function(event) {
            var buttonClicked = event.target
            buttonClicked.parentElement.parentElement.remove()
            updateCartTotal()
        })
    }
}
// This function will update the cart total
function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for(var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        console.log(price * quantity)
         total = total + (price * quantity)
    }
    document.getElementsByClassName('cart-total-price')[0].innerText  = '$' + total
}