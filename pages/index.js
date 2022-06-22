import Head from 'next/head';
import Header from '../components/Header';
import Tripin from '../components/Tripin';
import Footer from '../components/Footer'
import { useState } from 'react';

export default function Home() { 

  return (
    <div className="bg-gray-100">
    <Head>
      <title>Tripin</title>
    </Head>

    <Header />
    {/* TODO: Create a conditional that says if the user is logged in show the Tripin page, if not take the user to the auth0 login*/}
    <Tripin />

    <Footer />
    </div>
  )
}
