let color = document.querySelector('#color')
let place = document.querySelector('#place')
let ritual = document.querySelector('#ritual')

color.addEventListener('click', (evt) => {
    evt.preventDefault();
    alert("pink")
})

place.addEventListener('click', (evt) => {
    evt.preventDefault();
    alert("home")
})

ritual.addEventListener('click', (evt) => {
    evt.preventDefault();
    alert("sleep")
})

