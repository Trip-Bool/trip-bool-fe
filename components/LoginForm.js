export default function LoginForm({ handleLogin }) {

  function login(event) {
    event.preventDefault()
    let loginInfo = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    handleLogin(loginInfo);
  }

  return(
   <form onSubmit={login}>
    <fieldset>
      <legend>Please Log In</legend>
      <label htmlFor="username">Username</label>
      <input name="username" />
      <label htmlFor="password">Password</label>
      <input name="password" />
      <button type="submit">Log In</button>
    </fieldset>
   </form>
  )
}