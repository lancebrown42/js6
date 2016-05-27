var editButt = document.getElementById('edit')
var form = document.querySelector('form')
var element = document.getElementById('profileData')
// var submit = document.querySelector('submit')

function toggle(evt){
	if (evt.target.id=='edit'){
		// console.log(evt)
		form.style = 'display: block'
		editButt.style = 'display: none'
	}
	else{
		// console.log(evt)
		evt.preventDefault()
		form.style = 'display: none'
		editButt.style = 'display: initial'

	}
}
function fill(evt){
	// console.log(evt.target)
	// console.log(evt.target.constructor)
	// console.log(evt.target.length)

	// console.log(evt.target[0].placeholder)
	// element.textContent = " "
	for(var i = 0; i < evt.target.length-1; i++){
		element.innerHTML += '<p>'+evt.target[i].placeholder+': '+evt.target[i].value+'</p>'
		

	}
}
editButt.addEventListener('click', toggle)
// form.submit.preventDefault()
form.addEventListener('submit',toggle)
form.addEventListener('submit',fill)
