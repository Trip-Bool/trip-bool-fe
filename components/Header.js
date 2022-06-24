/* eslint-disable @next/next/no-html-link-for-pages */

export default function Header(props) {
  return(
    <div className="flex justify-start justify-between bg-cyan-100 border-b-2 ">
      <h1 className="text-3xl p-3">Trippin</h1>
      {/* TODO: In line 8 add the userame to the welcome message */}
      <button className="bg-gray-300 h-1/2 m-auto p-2 rounded-md" onClick={props.conditionalRender}>Detail</button>
      {!props.user ?
        <button>
          <a className="bg-gray-300 p-2 mr-3 rounded-md" href="/api/auth/login">Login</a>
        </button>
        :
        <div className="flex">
          <button>
            <a className="bg-gray-300 p-2 mr-3 rounded-md" href="/api/auth/logout">Logout</a>
          </button>
          <img className="h-1/2 m-auto"src={props.user.picture} alt="user pciture"></img>
        </div>
      }
    </div>
  )
}