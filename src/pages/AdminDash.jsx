
import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Image,
  InputRightElement,
  InputGroup,
  FormErrorMessage,
  FormHelperText,
  InputLeftElement,
} from "@chakra-ui/react";
import { MdEmail } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { UserContext } from "../context/UserContext"
import axios from 'axios';
export const AdminDash = () => {

  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const{userdata,username11} =useContext(UserContext)
  const [data,setData] = useState([])
  
let da= data.filter((e)=>{
    if(e.admin_id===userdata._id){
      return e
    }
  })
 


  useEffect(()=>{
    axios.get(`http://localhost:5000/admin/dashboard`)
  .then(function (response) {
    // handle success
    console.log(response.data);
    setData(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  })

},[])


  const submitHandler = async(e) => {
    e.preventDefault();

    const details = {
      name:userName,
      email: userEmail,
      role:"member",
      admin_id:userdata._id,
      password:userName
    };
    try {
      let res = await axios.post("http://localhost:5000/admin/createuser",details)
      console.log(res);
      alert("Member add successfull !");
    
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }

    
    // console.log("details",details);
     

  };
    
  return (
    <div>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"100px"}}>
        <Text fontSize='6xl'>welcome to admin dashborad</Text>
      </div>
      <div style={{display:"flex",width:"100%"}}>
        <div style={{width:"100%", border:"1px solid black", padding:"10px"}}>
          <h1>List of all member add by admin</h1>
          <div>
        {da.map((e)=>(
            <h2>{e.name}</h2>
        )
           
     
          )}
        </div>
        </div>
       
        <div style={{display:"flex",width:"100%", border:"1px solid green",padding:"10px"}}>
          <Text>add a new member</Text>
          <Stack >
            <form onSubmit={submitHandler}>
            <FormControl id="name" mb={3}>
                <FormLabel mb={0}>Name :</FormLabel>
                <InputGroup>
                  <InputLeftElement>
                    <FaUser></FaUser>
                  </InputLeftElement>
                  <Input
                    required
                    type="text"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </InputGroup>
            </FormControl>
              <FormControl id="email" mb={3}>
                <FormLabel mb={0}>Email :</FormLabel>
                  <InputGroup>
                    <InputLeftElement>
                      <MdEmail></MdEmail>
                    </InputLeftElement>
                    <Input
                      required
                      type="email"
                      onChange={(e) => setUserEmail(e.target.value)}
                    />
                  </InputGroup>
              </FormControl>
              <Stack spacing={5} mt={5}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type='submit'
                >
                  Add member
                </Button>
              </Stack>
            </form>
          </Stack>
        </div>
      </div>
    </div>
  )
}
