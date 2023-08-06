
burger = document.querySelector('.burger');
navigation = document.querySelector('.navigation');
header = document.getElementsByTagName('header');


burger.addEventListener("click",()=>{


    if(navigation.style.left != "-100%")
    {
        navigation.style.left = "-100%";
    }
    else{
        navigation.style.left = "0";
    }
});