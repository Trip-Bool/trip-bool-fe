import React from 'react';
import Navbar from '../components/Navbar';
import { UserProvider } from '@auth0/nextjs-auth0';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
     <Navbar />
      <Component {...pageProps} />
    </UserProvider>
  );
}