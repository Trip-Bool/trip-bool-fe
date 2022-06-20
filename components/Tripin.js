import CreateTripForm from "./CreateTripForm";
import { useState } from 'react';

export default function Tripin() {

  const [tripInfo, setTripInfo] = useState({})
  function handleTripCreation(trip){
    //trip data from user input may need to be manipulated based on the public api being used
    // tripdata = axios.get();//call out api with user input
    setTripInfo(trip);//change trip to tripdata one the get request is working
  }

  return(
    <>
    <CreateTripForm handleTripCreation={handleTripCreation}/>
    </>
  )
}