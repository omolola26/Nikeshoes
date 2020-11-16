$(document).ready(function(){
    $("section .color-picker .accent-wrapper").click(function() {
        $("section .color-picker .accent-wrapper").removeClass("checked");
        $(this).addClass("checked");

        var selectedShoe = $(this).attr("data-checker");


        $("section .product-display div.product-wrap").removeClass("active").hide();

        $("section .product-display div.product-wrap."+selectedShoe).addClass("active").show();

    });
    });