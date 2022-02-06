 const body = document.querySelector("body"),
	sidebar = body.querySelector(".sidebar"),
	toggle = body.querySelector(".toggle"),
	searchBtn = body.querySelector(".search-box"),
	modeSwtich = body.querySelector(".toggle-switch"),
	modeText = body.querySelector(".mode-text");

modeSwtich.addEventListener("click", () => {
	body.classList.toggle("dark");
})

searchBtn.addEventListener("click", () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click", () =>{
    body.classList.toggle("dark");
    
    if (body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    } else {
        modeText.innerText = "Dark mode";
        
    }
});