export default function CreateTripForm({ handleTripCreation }) {

  function createTrip(event){
    let trip =  {
      location: event.target.location.value,
      startDate: event.target.startDate.value,
      endDate: event.target.endDate.value,
    }
    handleTripCreation(trip)
  }

  return(
    <form onSubmit={createTrip}>
    <fieldset>
      <legend>Create A Trip</legend>
      <label htmlFor="location">Destination</label>
      <input type="text" name="location" />
      <label htmlFor="startDate">Start Date</label>
      <input type="date" name="startDate" />
      <label htmlFor="endDate">End Date</label>
      <input type="date" name="endDate" />
      <button type="submit">Create Trip</button>
    </fieldset>
   </form>
  )
}