
const currentDate = new Date();
// to get current year
function getYear() {
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

//greeting

function greeting() {
    var currentHour = currentDate.getHours();
    var greeting = document.querySelector("#greeting");
    var imgBomDia = "URL(../images/bomdia.png)";
    var imgBoaTarde = "URL(../images/boatarde.png)";
    var imgBoaNoite = "URL(../images/boanoite.png)";
    //var body = document.querySelector("body"); // usar tema a partir da hora do dia.
    var bgSection = document.querySelector(".about_section")


    if (currentHour >= 0 && currentHour <= 12) {
        greeting.innerHTML = "Bom dia!";
        bgSection.style.backgroundImage = imgBomDia;
    } else if (currentHour >= 12 && currentHour <= 17) {
        greeting.innerHTML = "Boa Tarde!"
        bgSection.style.backgroundImage = imgBoaTarde;
    }else{
        greeting.innerHTML = "Boa Noite!"
        bgSection.style.backgroundImage = imgBoaNoite;
    }
}

greeting();

// owl carousel slider js
var owl = $('.portfolio_carousel').owlCarousel({
    loop: true,
    margin: 15,
    dots: false,
    center: true,
    autoplay: true,
    navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            center: false,
            items: 1,
            margin: 0
        },
        576: {
            items: 2
        },
        991: {
            center: true,
            items: 3
        }
    }
})


// owl.owlcarousel2_filter

$('.owl-filter-bar').on('click', '.item', function (e) {
    var $items = $('.owl-filter-bar a')
    var $item = $(this);
    var filter = $item.data('owl-filter')
    $items.removeClass("active");
    $item.addClass("active");
    owl.owlcarousel2_filter(filter);

    e.preventDefault();
})
/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(-29.694816240641032, -53.86713897116361),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// nice select
$(document).ready(function () {
    $('select').niceSelect();
});

/*
-29.694816240641032, -53.86713897116361
*/