import Image from 'next/image'

export default function PreviewTrips({ trips }) {

  trips = {
    "_userName": "yamas.chris@gmail.com",
    "tripWeather": [
      {
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
      },
      {
        "_location": "Philadelphia",
        "beginTrip": {
          "day": "30",
          "month": "June",
          "weekday": "Thursday",
          "year": "2022"
        },
        "endTrip": {
          "day": "02",
          "month": "July",
          "weekday": "Saturday",
          "year": "2022"
        },
        "forecastWeather": [
          {
            "date": {
              "day": "30",
              "month": "June",
              "weekday": "Thursday",
              "year": "2022"
            },
            "temp": 87.12,
            "weather": [
              {
                "description": "broken clouds",
                "icon": "04d",
                "id": 803,
                "main": "Clouds"
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
            "temp": 77.67,
            "weather": [
              {
                "description": "light rain",
                "icon": "10n",
                "id": 500,
                "main": "Rain"
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
            "temp": 71.26,
            "weather": [
              {
                "description": "heavy intensity rain",
                "icon": "10n",
                "id": 502,
                "main": "Rain"
              }
            ]
          }
        ]
      },
      {
        "_location": "San Francisco",
        "beginTrip": {
          "day": "15",
          "month": "July",
          "weekday": "Friday",
          "year": "2022"
        },
        "endTrip": {
          "day": "17",
          "month": "July",
          "weekday": "Sunday",
          "year": "2022"
        },
        "forecastWeather": [],
        "historicWeather": [
          {
            "date": {
              "day": "15",
              "month": "July",
              "weekday": "Friday",
              "year": "2022"
            },
            "temp": 54.73,
            "weather": [
              {
                "description": "scattered clouds",
                "icon": "03n",
                "id": 802,
                "main": "Clouds"
              }
            ]
          },
          {
            "date": {
              "day": "16",
              "month": "July",
              "weekday": "Saturday",
              "year": "2022"
            },
            "temp": 54.3,
            "weather": [
              {
                "description": "overcast clouds",
                "icon": "04n",
                "id": 804,
                "main": "Clouds"
              }
            ]
          },
          {
            "date": {
              "day": "17",
              "month": "July",
              "weekday": "Sunday",
              "year": "2022"
            },
            "temp": 56.3,
            "weather": [
              {
                "description": "clear sky",
                "icon": "01n",
                "id": 800,
                "main": "Clear"
              }
            ]
          }
        ]
      }
    ]
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {trips.tripWeather.length === 0 ?
        <h3>Create A Trip For A Preview</h3>
        :
        trips.tripWeather.map((trip) => (
          <div className="my-6 bg-gray-300 flex justify-center items-center flex-col w-1/2 mx-5 rounded-xl shadow-2xl" key={trip.temp}>
            <h1 className="text-2xl my-3">{trip._location}</h1>
            <h2 className="mb-5">{trip.beginTrip.weekday} {trip.beginTrip.month}/{trip.beginTrip.day}/{trip.beginTrip.year} - {trip.endTrip.month}/{trip.endTrip.day}/{trip.endTrip.year}</h2>
            <img className="mb-8 rounded-full border-solid border-2 border-gray-700" src={`http://openweathermap.org/img/wn/${trip.forecastWeather[0].weather[0].icon}@2x.png`} layout="fill" alt="weather icon" />
          </div>
        ))
      }
    </div>
  )
}

// http://openweathermap.org/img/wn/${trip.forecastWeather[0].weather[0].icon}@2x.png