$(document).ready(function(){$('.prodSlider').slick({arrows:true,dots:true,infinite:true,speed:300,slidesToShow:1,slidesToScroll:1,autoplay:false,});$('a[data-toggle="tab"]').on('shown.bs.tab',function(e){$('.prodSlider').slick('setPosition');});});