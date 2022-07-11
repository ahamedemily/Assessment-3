console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	alert('form has been submitted')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
document.getElementById("catImg").addEventListener("mouseover", function(){
	alert("You're a ray of sunshine!")
})