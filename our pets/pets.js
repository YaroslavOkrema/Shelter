/*NAV TOGGLE*/
const burger = document.getElementById("burger")
const menu = document.getElementById("menu")
burger.onclick = function(event){
    
    if(burger.classList.contains('active')){
        burger.classList.remove('active');
        menu.style.display = 'none';
    }
    else{
        burger.classList.add('active');
        menu.style.display = 'block';
    }
}