var lists = [];
var viewlist;
var listid = 0;
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
    
    let listid = Number(viewlist);

    let task = $(element).parent().find("#tasktitle").val();

    console.log(task);

    let listamount = $("#cardmain").children().length;

    console.log(listamount);

    console.log(element);

    lists[listid].items.push(task);

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

    var listname = $("#listname").val();

    let newlist = {
        id: listid++,
        name: listname,
        items: [],
        };

    lists.push(newlist);

    console.log(listid);



   

    
    
    if(listname.length > 1){
        $("#matnav").append(`<div class="navelem" id="${newlist.id}" onclick="setcurrentlist(this);">${newlist.name}</div>`)
    }




}

function setcurrentlist(e){
    $(".card").remove();

    viewlist = e.id;

   
    for(let i = 0; i < lists[viewlist].items.length; i++){
        let li = lists[viewlist].items[i];
        renderlist(li);
    }
   
}

function renderlist(rend){

    $("#cardmain").append(`<div class='card'></i>
    
    <span id="cardspace"><h1>${rend}</h1><div class="blacksquare">
    
    <input type="checkbox" class="checkmark" onclick="selectcard(this);">
    
    <i class="fas fa-times-circle" onmouseover="this.parentNode.style.background='red'" onmouseleave="selectcard(this);" onclick="removecard(this);></i>
    
    <i class="fas fa-arrows-alt" id="draggable"></i>
    
    </div>`)

}
    
  



    
    