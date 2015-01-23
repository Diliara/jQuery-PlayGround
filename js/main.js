$(document).ready(function () {

$('.vacation').on('click', 'button', function(){
    var vacation = $(this).closest('.vacation');
    var priceData = vacation.data('price');
    var price = $('<p class="list-group-item-text pull-right"> $' + priceData + '</p>');
    vacation.find('.priceArea').append(price);
    $(this).remove();

});


});
