window.onload = function() {
    cardID = 1;
    
   }
function addtask(){

    
    
    $("#cardmain").append(`<div class='card'></i>
    
    <span id="cardspace"><div id="submit" onclick="inlay(this);"><i class="fas fa-check" id="checksub"></i></div>
    <input id="tasktitle" class="text"></input><div class="blacksquare"><input type="checkbox" class="checkmark"></div></div></span>
  
    `)
 


} 
function inlay(element){
    let task = $(element).parent().find("#tasktitle").val();

    console.log(task);

    let listamount = $("#cardmain").children().length;

    console.log(listamount);

    console.log(element);

    $(element).parent().html(`<h1>${task}</h1><div class="blacksquare"><input type="checkbox" class="checkmark"></div></div>`)
}

function clearList(){

    $(".card").remove();
}


    
  



    
    