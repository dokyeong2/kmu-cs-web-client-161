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
 var a = confirm("������ ȸ������ �Ͻðڽ��ϱ�?");
 if(a==true){
  alert("ȸ������â�� �ҷ��ɴϴ�.");
  $('#joined').show();
  $('#idnow').focus();

}
 else{
   alert("ȸ�������� ����մϴ�.");
 }
}


$('#sub_bt').click(function (event){
 if($("input[name=n_check]").is(":checked") ){
    alert("���������� ȸ�������� �Ϸ�Ǿ����ϴ�^^");
    $('#joined').hide();
 }
 else{
   alert('ȸ������ ����� �����ϼž� ���� �����մϴ�.');
}

});


$('#res_bt').click(function (event){
 alert("�Է��Ͻ� ��������� �����մϴ�. \n�ٽ� �Է����ּ���.");
 $('input').val("");
});


$('.map').click(function (event){
 $("html, body").animate({scrollTop:0}, 'slow');
});

