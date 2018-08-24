import { login } from "./sdk/login/init";

login({
  container: document.getElementById("login-container"),
  success: function() {
    location.replace("profile.html");
  }
});
