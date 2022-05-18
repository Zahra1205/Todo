var task_name=document.getElementById("name_of_task").value;
var date=document.getElementById("date_time").value;
var div_color =document.getElementById("color").value;
function Add(){
    document.getElementById("add").style.display="block";
}
function save(){
    if(document.getElementById("name_of_task").value.length==0){
     alert("Please add a task");
     console.log("task is missing");
    }
    if(document.getElementById("date_time").value.length==0){
        alert("Please add a date/time");
        console.log("Date/time is missing");
       }
       if(document.getElementById("color").value.length==0){
        alert("Please add a color(green, red, yellow, blue)");
        console.log("color is missing");
       }
       if(div_color=="green"){
          document.getElementById("green").innerHTML="<h4>"+task_name+"</h4>";
       }
    }
    