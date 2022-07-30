function insrt(num){
    $(".result").val($(".result").val()+num);
}

function equal(){
    $(".result").val(eval($(".result").val()));
}

function del(num){
    value= $(".result").val()
    $(".reuslt").val(value.substring(0,value.lenght - 1))
}


function c(){
    $(".result").val("");
}











//  $(document).ready (function insrt(num){
// //  {$(".result")(function insert(num )
//     $(".result").val ($(".resuit").val() + num );

//     })

//     // $(".delete").click(function(){
//     //     $(".result").val("")
//     // })
    

//     // $(".designs").click(function(){
//     //     $(".result").val(eval($(".result").val()))
//     // })




// // })