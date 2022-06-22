import Image from 'next/image'

export default function PreviewTrips({ trips }) {
  
  trips = [
    {
      location: "seattle", 
      startDate: "06/23/29",
      endDate: "06/23/29",
    },
    {
      location: "seattle", 
      startDate: "06/23/29",
      endDate: "06/23/29",
    }
  ]

  return (
    <div className="flex justify-center">
    {trips.length === 0 ?
      <h3>Create A Trip For A Preview</h3>
      :
      trips.map((trip) => (
        <div className="my-6 bg-gray-300 flex justify-center items-center flex-col w-1/3 mx-5 rounded-xl shadow-2xl" key={trip.location}>
          <h1 className="text-2xl my-3">{trip.location}</h1>
          <h2 className="mb-5">{trip.startDate} - {trip.endDate}</h2>
          <img className="mb-8 rounded-full border-solid border-2 border-gray-700"src="https://via.placeholder.com/350" layout="fill" alt="weather icon"/>
        </div>
      ))
    }
    </div>
  )
}