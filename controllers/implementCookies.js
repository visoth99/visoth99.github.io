
function handleOnChange(x){
    if(x.value !== "Select"){
        document.body.style.backgroundColor=x.value;
        document.cookie="value="+x.value
    }else{
        document.body.style.backgroundColor="white";
        document.cookie="value=Null";
    }
    const split=document.cookie.split("=");
    document.getElementById("cookieResult").innerText=split[1];
}
