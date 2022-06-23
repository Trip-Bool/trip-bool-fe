import Image from 'next/image'

export default function PreviewTrips({ trips }) {
  
  // trips = [
  //   {
  //     location: "LA", 
  //     startDate: "06/23/29",
  //     endDate: "06/23/29",
  //   },
  //   {
  //     location: "seattle", 
  //     startDate: "06/23/29",
  //     endDate: "06/23/29",
  //   }
  // ]

  return (
    <div className="flex flex-col justify-center items-center">
    {trips.length === 0 ?
      <h3>Create A Trip For A Preview</h3>
      :
      trips.forecast_weather.map((trip) => (
        <div className="my-6 bg-gray-300 flex justify-center items-center flex-col w-1/2 mx-5 rounded-xl shadow-2xl" key={trip.temp}>
          <h1 className="text-2xl my-3">{trip.temp}</h1>
          <h2 className="mb-5">startDate - endDate</h2>
          <img className="mb-8 rounded-full border-solid border-2 border-gray-700"src="https://via.placeholder.com/350" layout="fill" alt="weather icon"/>
        </div>
      ))
    }
    </div>
  )
}