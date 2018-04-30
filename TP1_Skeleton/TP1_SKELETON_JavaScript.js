function Open_AddToDo(){
  document.getElementById('modal').style.display = "block";
}

function Close_AddToDo(){
  document.getElementById('modal').style.display = "none";
}

function Add_AddToDo(){
  var content_AddToDo = document.getElementsByClassName('content_AddToDo');
  var temp1 = content_AddToDo[0].value;
  var temp2 = content_AddToDo[1].value;
  var temp3 = content_AddToDo[2].value;
  alert("day : "+temp1+"\ntitle : "+temp2+"\ncontent : "+temp3);
  Insert_AddToDo(temp1, temp2, temp3);
  Close_AddToDo();
}

function Insert_AddToDo(temp1, temp2, temp3){
  
}
