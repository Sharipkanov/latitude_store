var doc = document;

$(function() {
    var cartCover = $('.cart-fixed-cover'),
        cart = $('.cart-fixed');

    renderCartFields('.cart-fixed-content');

    $(doc).on('click', '.open-cart-fixed', function (e) {
        e.preventDefault();
        openCart();

        return false;
    });

    $(doc).on('click', '.close-cart-fixed', function (e) {
        e.preventDefault();
        closeCart();

        return false;
    });

    $(doc).on('click', '.cart-fixed-cover', function (e) {
        if (e.target == this) closeCart();
    });

    $('.cart-fixed-content').jScrollPane();

    $(window).resize(function () {
        $('.cart-fixed-content').jScrollPane();
    });


    function  openCart() {
        if(cart.hasClass('active') !== true) {
            cartCover.fadeIn(300);

            setTimeout(function () {
                cart.addClass('active');
                $('.cart-fixed-content').jScrollPane();
            }, 50);
        }
    }

    function closeCart() {
        if(cart.hasClass('active') === true) {
            cart.removeClass('active');

            setTimeout(function () {
                cartCover.fadeOut(300);
            }, 100);
        }
    }

    function renderCartFields($cartDiv) {
        var productTemplate = "";

        for(var i=0; i<10; i++) {
            productTemplate +=
                '<div class="cart-fixed-content__item">' +
                    '<div class="cart-fixed-content__item_thumb">' +
                    '<img src="images/item-img.png" alt=""/>' +
                    '</div>' +
                    '<div class="cart-fixed-content__item_content">' +
                        '<div>' +
                            '<div class="cart-fixed-content__item_title">Latitude saga grafit</div>' +
                        '</div>' +
                        '<div>' +
                            '<div class="cart-fixed-content__item_articul">Арт.: LSG001</div>' +
                        '</div>' +
                        '<div class="cart-fixed-content__item_footer">' +
                            '<p>1 × 9 900 р</p>' +
                            '<p>9 900 р</p>' +
                        '</div>' +
                    '</div>' +
                    '<a href="#" class="cart-fixed-content__item_remove"></a>' +
                '</div>';
        }

        $($cartDiv).prepend($(productTemplate));
    }
});


function hideMenuItems() {
    var items = doc.getElementsByClassName('smg'),
        itemsSize = 0,
        blockWidth,
        key;

    for(var i=0; i<items.length; i++) {
        itemsSize += items[i].width;

        if(itemsSize > blockWidth) {
            key = [i];

            hideItem(key);
            break;
        }
    }
}

function hideItem($key) {
    var items = doc.getElementsByClassName('smg');

    for(var i=0; i<items.length; i++) {
        if(i >=  $key) {
            items[i].classList.add('hide');
        }
    }

}
