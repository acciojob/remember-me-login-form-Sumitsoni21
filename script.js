//your JS code here. If required.



const usernameInp = document.getElementById("username");
const passwordInp = document.getElementById("password");
const checkboxInp = document.getElementById("checkbox");
const subBtn = document.getElementById("submit");
const existBtn = document.getElementById("existing");

const savedUsername = localStorage.getItem("savedUsername");
const savedPassword = localStorage.getItem("savedPassword");


if(savedUsername && savedPassword){
	existBtn.style.display= "inline-block";
}
document.getElementById('loginform').addEventListener("submit", function(e){
	e.preventDefault();
	const username = usernameInp.value;
	const password = passwordInp.value;
	alert(`Logged in as ${username}`);

	if(checkboxInp.checked){
		localStorage.setItem("savedUsername", username);
		localStorage.setItem("savedPassword",password);
		existBtn.style.display="inline-block";
	}else {
        localStorage.removeItem("savedUsername");
        localStorage.removeItem("savedPassword");
        existBtn.style.display = "none";
      }
})

existBtn.addEventListener("click",()=>{
	const savedUsername = localStorage.getItem("savedUsername");
	if(savedUsername){
	alert("Logged in as " + savedUsername);
	}
})





