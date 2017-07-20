$(document).ready(function(){
	$('div.offCanvas-bar_3-left').addClass('col-2');
	$('div.offCanvas-bar_3-left').addClass('col-m-2');
	$('div.expandableContent-is-collapsed').removeClass('expandableContent-is-collapsed');
    $('div.expandableContent').removeClass('is-visuallyhidden');
    $('div.expandableHeading').addClass('expandableHeading-is-expanded');
    $('div.expandableHeading').removeClass('has-arrowLink');
    $('div.expandableHeading').removeClass('brandLink');
    $('div.expandableHeading').removeClass('expandableHeading-is-expanded');
    $('div.expandableHeading').removeClass('expandableHeading');

 var meu = document.getElementById('meu');
         var meuFixed = document.getElementById('meuFixed');
         var scrolltotop = document.getElementById('scrolltotop');
         window.onscroll = function () {
             var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
             if (scrollTop > meu.offsetTop+215) {
                 meuFixed.style.display = 'block';
                 scrolltotop.style.display = 'block';
             } else if (scrollTop < meu.offsetTop) {
                 meuFixed.style.display = 'none';
                 scrolltotop.style.display = 'none';
             }
         }

	})




