/*!
* HHMI photosynthesis interactive v1.0.0
*====================================================
*/

"use strict";

//define global variables 
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

/*var App = function () {
    
}();*/

function hideFooter(transition){
    if (transition) {
        $('.footer').addClass('footer-transition');
    } else {
        $('.footer').removeClass('footer-transition');
    }
    $('.footer').addClass('footerHide');
    $('.menuitem').css('visibility', 'hidden');
}


$(document).ready(function () {
    
    hideFooter(false);

    $(window).on('resize', function(){
        hideFooter(false);
    });
    $(window).on('scroll', hideFooter);

    $(window).click(function(event) { 
        if(!$(event.target).closest(".footer-buttons").length) {
            if(!($(".footer-buttons").hasClass("footerHide"))) {
               hideFooter(true);
            }
        }        
    });

    $(".navbar-nav > li").click(function () {
        $(".navbar-nav > li").removeClass('current');
        $(this).addClass('current');
    });



    $(".footer-buttons").click(function showFooter() {
        $('.footer').addClass('footer-transition');
        $('.footer').removeClass('footerHide');
        $('.menuitem').css('visibility', '');
    });

});



/*$(window).on('resize', function () {
    $('#navbarNav').collapse('hide');
 })*/