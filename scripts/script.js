const toggle = document.querySelector(".toggle")

function toggleMenu(){
    const toggle = document.querySelector("nav", "content");

    nav.classList.toggle('active')
    content.classList.toggle('active')
}

toggle.addEventListener('click', toggleMenu)
