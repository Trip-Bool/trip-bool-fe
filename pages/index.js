import Head from 'next/head';
import Header from '../components/Header';
import Tripin from '../components/Tripin';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer'
import { useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useUser } from '@auth0/nextjs-auth0';

export default function Index() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }

  return <a href="/api/auth/login">Login</a>;
}

export default function Home() {


  const [loginInfo, setLoginInfo] = useState({});
  // sets loginInfo to a object that contains the users username and password. back end authentication needed. 
  function handleLogin(userInfo) {
    setLoginInfo(userInfo);
  }

  return (
    <>
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
    </>
  )
}
