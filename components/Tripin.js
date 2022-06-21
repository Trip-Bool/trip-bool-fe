import CreateTripForm from "./CreateTripForm";
import PreviewTrips from "./PreviewTrips"
import { useState } from 'react';

export default function Tripin() {

  const [trips, setTrips] = useState([])
  function handleTripCreation(trip){
    // tripdata = axios.get();//call out api with user input - assuming from this point forward that our api is return a list of object trips
    setTrips(tripdata);
  }

  return(
    <>
    <CreateTripForm handleTripCreation={handleTripCreation}/>
    <PreviewTrips trips={trips}/>
    </>
  )
}