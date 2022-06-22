
export default function Header({ username }) {
  return(
    <>
    <h2 className="text-3xl font-bold underline">Welcome {username || ""}</h2>
    <h1>Tripin</h1>
    </>
  )
}