let loading = document.querySelector(".overlay")

let loadContent = document.querySelector(".loading div h1")

let loadingContent = document.querySelector(".loading")

let header = document.querySelector(".head")

let main = document.querySelector(".main")

document.addEventListener('DOMContentLoaded', function() {  
    setTimeout (() => {
        loading.style.opacity = '0'
        loading.style.visibility = 'hidden'
        var typed = new Typed('.loading div h1', {
        strings: ["FRONT-END DEVELOPER", "YOUSSIF SALEH", "FRONT-END DEVELOPER"],
        typeSpeed: 50,
        backDelay: 3000,
        startDelay: 500,
        showCursor: false,
    })
    }, 2000)

    setTimeout (() => {
        loadContent.style.transform = 'translateY(0)'
    }, 2600)

    setTimeout (() => {
        loadingContent.style.opacity = '0'
        loadingContent.style.visibility = 'hidden'
    }, 10000)

    setTimeout (() => {
        header.style.opacity = '1'
        main.style.opacity = '1'
    }, 11000)

})

let menuOpen = document.querySelector(".open")

let menuClose = document.querySelector(".menu i.fa-plus")

let Menu = document.querySelector(".menu")

let menuItems = document.querySelectorAll("header .head .menu ul a")

menuOpen.onclick = function() {
    Menu.style.right = "0"
    menuOpen.style.rotate = "45deg"
    menuClose.style.rotate = "90deg"
    setTimeout(() => {
        menuItems.forEach(menu => {
            menu.style.marginLeft = "0"
        })
    }, 200)
}

menuClose.onclick = function() {
    Menu.style.right = "-100%"
    menuClose.style.rotate = "45deg"
    menuOpen.style.rotate = "0deg"
    menuItems.forEach(menu => {
        menu.style.marginLeft = "700px"
    })
}
