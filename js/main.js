$(document).ready(function () {

    /* fetching price from data-price */
    $('.price-amount').each(function () {
        var priceAmount = $(this).closest('.vacation').data('price');
        $(this).text(priceAmount);
    })


    $('.quantity').on('keyup', function () {
        var price = +$(this).closest('.vacation').data('price')
        var quantity = +$(this).val();
        var total = $(this).closest('.vacation').find('.total');
        $(total).text(price * quantity);
    });


    /* Random filter */
    $(".filter").click(function () {
        var by = $(this).data('filter');
        $('.highlighted').removeClass('highlighted');
        $('.vacation').filter(by).addClass('highlighted');
    });


    $(".show-hide-btn").on('click', showDetails)

});


function showDetails(evt) {
    evt.preventDefault();
    $(this).siblings().not(".show-hide-btn").slideToggle();
}
