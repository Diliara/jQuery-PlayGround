$(document).ready(function () {

    /* fetching price from data-price */
    $('.price-amount').each(function(){
        var priceAmount = $(this).closest('.vacation').data('price');
        $(this).text(priceAmount);
    })


     $('.quantity').on('keyup', function(){
         var price = +$(this).closest('.vacation').data('price')
         var quantity = +$(this).val();
         var total = $(this).closest('.vacation').find('.total');
         $(total).text(price*quantity);
     });




    /* Random filter */
    $(".filter").click(function () {
        var by = $(this).data('filter');
        $('.highlighted').removeClass('highlighted');
        $('.vacation').filter(by).addClass('highlighted');
    });


    /* Hello reusable code snippet */
    $(".show-hide-btn").click(function () {
        $(this).siblings().not(".show-hide-btn").slideToggle();
    });

    /*alert($('button').length);*/









});
