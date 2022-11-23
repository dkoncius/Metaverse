const header = document.querySelector("header")
const tabs = document.querySelectorAll(".tab")
for(let x of tabs){
    x.style.display = "none"
}

function showTab(tab){
    // Show functions
    header.style.display = "none"
    for(let x of tabs){
        x.style.display = "none"
        x.style.opacity = 0
    }

    let selectedTab = document.getElementById(tab)
    selectedTab.style.display = "block"

    // Animation
    setTimeout(function(){
        selectedTab.style.transition = "opacity 1s"
        selectedTab.style.opacity = 1
    }, 100)
}

function closeTab(event){
    event.currentTarget.parentNode.style.display = "none"
    header.style.display = "block"
}

// Intro animacija
const intro = document.querySelector(".intro")

setTimeout(function(){
    intro.style.height = "200px"
}, 100)

setTimeout(function(){
    intro.style.opacity = 1;
}, 400)