
export default function Header({ username }) {
  return(
    <>
    <h2>Welcome {username || ""}</h2>
    <h1>Tripin</h1>
    <a href="/api/auth/login">Login</a>
    <a href="/api/auth/logout">Logout</a>
    </>
  )
}