var modal = $(".modal");
var closeButton = $(".close-button");


$("canvas").on('click',function(){
    ShowProblemMessage( $(this).attr('id') );
    
});


function ShowProblemMessage(id){
    modal.toggleClass(".show-modal")
}