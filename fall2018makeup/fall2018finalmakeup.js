$(".menu").click(function(){ //click on any menu w/ class .menu
    $(this).next(".submenu").slideToggle(); //only effects the next set of submenus
    });

//load story 0 by default into story element
$("#story").load("story0.txt");

//load story on click
$("li").click(function(){
    let story = $(this).attr('id'); //get value of selected item
    $('#story').load(story); //display it in story
});
//retrieving element id sourced from: https://stackoverflow.com/questions/3239598/how-can-i-get-the-id-of-an-element-using-jquery

//change color of #sources element
$("li").click(function(){
    let bgcolor = $(this).attr('id'); //gets the color of the selected item
    $("#source").css("background-color", bgcolor); //sets source as the selected color
});

//click on the button, increases the counter
let count = 0; //start at 0
$("#currentcount").html(count); //puts a zero there on page load
$("#increment").click(function(){//click on button
    count++;//add on every click
    $("#currentcount").html(count);//display number
});

//that review session was very helpful, thank you very much for holding it