
var nameInput = document.getElementById("input1")
var emailInput = document.getElementById("input2")
var passwordInput = document.getElementById("input3")
var uEmail = document.getElementById("inpt1")
var uPass = document.getElementById("inpt2")

//sign up validation
var users = []; 

if (localStorage.getItem("users")!= null) {
    users = JSON.parse(localStorage.getItem("users"))
}
var lol =document.getElementById("butn1");
if (lol) {
    lol.addEventListener("click",function () {
    
        if (nameInput.value === "" || emailInput.value ==="" || passwordInput.value ==="") {
             
                document.querySelector("p").innerHTML =` <span class="text-danger fs-2 mt-4">All inputs required</span>`
         } else{
                if (isExist (nameInput.value)) {
                    document.querySelector("p").innerHTML =` <span class="text-danger fs-3 mt-4">The email exists</span>`
               
                 }else{
                    var user = {
                        name : nameInput.value,
                        email : emailInput.value,
                        password : passwordInput.value
                    }
                    users.push(user)
                    localStorage.setItem("users",JSON.stringify(users) )
                    document.getElementById("text").innerHTML= `<span class="text-success fs-2 mt-4">success</span>`
                    location.href = "index.html","_self";

                    clear()
                   }
             }
    })
}


function clear() {
    nameInput.value = "";
    emailInput.value= "";
    passwordInput.value= "";
}

function isExist(index) {
    for (var i = 0; i < users.length; i++) {
      if (users[i].name.toLowerCase().includes(index.toLowerCase())) {
        return true
      } 
        
    }
}

//log in///

function login(ind) {
    
    var tEmail = uEmail.value;
    var tPass = uPass.value;
if (empty()==false) {
    document.querySelector("p").innerHTML = `<span class="text-danger mt-4 fs-3">All input is Required</span>`
}else{
    
     for (var i = 0; i < users.length; i++) {
     if (users[i].email.toLowerCase() == tEmail.toLowerCase() && users[i].password.toLowerCase() == tPass.toLowerCase()) {
        

        var result = (users[i].name);
        localStorage.setItem("result",JSON.stringify(result) )
    location.href = "welcome.html","_self";

    
    
    break;
     }   else{
        document.querySelector("p").innerHTML = `<span class="text-danger mt-4 fs-3">Invalid email or Password</span>`
     }
      }
  
   }
 }
 function empty() {
    if (uEmail.value == "" || uPass.value== "") {
        return false
    }else{
        return true
    }
 }
 //home//
  function welcome() {
   document.getElementById("welcomeUser").innerHTML = `<h1> Welcome ${JSON.parse(localStorage.getItem("result"))} </h1> `;
  }
 
  function logout() {
    localStorage.removeItem("result");
  }