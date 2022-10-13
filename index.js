const coderun = document.getElementById("coderun");
const terminal = document.querySelectorAll(".terminal")[0];
const terminal_border = document.querySelectorAll(".terminal_border")[0];

//Function to update shell name and user login.
let date = new Date();
const nameimplement = () => {
  terminal_border.innerHTML = `${user}@${user}-VirtualBox:~ ${date}`;
  coderun.innerHTML = `${user}@${user}-VirtualBox:~$`;
};

let user = "";
while (user.length < 1) {
  user = prompt("Enter your name?");
  if (user == "") {
    alert("Enter your name properly!");
  } else {
    nameimplement();
    alert("Admin identified.");
  }
}

let parafetch =document.getElementById ("para-login")
const login = setTimeout(() => {
parafetch.innerHTML = "Login Success!"
}, 2000);


login()