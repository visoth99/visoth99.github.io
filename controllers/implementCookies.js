
function handleOnChange(x){
    if(x.value !== "Select"){
        document.cookie="value="+x.value
    }else{
        document.cookie="value=Null";
    }
    const split=document.cookie.split("=");
    document.getElementById("cookieResult").innerText=split[1];
    if(split[1] === "Null"){
        document.body.style.backgroundColor="white";
    }else{
        document.body.style.backgroundColor=split[1];
    }
}
