
//navigation bar

const body =document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark_light"),
      searchToggle = document.querySelector(".sidebarOpen"),
      sidebarOpen  = document.querySelector(".dark_light"),
      sidebarClose = document.querySelector(".sidebarClose");


     // let getMode = localStorage.getItem("mode");
     //     if(getMode && getMode ==="dark=mode"){
     //       body.classList.add("dark")
 //  }
          

      //js to toggle dark and light mode
        modeToggle.addEventListener("click", ()=>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        //js to keep user selected mode even when page refresh or file reopen
        if(!body.classList.contains("dark")){
          localStorage.setItem("mode", "light-mode");
        }else{
          localStorage.setItem("mode", "dark-mode")
        }

      });




       //js to toggle search box
       modeToggle.addEventListener("click", ()=>{
        searchToggle.classList.toggle("active");
      });

      //js to toggle the sidebar
sidebarOpen.addEventListener("click", ()=>{
  nav.classList.add("active");
});

body.addEventListener("click", e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active")
    }
});



       


        








//javascript for login form//

const formOpenBtn = document.querySelector("#form_open"),
home = document.querySelector(".home"),
formContainer = document.querySelector("form_container"),
formCloseBtn = document.querySelector("form_close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelector(".pw_hide");

formOpenBtn.addEventListener("click", ()=>home.classList.add("#show"));
formCloseBtn.addEventListener("click", ()=>home.classList.remove("#show"));

//pwShowHide.forEach((icon)=>{
  //  icon.addEventListener("click",()=>{
    //    let getPwInput = icon.parentElement.querySelector("input");
      //  if(getPwInput.type==="password"){
        //    getPwInput.type = "text";
          //  icon.classList.replace("uil-eye-slash", "uil-eye");
       // }else{
         //   getPwInput.type = "password";
           // icon.classList.replace("uil-eye", "uil-eye-slash");
       // }
    //});
//});

//signupBtn.addEventListener("click", (e)=>{
  //  e.preventDefault();
   // formContainer.classList.add("active");
//});
//loginBtn.addEventListener("click", (e)=>{
  //  e.preventDefault();
  //  formContainer.classList.remove("active");
//});




//select all filter buttons and filterable cards
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards card");

//Define the filterCards fuction
const filterCards = e =>{
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  //iterate over each filterable card
  filterableCards.forEach(card => {
    //Add "hide" class to hide the card initially
    card.classList.add("hide");
    //check if the card matches the selected filter or "all" is selected
    if(card.dataset.name === e.target.dataset.name || e.target.dataset.name ==="all"){
      card.classList.remove("hide")
    }
  })
};

//Add click event listener to each filter button
filterButtons.forEach(button => button.addEventListener("click", filterCards))