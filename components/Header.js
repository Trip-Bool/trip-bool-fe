
export default function Header({ username }) {
  return(
    <>
    <h2>Welcome {username || ""}</h2>
    <h1>Tripin</h1>
    </>
  )
}