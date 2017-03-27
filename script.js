//1-task----//

function blink_text() {
    $('.blink').fadeOut(500);
    $('.blink').fadeIn(500);
}


setInterval(blink_text, 1000);

//2-task---------//

$('#accept').click(function() {
	if ($('#submitbtn').is(':disabled')) {
    	$('#submitbtn').removeAttr('disabled');
    } else {
    	$('#submitbtn').attr('disabled', 'disabled');
    }
});
 
//3-task------//

$('a.printPage').click(function(){
           window.print();
           return false;
});

//--4----//

$(document).ready(function(){
	$("tr:even").addClass("zebra");
});