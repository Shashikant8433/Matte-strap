const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

const bar1 = document.getElementsByClassName('bar1')[0]

const bar2 = document.getElementsByClassName('bar2')[0]

const bar3 = document.getElementsByClassName('bar3')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    bar1.classList.toggle('line1')
    bar2.classList.toggle('line2')
    bar3.classList.toggle('line3')
})

