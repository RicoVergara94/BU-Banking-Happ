// const { Form } = require("react-router-dom");

export default function UsernameAndPasswordForm() {
  // I need to make sure that the username and password are found
  const handleClick = () => {
    const username = document.getElementById("username_input");
    const password = document.getElementById("password_input");
    console.log(username.value);
    console.log(password.value);
  };
  return (
    <form>
      <div class="container">
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
        <button type="submit" onClick={handleClick}>
          Login
        </button>
        {/* <input type="checkbox" checked="checked"> Remember me    */}
        <button type="button" class="cancelbtn">
          {" "}
          Cancel
        </button>
      </div>
    </form>
  );
}
