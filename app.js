 let display=document.getElementById("dis");
 let heading=document.getElementById("heading") ;
 let  count=0;

 function plus(){

    if (count<10){
      
    display.innerHTML=count+=1;
    }
    else{
        alert("you cant increase up to 10");
        heading.innerHTML="you cant increase up to 10"
    }

 }
function minus(){
    if(count>0)
    display.innerHTML=count-=1;
else{
    alert("you cant decrease after 0");
    heading.innerHTML="you cant decrease after 10"
}
}
function reset(){
    count=0;
    display.innerHTML=count;
}