//your JS code here. If required.



const usernameInp = document.getelementById("username");
const passwordInp = document.getelementById("password");
const checkboxInp = document.getelementById("checkbox");
const subBtn = document.getelementById("submit");
const existBtn = document.getelementById("existing");

const savedUsername = localStorage.getItem("savedUsername");
const savedPassword = localStorage.getItem("savedPassword");


if(savedUsername && savedPassword){
	existBtn.style.display= "inline-block";
}
document.getelementById('loginform').addEventListener("submit", function(e){
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
        existingBtn.style.display = "none";
      }
})

existBtn.addEventListener("click",()=>{
	const savedUsername = localStorage.getItem("savedUsername");
	if(savedUsername){
	alert("Logged in as" + savedUsername);
	}
})





