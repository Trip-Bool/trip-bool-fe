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
    <button onClick={showPreview}>See A Preivew Of Your Trips</button>
    {preview ?
      <PreviewTrips trips={props.trips}/>
    :
      <p></p>
    }
    </div>
  )
}