export default function CreateTripForm({ handleTripCreation }) {

  function createTrip(event){
    event.preventDefault()
    let trip =  {
      location: event.target.location.value,
      startDate: (event.target.startDate.value),
      endDate: (event.target.endDate.value),
    }
    console.log("start:", trip.startDate)
    event.target.reset();
    handleTripCreation(trip)
  }

  return(
    <form className="w-4/5 m-auto my-10 rounded-3xl shadow-2xl bg-cyan-500"onSubmit={createTrip}>
    <fieldset className="flex flex-col p-5 space-y-6">
      <legend className="pt-5 m-auto text-2xl">Create A Trip</legend>
      <label className="border-t-2" htmlFor="location">Destination</label>
      <input className="text-xl rounded-md" type="text" name="location" />
      <label htmlFor="startDate">Start Date</label>
      <input className="text-xl rounded-md" type="date" name="startDate" />
      <label htmlFor="endDate">End Date</label>
      <input className="text-xl rounded-md" type="date" name="endDate" />
      <button className=" w-1/3 m-auto bg-gray-300 rounded-full py-2" type="submit">Create Trip</button>
    </fieldset>
   </form>
  )
}