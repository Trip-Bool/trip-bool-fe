import DetailedTrip from '../components/DetailedTrip';



export default function TripDetails({ trips }){

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

  return(
    <div className="flex justify-center items-center flex-col">
      {
        trips.tripWeather.map((trip, key) => (
          <DetailedTrip key={key} trip={trip}/>
        ))
      }
    </div>
  )
}