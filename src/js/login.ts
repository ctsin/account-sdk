import { login } from "./sdk/login/init";

login({
  container: document.getElementById("login-container"),
  success() {
    location.replace("profile.html");
  }
});
