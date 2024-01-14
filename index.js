console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("form submit");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function handleMouseOver(evt){
	evt.preventDefault();
	alert("you are so cool");
}

let pic = document.querySelector('#picture')
pic.addEventListener("mouseover", handleMouseOver)