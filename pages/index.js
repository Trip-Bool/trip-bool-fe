import Head from 'next/head'
import Header from 'components/Header'
import Tripin from 'components/Tripin'
import LoginForm from 'components/LoginForm'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Tripin</title>
    </Head>

    <Header />

    {user ?
      <Tripin />
    :
      <LoginForm />
    }
    </>
  )
}
