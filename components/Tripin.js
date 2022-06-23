import CreateTripForm from "./CreateTripForm";
import PreviewTrips from "./PreviewTrips"


export default function Tripin(props) {

  // const [trips, setTrips] = useState([])
  // function handleTripCreation(trip){
  //   // tripdata = axios.get();//call out api with user input - assuming from this point forward that our api is return a list of object trips
  //   setTrips(tripdata);
  // }

  return(
    <div>
    <CreateTripForm handleTripCreation={props.handleTripCreation}/>
    <PreviewTrips trips={props.trips}/>
    </div>
  )
}