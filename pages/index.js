import Head from 'next/head';
import Header from '../components/Header';
import Tripin from '../components/Tripin';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer'
import { useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [loginInfo, setLoginInfo] = useState({});
  // sets loginInfo to a object that contains the users username and password. back end authentication needed. 
  function handleLogin(userInfo) {
    setLoginInfo(userInfo);
  }

  return (
    <div className="bg-gray-100">
    <Head>
      <title>Tripin</title>
    </Head>

    <Header username={loginInfo.username}/>
    {/* user should toggle between true and false based on if the user is logged in and authenticated or not. */}
    {true ?
      <Tripin />
    :
      <LoginForm handleLogin={handleLogin}/>
    }

    <Footer />
    </div>
  )
}
