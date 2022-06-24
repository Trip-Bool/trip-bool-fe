import CreateTripForm from "./CreateTripForm";
import PreviewTrips from "./PreviewTrips"
import { useState } from 'react';


export default function Tripin(props) {
  const [preview, setPreview] = useState(false)
  function showPreview() {
    setPreview(!preview)
  }

  return(
    <div>
    <CreateTripForm handleTripCreation={props.handleTripCreation}/>
    <button className="bg-gray-300 w-1/4 my-7 mx-7 p-5 rounded-md" onClick={showPreview}>See A Preivew Of Your Trips</button>
    {preview ?
      <PreviewTrips trips={props.trips}/>
    :
      <p></p>
    }
    </div>
  )
}