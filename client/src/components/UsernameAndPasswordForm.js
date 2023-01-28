// const { Form } = require("react-router-dom");

export default function UsernameAndPasswordForm() {
  // I need to make sure that the username and password are found
  const handleClick = () => {
    const username = document.getElementById("username_input");
    const password = document.getElementById("password_input");
    console.log(username.value);
    console.log(password.value);
    const reqBody = JSON.stringify({
      username: username.value,
      password: password.value,
    });
    console.log(reqBody);
    fetch("http://localhost:3000", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: reqBody,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log("there was an error"));
  };
  return (
    <form>
      <div class="submit-container">
        <label>Username : </label>
        <input
          id="username_input"
          type="text"
          placeholder="Enter Username"
          name="username"
          required
        />
        <label>Password : </label>
        <input
          id="password_input"
          type="password"
          placeholder="Enter Password"
          name="password"
          required
        />
        <input
          type="button"
          onClick={handleClick}
          id="submit-button"
          value="Submit"
        />
      </div>
    </form>
  );
}
