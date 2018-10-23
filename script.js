var lists = {
     

        
       





};
window.onload = function(){
    var listid = 0;
}
$("#cardmain").sortable({
    handle:"#draggable"
})

function addtask(){

    
    
    $("#cardmain").append(`<div class='card'></i>
    
    <span id="cardspace"><div id="submit" onclick="inlay(this);"><i class="fas fa-check" id="checksub"></i></div>

    <input id="tasktitle" class="text"></input>
    
    <div class="blacksquare">
    
    <input type="checkbox" class="checkmark" onclick="selectcard(this);">
    
     <i class="fas fa-times-circle" onmouseover="this.parentNode.style.background='red'" onmouseleave="selectcard(this)"  onclick="removecard(this);"></i>
    
    <i class="fas fa-arrows-alt" id="draggable"></i></div>
  
    `)
 


} 
function inlay(element){
    let task = $(element).parent().find("#tasktitle").val();

    console.log(task);

    let listamount = $("#cardmain").children().length;

    console.log(listamount);

    console.log(element);

    $(element).parent().html(`<h1>${task}</h1><div class="blacksquare">
    
    <input type="checkbox" class="checkmark" onclick="selectcard(this);">
    
    <i class="fas fa-times-circle" onmouseover="this.parentNode.style.background='red'" onmouseleave="selectcard(this);" onclick="removecard(this);></i>
    
    <i class="fas fa-arrows-alt" id="draggable"></i>
    
    </div>`)
}

function clearList(){
    $(".card").remove();
}

function removecard(thiscard){
    console.log(thiscard);
    $(thiscard).parent().parent().parent().remove()
}

function selectcard(selectedcard){
    console.log(selectedcard);
    let checked = selectedcard.checked;
    if(checked == true){
        console.log(checked);
        $(selectedcard).parent().css("background-color","#a9cea1")
        
       }
    if (checked == false){
        console.log(checked);
        $(selectedcard).parent().css("background-color","#252C3F")
        
    }
    if (checked == null){
        console.log(checked);
        $(selectedcard).parent().css("background-color","#a9cea1")
        if (checked == false){
            $(selectedcard).parent().css("background-color","#252C3F")
        }
        
    }
    
}

function deleteselected(){
    
}

function createlist(){

    var newlist = {
        id: listid++
        name: listname
        
    }
    list.push();


    var listname = $("#listname").val();

    
    
    if(listname.length > 2){
    $("#matnav").append(`<div class="navelem">${listname}</div>`)
    }

}


    
  



    
    