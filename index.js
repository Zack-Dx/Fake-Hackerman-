const coderun = document.getElementById("coderun");
const terminal = document.querySelectorAll(".terminal")[0];
const terminal_border = document.querySelectorAll(".terminal_border")[0];

//Function to update shell name and user login.
let date = new Date();
const nameimplement = () => {
  terminal_border.innerHTML = `${user}@${user}-VirtualBox:~ ${date}`;
  coderun.innerHTML = `${user}@${user}-VirtualBox:~$`;
};

let user = null;
while (user == null || user == "") {
  user = prompt("Enter your name to login?");
  if (user == null || user == "") {
    alert("No access without Username!");
  } else {
    alert("login success!");
    nameimplement();
  }
}
