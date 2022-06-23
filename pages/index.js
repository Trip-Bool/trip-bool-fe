import Head from 'next/head';
import Header from '../components/Header';
import Tripin from '../components/Tripin';
import Footer from '../components/Footer'
import DetailedTrip from '../components/DetailedTrip';
import { useState } from 'react';
import axios from 'axios';

export default function Home() { 

  const [trips, setTrips] = useState([])
  async function handleTripCreation(trip){
    let tripdata = await axios.get(`http://127.0.0.1:5000/weather/${trip.location}/${trip.startDate}/${trip.endDate}`);//call out api with user input - assuming from this point forward that our api is return a list of object trips
    setTrips(tripdata.data);
  }
  console.log(trips)

  return (
    <div className="bg-gray-100">
    <Head>
      <title>Trippin</title>
    </Head>

    <Header />
    {/* TODO: Create a conditional that says if the user is logged in show the Tripin page, if not take the user to the auth0 login*/}
    <Tripin trips={trips} handleTripCreation={handleTripCreation}/>
    {/* <DetailedTrip /> */}
    <Footer />
    </div>
  )
}
