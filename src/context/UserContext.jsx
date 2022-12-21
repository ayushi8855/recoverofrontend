

import { useState } from "react"
import {createContext}  from "react"

 export const UserContext = createContext()


export const UserContextProvider =({children})=>{
 
 const [userdata,setUserdata] = useState({namr:"aaaaaa"})
 

 const username11 =(val)=>{
  setUserdata(val)
}

 
 return <UserContext.Provider value ={{userdata,username11}}>
{children}
  </UserContext.Provider>
}