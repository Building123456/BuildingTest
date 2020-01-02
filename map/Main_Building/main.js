
$(document).ready(function(){


let res={
    "alert": true,
    "caseType": "network",
    "toDep":"IT",
    "message" :"مكيف خربان هيلب بليز",
    "floor": "0",
     "id": "003",
     "date": "121144"
}
    
var $modal = $(".modal");
var $modal_content = $(".modal-content");
var $closeButton = $(".close-button");
var $message = $('#message');

$("canvas").on('click',function(){
    ShowProblemMessage( $(this).attr('id') );
    
});


//modal
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
//-----


//fetch api's
function LoadData(id){
    $message.empty();
    //get data
    return res;
}

function Post(id){

}
//------



})



