import DetailedTrip from '../components/DetailedTrip';

export default function TripDeatils({ trips }){

  return(

    <div className="flex justify-center items-center flex-col">
      {
        trips.map((trip, key) => (
          <DetailedTrip key={key} trip={trip}/>
        ))
      }
    </div>
  )
}