"use strict";

//hides on load
$(document).ready(function() {
   $('.list').hide();
});

//toggles on click
$(".top").click(function(){
    $(".list").toggle("fast",function(){
    });
});

//code sourced from the Electric Toolbox
//https://www.electrictoolbox.com/jquery-hide-text-page-load-show-later/
//and jQuery
//http://api.jquery.com/toggle/