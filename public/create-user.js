const createUserPassword = document.querySelector("#password");
const createUserConfirmPassword = document.querySelector("#confirm-password");

const createUser = document.querySelector("#create-user-button");

createUser.addEventListener("click", (e) => {
  createUserConfirmPassword.setCustomValidity("");
  if (createUserPassword.value !== createUserConfirmPassword.value) {
    e.preventDefault();
    createUserConfirmPassword.setCustomValidity("Passwords don't match");
  }
  createUserConfirmPassword.reportValidity();
});
