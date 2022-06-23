import TripDay from "../components/TripDay"

export default function DetailedTrip({ trip }) {

  trip = {
    "_location": "Seattle",
    "beginTrip": {
      "day": "28",
      "month": "June",
      "weekday": "Tuesday",
      "year": "2022"
    },
    "endTrip": {
      "day": "05",
      "month": "July",
      "weekday": "Tuesday",
      "year": "2022"
    },
    "forecastWeather": [
      {
        "date": {
          "day": "28",
          "month": "June",
          "weekday": "Tuesday",
          "year": "2022"
        },
        "temp": 72.57,
        "weather": [
          {
            "description": "clear sky",
            "icon": "01d",
            "id": 800,
            "main": "Clear"
          }
        ]
      },
      {
        "date": {
          "day": "29",
          "month": "June",
          "weekday": "Wednesday",
          "year": "2022"
        },
        "temp": 68.63,
        "weather": [
          {
            "description": "overcast clouds",
            "icon": "04d",
            "id": 804,
            "main": "Clouds"
          }
        ]
      },
      {
        "date": {
          "day": "30",
          "month": "June",
          "weekday": "Thursday",
          "year": "2022"
        },
        "temp": 74.79,
        "weather": [
          {
            "description": "light rain",
            "icon": "10d",
            "id": 500,
            "main": "Rain"
          }
        ]
      }
    ],
    "historicWeather": [
      {
        "date": {
          "day": "01",
          "month": "July",
          "weekday": "Friday",
          "year": "2022"
        },
        "temp": 68.81,
        "weather": [
          {
            "description": "overcast clouds",
            "icon": "04d",
            "id": 804,
            "main": "Clouds"
          }
        ]
      },
      {
        "date": {
          "day": "02",
          "month": "July",
          "weekday": "Saturday",
          "year": "2022"
        },
        "temp": 69.85,
        "weather": [
          {
            "description": "broken clouds",
            "icon": "04d",
            "id": 803,
            "main": "Clouds"
          }
        ]
      },
      {
        "date": {
          "day": "03",
          "month": "July",
          "weekday": "Sunday",
          "year": "2022"
        },
        "temp": 72.07,
        "weather": [
          {
            "description": "clear sky",
            "icon": "01d",
            "id": 800,
            "main": "Clear"
          }
        ]
      },
      {
        "date": {
          "day": "04",
          "month": "July",
          "weekday": "Monday",
          "year": "2022"
        },
        "temp": 72.43,
        "weather": [
          {
            "description": "clear sky",
            "icon": "01d",
            "id": 800,
            "main": "Clear"
          }
        ]
      },
      {
        "date": {
          "day": "05",
          "month": "July",
          "weekday": "Tuesday",
          "year": "2022"
        },
        "temp": 70.92,
        "weather": [
          {
            "description": "few clouds",
            "icon": "02d",
            "id": 801,
            "main": "Clouds"
          }
        ]
      }
    ]
  }

  return (
    <div className="flex flex-col items-end justify-center w-5/6 m-auto my-10 rounded-3xl shadow-2xl bg-cyan-500">
      <p className="m-auto text-2xl">{trip._location}</p>
      <p className="m-auto text-2xl">{trip.beginTrip.weekday} {trip.beginTrip.month} {trip.beginTrip.day}, {trip.beginTrip.year} - {trip.endTrip.weekday} {trip.endTrip.month} {trip.endTrip.day}, {trip.endTrip.year}</p>
      {trip.forecastWeather.map(day => (
        <TripDay day={day} key={day} />
      ))}

      {trip.historicWeather.map(day => (
        <TripDay day={day} key={day} />
      ))}
    </div>
  )
}

// trip = {
//   "forecast_weather": [
//     {
//       "date": "1656220067",
//       "weather":[
//         {
//           "description": "few clouds",
//           "icon": "02d",
//           "id": 801,
//           "main": "Clouds",
//         }
//       ]
//     },
//     {
//       "date": "1656306467",
//       "weather":[
//         {
//           "description": "clear sky",
//           "icon": "01d",
//           "id": 800,
//           "main": "Clear",
//         }
//       ]
//     }
//   ],
//   "dates": [
//     "1656220067",
//     "1656306467"
//   ],
//   "historic_weather":{}
// }