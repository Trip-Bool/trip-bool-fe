export default function PreviewTrips({ trips }) {
  
  trips = [
    {
      location: "seattle", 
      startDate: "06/23/29",
      endDate: "06/23/29",
    }
  ]

  return (
    <>
    <h1>PreviewTrips</h1>
    {trips.length === 0 ?
      <h3>Create A Trip For A Preview</h3>
      :
      trips.map((trip) => (
        <div key={trip.location}>
          <h1>{trip.location}</h1>
          <h2>{trip.startDate}</h2>
          <h3>{trip.endDate}</h3>
        </div>
      ))
    }
    </>
  )
}