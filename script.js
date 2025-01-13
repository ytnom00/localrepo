let btn=document.querySelector("#mode");
let curmode="light";
btn.addEventListener("click",()=>{
    if(curmode==="light"){
        document.body.classList.add("dark") ;

    curmode="dark";
    document.body.classList.remove("light");
}
else if(curmode=="dark"){

    document.body.classList.add("light");
    curmode="light";
    document.body.classList.remove("dark");
}
console.log(curmode);
});
                            
