import Head from 'next/head';
import Header from '../components/Header';
import Tripin from '../components/Tripin';
import Footer from '../components/Footer'
import TripDetails from '../components/TripDetails';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '@auth0/nextjs-auth0';

export default function Home() { 
  const { user, error, isLoading } = useUser();

  
  const [trips, setTrips] = useState([])
  // useEffect(() => {
  //   fetchData();
  //   console.log("return from state", trips)
  // }, [])

  async function fetchData(){
    console.log(user)
    if (!user){
      return
    }
    let get_url = `https://trip-bool.herokuapp.com/weather/${user.email}`;
    let tripdata = await axios.get(get_url);
    setTrips(tripdata.data);
    console.log("return from axios", tripdata.data)
  }
  
  async function handleTripCreation(trip){
    let formData = new FormData()
    formData.append('name', user.email)
    formData.append('start_date', trip.startDate)
    formData.append('end_date', trip.endDate)
    formData.append('location', trip.location)
    await axios({
      method: 'post',
      url: 'https://trip-bool.herokuapp.com/data/create',
      data: formData,
      headers: {"Content-Type": "multipart/form-data"},
    })
    console.log("Done Posting")
    fetchData()
  }

  const [rendHome, setRendHome] = useState(true)
  function conditionalRender() {
    setRendHome(!rendHome)
  }

  return (
    <div className="bg-gray-100">
    <Head>
      <title>Trippin</title>
    </Head>

    <Header user={user} conditionalRender={conditionalRender}/>

    {/* TODO: Create a conditional that says if the user is logged in show the Tripin page, if not take the user to the auth0 login*/}
    { rendHome ?
      <Tripin trips={trips} fetchData={fetchData} handleTripCreation={handleTripCreation}/>
      :
      <TripDetails trips={trips}/>
    }
    <Footer className="relative bottom-0"/>
    </div>
  )
}


// export default function Home() {
//   const { user, error, isLoading } = useUser();
 
//   if (isLoading) return <div>Loading...</div>;
 
//   if (error) return <div>{error.message}</div>;
 
//   if (user) {
//     return (
//       <div>
//         <h2>{user.name}</h2>
//         <p>{user.email}</p>
//         <a href="/api/auth/logout">Logout</a>
//       </div>
 
//     );
//   }
//   return <a href="/api/auth/login">Login</a>;
//  };
