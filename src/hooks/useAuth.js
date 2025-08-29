import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase/Firebase'

export default function useAuth() {
    const [user, setUser] = useState(null)
    const [username, setUsername] = useState(null)

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
                setUsername(user.displayName)
            }
            else{
                setUser(null)
                setUsername(null)
            }
        })
        return unsub;
    }, [])
  return {user, username}
}