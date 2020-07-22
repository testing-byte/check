function checkFname(){
	var name = document.getElementById("fname").value;
	var regex = /^[A-Za-z]{3,}$/;
	if(regex.test(name)){
		alert("First name is valid");
		return true;
	}
	else{
		alert("First name is invalid");
	}
}
function checkLname(){
	var name = document.getElementById("lname").value;
	var regex = /^[A-Za-z]{3,}$/;
	if(regex.test(name)){
		alert("Last name is valid");
		return true;
	}
	else{
		alert("Last name is invalid");
	}
}
function checkTel(){
	var name = document.getElementById("phone").value;
	var regex = /^[0-9]{10}$/;
	if(regex.test(name)){
		alert("Phone no is valid");
		return true;
	}
	else{
		alert("Phone no is invalid");
	}
}
function checkAge(){
	var name = document.getElementById("age").value;
	var regex = /^[0-9]{1,2}$/;
	if(regex.test(name)){
		alert("Age is valid");
		return true;
	}
	else{
		alert("Age is invalid");
	}
}
function checkFill(){
	if (!checkFname())
		return;
	if (!checkLname())
		return;
	if (!checkTel())
		return;
	if (!checkAge())
		return;
	var m = document.getElementById("male").checked;
	var f = document.getElementById("female").checked;
	var o = document.getElementById("others").checked;
	if(m==false&&f==false&&o==false)
		alert("Please Select gender");
	else
		alert("Congrats Form Submitted");
}