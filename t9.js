$(document).ready(function(){
    $("#phone").find("button").mouseup(function(event){
        var button_pressed = $(event.currentTarget).data("value")
        $("#result").val(t9($("#result").val(),button_pressed))
    })
})
function t9(text,button_pressed){
 if(!$("#hid").length)
 {  
  var x=document.createElement("INPUT");
  x.setAttribute("type","hidden");
  x.setAttribute("id","hid");
  document.body.appendChild(x);
  x.value=event.timeStamp;
 }
 else
 {
  var now=+new Date();
  var diff=now-$("#hid").val();
  document.getElementById("hid").value=now;
 }         
 var newval=$(event.currentTarget).children().text();
  newval=newval.split(/\s+/);
  var i=0;
 if(button_pressed!=0 && button_pressed<=9)
  {
     if(diff>3500)
        return text+button_pressed;
     if(!diff||diff>2000)
      return text+newval[i];
     else
     {
      if(newval[i]==text[text.length-1])
      {
       text=text.split('');
       text.pop();
       var test=text.join('');
       return test+newval[i+1];  
      }
      else if(newval[i+1]==text[text.length-1])
      {
       text=text.split('');
       text.pop();
       var test=text.join('');
       return test+newval[i+2];  
      }
      else if(newval[i+2]==text[text.length-1]&&newval.length==4)
      {
       text=text.split('');
       text.pop();
       var test=text.join('');
       return test+newval[i+3];  
      }
      else  if(newval[i+2]==text[text.length-1]||newval[i+3]==text[text.length-1])
      {
       text=text.split('');
       text.pop();
       var test=text.join('');
       return test+newval[i];
      }
     else
      return text+newval[i]
   }
 }
 else
    return text+button_pressed;
}