import TripDay from "../components/TripDay"

export default function DetailedTrip({ trip }) {

  trip = {
    "forecast_weather": [
      {
        "date": "1656220067",
        "temp": 80.8,
        "weather": [
          {
            "description": "few clouds",
            "icon": "02d",
            "id": 801,
            "main": "Clouds",
          }
        ]
      },
      {
        "date": "1656306467",
        "temp": 87.67,
        "weather": [
          {
            "description": "clear sky",
            "icon": "01d",
            "id": 800,
            "main": "Clear",
          }
        ]
      }
    ],
    "dates": [
      "1656220067",
      "1656306467"
    ],
    "historic_weather":
      [
        {
          "date": "1656220067",
          "temp": 800.8,
          "weather": [
            {
              "description": "few clouds",
              "icon": "02d",
              "id": 801,
              "main": "Clouds",
            }
          ]
        },
        {
          "date": "1656306467",
          "temp": 899.67,
          "weather": [
            {
              "description": "clear sky",
              "icon": "01d",
              "id": 800,
              "main": "Clear",
            }
          ]
        }
      ]
  }

  return (
    <div className="flex flex-col items-end justify-center w-5/6 m-auto my-10 rounded-3xl shadow-2xl bg-cyan-500">
      <p className="m-auto text-2xl">trip.location?</p>
      <p className="m-auto text-2xl">trip.dates</p>
      {trip.forecast_weather.map(day => (
        <TripDay day={day} key={day} />
      ))}

      {trip.historic_weather.map(day => (
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