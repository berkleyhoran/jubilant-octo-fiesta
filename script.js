window.onload = function() {
    cardID = 1;
    
   }
function addtask(){

    
    
    $("#cardmain").append(`<div class='card'></i>
    
    <div id="submit" onclick="inlay(this);"><i class="fas fa-check" id="checksub"></i></div><p class='todo'><input id="tasktitle" class="text"></input></p>
  
    <span style="flex-wrap:nowrap;"></div>`)
 


} 
function inlay(element){
    let task = $(element).parent().find("#tasktitle").val();

    console.log(task);

    let listamount = $("#cardmain").children().length;

    console.log(listamount);

    console.log(element);

    $(element).parent().html(`<h1>${task}</h1>`)
}

function clearList(){

    $(".card").remove();
}


    
  



    
    