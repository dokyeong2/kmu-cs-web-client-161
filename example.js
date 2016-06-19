document.oncontextmenu = new Function("return false");


var target = document.getElementById('ad');

function show_ad () {
  target.style.display='block';
 $("html, body").animate({scrollTop:300}, 'slow');
}

setTimeout(show_ad, 5000);


function hide_ad(){
  target.style.display='none';
}


function join_click(){
 var a = confirm("정말로 회원가입 하시겠습니까?");
 if(a==true){
  alert("회원가입창을 불러옵니다.");
  $('#joined').show();
  $('#idnow').focus();

}
 else{
   alert("회원가입을 취소합니다.");
 }
}


$('#sub_bt').click(function (event){
 if($("input[name=n_check]").is(":checked") ){
    alert("성공적으로 회원가입이 완료되었습니다^^");
    $('#joined').hide();
 }
 else{
   alert('회원가입 약관에 동의하셔야 가입 가능합니다.');
}

});


$('#res_bt').click(function (event){
 alert("입력하신 모든정보를 삭제합니다. \n다시 입력해주세요.");
 $('input').val("");
});


$('.map').click(function (event){
 $("html, body").animate({scrollTop:0}, 'slow');
});

