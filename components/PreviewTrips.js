// import Image from 'next/image'

export default function PreviewTrips({ trips }) {


  return (
    <div className="flex flex-col justify-center items-center">
      {
        trips.tripWeather.map((trip) => (
          <div className="my-6 bg-gray-300 flex justify-center items-center flex-col w-1/2 mx-5 rounded-xl shadow-2xl" key={trip.temp}>
            <h1 className="text-2xl my-3">{trip._location}</h1>
            <h2 className="mb-5">{trip.beginTrip.weekday} {trip.beginTrip.month}/{trip.beginTrip.day}/{trip.beginTrip.year} - {trip.endTrip.month}/{trip.endTrip.day}/{trip.endTrip.year}</h2>
            {/* <img className="mb-8 rounded-full border-solid border-2 border-gray-700" src={`http://openweathermap.org/img/wn/${trip.forecastWeather[0].weather[0].icon}@2x.png`} layout="fill" alt="weather icon" /> */}
          </div>
        ))
      }
    </div>
  )
}

// http://openweathermap.org/img/wn/${trip.forecastWeather[0].weather[0].icon}@2x.png