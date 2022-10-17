const coderun = document.getElementById("coderun");
const terminal = document.querySelectorAll(".terminal")[0];
const terminal_border = document.querySelectorAll(".terminal_border")[0];
const victim = document.getElementById("victim");
const fetcha = document.getElementById("para-fetch");
const userfound = document.getElementById("para-username_search");
const datafetch = document.getElementById("para-hacking_user");
const successfetch = document.getElementById("para_success");
const done = document.getElementById("para_done");

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

 victim.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    setTimeout(() => {
      victim.style.color = "red";
      hacked();
    }, 1000);
  }
});

//Promises!
async function hacked() {
  let fetchdata = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Fetching data...`);
    }, 2000);
  });
  let userid = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Username ${victim.value} found.`);
    }, 6000);
  });
  let data = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Username ${victim.value} data fetched! Cracking in progress...`);
    }, 8000);
  });
  let mailed = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        (done.innerHTML = "Hack Success!"),
        alert(
          ` ${victim.value}'s UserID & Password has been mailed. \n (Yeh baatein batayi nahi jaati nazar lag jaati hai.)`
        )
      );
    }, 12000);
  });

  let fetched = (fetcha.innerHTML = await fetchdata);
  let user = (userfound.innerHTML = await userid);
  let userdata = (datafetch.innerHTML = await data);
  let success = (done.innerHTML = await mailed);
}
