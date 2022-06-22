/* eslint-disable @next/next/no-html-link-for-pages */

export default function Header({ username }) {
  return(
    <div className="flex justify-start justify-between bg-cyan-100 border-b-2 ">
      <h1 className="text-3xl p-3">Tripin</h1>
      <h2 className="mx-3">Welcome {username || ""}</h2>
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>
    </div>
  )
}