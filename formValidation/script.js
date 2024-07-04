/////controle de saisie avec JS
///1er methode
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (password.length < 8) {
    document.getElementById(
      "error"
    ).innerHTML += `<p>password needs to be longer than 8</p>`;
  } else if (!email.includes("@")) {
    document.getElementById(
      "error"
    ).innerHTML += `<p>email needs to be a valid form</p>`;
  } else {
    document.getElementById("errors").innerHTML = ``;
    alert("you are ready to login");
  }
}




/////////////////or 
//////////2eme methode


let errors = [];
function validation(){
    errors = []
    document.getElementById("errors").innerHTML = ``
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (password.length < 8) {
      errors.push("password should be longer thann 8");
    }
  
    if (!email.includes("@")) {
      errors.push("email should be in a valid format ");
    }
  
    if (errors.length) {
      for (var i = 0; i < errors.length; i++) {
        document.getElementById("errors").innerHTML = `<p>${errors[i]}</p>`;
      }
      return false 
    } else {
      errors=[]
      document.getElementById("errors").innerHTML = ``
      return true 
    }
}

function login() {
    if (validation){
    alert("you are ready to login");
}
}