function load () {
		document.getElementById('register').style="display:none;";

	}
	function register () {
		document.getElementById('register').style="height:100%;";
		document.getElementById('login').style="display:none";

	}

	function submit (){
		let email = document.getElementById('email1').value
		let name = document.getElementById('name1').value
		let password = document.getElementById('password1').value

		let data = {
			name: name,
			email: email,
			password: password
		}

		let result = registerUser(data)
	}

	function loginAUser (){
		let email = document.getElementById('email').value
		let password = document.getElementById('password').value

		let data = {
			email: email,
			password: password
		}

		let result = loginUser(data)

	}

	function login () {
		document.getElementById('register').style="display:none;";
		document.getElementById('login').style="display:block;";

	}
	function check () {

		var che= document.getElementById('check').value;
		if(che=="Login")
		{
		document.getElementById('register').style="display:none;";
		document.getElementById('login').style="display:block;";;
		}
		else
		{
			document.getElementById('register').style="height:100%;";
			document.getElementById('login').style="display:none";
		}

	}
	function validation()
	{

		var check=document.getElementById('email').type;
		if(check=="email")
		{
			var value=document.getElementById('email').value;
			if(value=="")
			{

				document.getElementById('error').innerHTML="Incorrect Email Address";

			}
		}
	}

	function displayMsg(msg) {
		document.getElementById('infoText').innerHTML = msg
		document.getElementById('infoBar').style="display:block";
		setTimeout(function(){
			document.getElementById('infoBar').style="display:none";
		}, 2000);
	}

	function clearText() {
		document.getElementById('email1').value = ""
		document.getElementById('name1').value = ""
		document.getElementById('password1').value = ""
		document.getElementById('email').value = ""
		document.getElementById('password').value = ""
	}
