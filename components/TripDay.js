export default function TripDay({ day }) {

  // day = {
  //   "1656220067": {
  //     "temp": 80.8,
  //     "weather": [
  //       {
  //         "description": "few clouds",
  //         "icon": "02d",
  //         "id": 801,
  //         "main": "Clouds"
  //       }
  //     ]
  //   }
  // }

  let uniDate = new Date(1607110465663)
  let date = `${uniDate.getDate()}/${uniDate.getMonth()}/${uniDate.getFullYear()}`
  let icon_url = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`

  return(
    <div className="flex w-1/2 bg-gray-500 justify-between rounded-xl my-2 mr-2">
      <img className="m-3" src={icon_url} alt="weather icon"/>
      <p className="m-9 text-l">{date}</p>
      <p className="m-9 text-l">{day.temp}F</p>
      <p className="m-9 text-l">{day.weather[0].description}</p>
    </div>
  )
}