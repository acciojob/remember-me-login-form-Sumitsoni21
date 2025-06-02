//your JS code here. If required.



const usernameInp = document.getElementById("username");
const passwordInp = document.getElementById("password");
const checkboxInp = document.getElementById("checkbox");
const subBtn = document.getElementById("submit");
const existBtn = document.getElementById("existing");

const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");


if(savedUsername && savedPassword){
	existBtn.style.display= "inline-block";
}
document.getElementById('loginform').addEventListener("submit", function(e){
	e.preventDefault();
	const username = usernameInp.value;
	const password = passwordInp.value;
	alert(`Logged in as ${username}`);

	if(checkboxInp.checked){
		localStorage.setItem("username", username);
		localStorage.setItem("password",password);
		existBtn.style.display="inline-block";
	}else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existBtn.style.display = "none";
      }
})

existBtn.addEventListener("click",()=>{
	const savedUsername = localStorage.getItem("username");
	if(savedUsername){
	alert("Logged in as " + savedUsername);
	}
})





