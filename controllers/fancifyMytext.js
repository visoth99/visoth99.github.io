
function bigger(){
    document.getElementById("textArea").style.fontSize="24pt";
}
function handlerOnChange(x){
    const hook=(x,y,z)=>{
        document.getElementById("textArea").style.fontWeight=x;
        document.getElementById("textArea").style.color=y;
        document.getElementById("textArea").style.textDecoration=z;
    }
    if(x.id==="FancyShmancy"){
        hook("bold","blue","underline");
    }else{
        hook(null,null,null);
    }
}
function moo(){
    let text=document.getElementById("textArea").value.toUpperCase().replaceAll("-MOO","-Moo");
    let words=text.split(".");
    text=words.join("-Moo");
    document.getElementById("textArea").value=text;
}

