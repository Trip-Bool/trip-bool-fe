
export default function Header({ username }) {
  return(
    <div className="flex justify-start justify-between ba bg-amber-100">
      <h2>Welcome {username || ""}</h2>
      <h1 className="text-3xl p-5">Tripin</h1>
      <img></img>
    </div>
  )
}