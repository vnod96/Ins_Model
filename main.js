var color="#de2420";
displayBlock(1);
var fullName;
$('#next1btn').click(function(){
  fullName = $('#fullName').val();
  $('#fullnamediv').html(fullName);
  displayBlock(2);
});
$('#next2btn').click(function(){
  displayBlock(3);
});
$('#prev2btn').click(function(){
  displayBlock(1);
});
$('#prev3btn').click(function(){
  displayBlock(2);
});




function displayBlock(i){
  if(i==1){
    $('#firstpage').css('color',color);
    $('#secondpage').css('color','grey');
    $('#thirdpage').css('color','grey');
    $('#firstpagediv').show();
    $('#secondpagediv').hide();
    $('#thirdpagediv').hide();
  }
  if(i==2){
    $('#firstpage').css('color','grey');
    $('#secondpage').css('color',color);
    $('#thirdpage').css('color','grey');
    $('#firstpagediv').hide();
    $('#secondpagediv').show();
    $('#thirdpagediv').hide();
  }
  if(i==3){
    $('#firstpage').css('color','grey');
    $('#secondpage').css('color','grey');
    $('#thirdpage').css('color',color);
    $('#firstpagediv').hide();
    $('#secondpagediv').hide();
    $('#thirdpagediv').show();
  }
}
