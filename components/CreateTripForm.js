export default function CreateTripForm() {
  return(
    <form>
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