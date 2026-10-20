const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("loginName").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!name || !password) {
    alert("Please enter your name and password!");
    return;
  }

  document.querySelector(".login").style.display = "none";
  document.getElementById("welcome").style.display = "block";
  document.getElementById("welcomeText").textContent = `${name}, you are now logged in.`;
});
