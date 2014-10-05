/*********************
 MENU ONHOVER EVENTS
*********************/
$("#link_intro").hover(function () {
    $("#link_intro").toggleClass("icon_menu_hover");
    $("#text_intro").toggleClass("text_menu_display");
});

$("#link_problem").hover(function () {
    $("#link_problem").toggleClass("icon_menu_hover");
    $("#text_problem").toggleClass("text_menu_display");
});

$("#link_app").hover(function () {
    $("#link_app").toggleClass("icon_menu_hover");
    $("#text_app").toggleClass("text_menu_display");
});

$("#link_map").hover(function () {
    $("#link_map").toggleClass("icon_menu_hover");
    $("#text_map").toggleClass("text_menu_display");
});

$("#link_form").hover(function () {
    $("#link_form").toggleClass("icon_menu_hover");
    $("#text_form").toggleClass("text_menu_display");
});

$("#link_opinions").hover(function () {
    $("#link_opinions").toggleClass("icon_menu_hover");
    $("#text_opinions").toggleClass("text_menu_display");
});


/*********************
 MENU ONCLICK EVENTS
*********************/
$("#link_intro").click(function () {
    $("nav ul li a").removeClass("fa-circle");
    $("nav ul li a").addClass("fa-circle-o");
    $("#link_intro").addClass("fa-circle");
    $(".container").hide();
    $(".container").fadeIn("slow");
});

$("#link_problem").click(function () {
    $("nav ul li a").removeClass("fa-circle");
    $("nav ul li a").addClass("fa-circle-o");
    $("#link_problem").addClass("fa-circle");
    $(".container").hide();
    $(".container").fadeIn("slow");
});

$("#link_app").click(function () {
    $("nav ul li a").removeClass("fa-circle");
    $("nav ul li a").addClass("fa-circle-o");
    $("#link_app").addClass("fa-circle");
    $(".container").hide();
    $(".container").fadeIn("slow");
});

$("#link_map").click(function () {
    $("nav ul li a").removeClass("fa-circle");
    $("nav ul li a").addClass("fa-circle-o");
    $("#link_map").addClass("fa-circle");
    $(".container").hide();
    $(".container").fadeIn("slow");
});

$("#link_form").click(function () {
    $("nav ul li a").removeClass("fa-circle");
    $("nav ul li a").addClass("fa-circle-o");
    $("#link_form").addClass("fa-circle");
    $(".container").hide();
    $(".container").fadeIn("slow");
});

$("#link_opinions").click(function () {
    $("nav ul li a").removeClass("fa-circle");
    $("nav ul li a").addClass("fa-circle-o");
    $("#link_opinions").addClass("fa-circle");
    $(".container").hide();
    $(".container").fadeIn("slow");
});

/*********************
 OTHER EVENTS
*********************/
$("#form_button").click(function () {
    $("#form_sent").fadeIn("slow");
});