
// var building = document.querySelector('canvas')
// var ctx = building.getContext('2d');
// var canvasContainer = document.querySelector('canvasContainer');


const $Main_Building = $('#Main_Building');
const $Finance_Building = $('#Finance_Building');
const $Projects_Building = $('#Projects_Building');
const $Buildings_Container_Frame =  $("#Buildings_Container_Frame");
const $CeatePost = $("#createPost");
const $modalPost = $(".modal-post");

$Main_Building.on('click' , function(){
           $Buildings_Container_Frame.attr('src','./Main_Building/index.html');
})

$Finance_Building.on('click', function(){
    $Buildings_Container_Frame.attr('src','url')
});

$Projects_Building.on('click', function(){
    $Buildings_Container_Frame.attr('src','url')
});

$CeatePost.on('click', function(){
  $modalPost.toggle("fast" , ShowModalPost());
})

function ShowModalPost(){
    $modalPost.addClass('show-post') 
}



function CreatePost(){
         
}




