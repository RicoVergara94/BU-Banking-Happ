// const { Form } = require("react-router-dom");

export default function UsernameAndPasswordForm() {
  return (
    <form>
      <div class="container">
        <label>Username : </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          required
        />
        <label>Password : </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          required
        />
        <button type="submit">Login</button>
        {/* <input type="checkbox" checked="checked"> Remember me    */}
        <button type="button" class="cancelbtn">
          {" "}
          Cancel
        </button>
      </div>
    </form>
  );
}
