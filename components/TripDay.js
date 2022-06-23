export default function TripDay({ day }) {

  // day = {
  //   "date": {
  //     "day": "28",
  //     "month": "June",
  //     "weekday": "Tuesday",
  //     "year": "2022"
  //   },
  //   "temp": 72.57,
  //   "weather": [
  //     {
  //       "description": "clear sky",
  //       "icon": "01d",
  //       "id": 800,
  //       "main": "Clear"
  //     }
  //   ]
  // }

  let icon_url = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`

  return(
    <div className="flex w-1/2 bg-gray-500 justify-between rounded-xl my-2 mr-2">
      <img className="m-3" src={icon_url} alt="weather icon"/>
      <p className="m-9 text-l">{day.date.weekday} {day.date.month}/{day.date.day}</p>
      <p className="m-9 text-l">{day.temp}F</p>
      <p className="m-9 text-l">{day.weather[0].description}</p>
    </div>
  )
}