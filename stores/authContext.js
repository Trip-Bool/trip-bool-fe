import { createContext, useState, useEffect } from 'react'

const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    authReady: false
  })

  export default AuthContext