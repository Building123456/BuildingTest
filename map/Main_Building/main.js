
$(document).ready(function(){


let res={
    "case": true,
    "caseType": "network",
    "toDep":"IT",
    "message" :"مكيف خربان هيلب بليز",
    "building": "0",
    "floor": "0",
     "id": "003",
}

    
var $modal = $(".modal");
var $modal_content = $(".modal-content");
var $closeButton = $(".close-button");
var clearText= false;
var $message = $('#message');

$("canvas").on('click',function(){
    ShowProblemMessage( $(this).attr('id') );
    
});

$closeButton.on('click',function(){
    $modal.toggleClass('show-modal');
    $modal_content.toggle("fast" ,ShowModal());
})

function ShowModal(){
        $modal_content.addClass('show') 
}

function ShowProblemMessage(id){
    $modal.toggleClass('show-modal')
         temp = LoadData(id);
         $message.append(temp.message);
    $modal_content.toggle("fast" ,ShowModal());
}


function LoadData(id){
    $message.empty();
    return res;
}





})



