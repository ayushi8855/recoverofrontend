import { Box, Image, Text, } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { FiLogOut } from "react-icons/fi";
import {AuthContext} from "../context/AuthContext"
export const Navbar = () => {
    const {isAuth,toggleAuth}= useContext(AuthContext)

  return (
    <Box w="100%" top={0} position="fixed" zIndex={2} bgColor="rgb(38,165,65)" maxH="50px" p={2}  alignItems="center" display="flex" gap={2} >
        <Box color='white' flex={3} letterSpacing={1} fontFamily="heading" fontWeight="bold" >
            {/* {isAuth ? ( */}
                {/* <Box display="flex" flexDirection="row-reverse" justifyContent="space-evenly" alignItems="center">
                    <Box cursor="pointer" >
                        <FiLogOut fontSize="20px"></FiLogOut>
                        <Text fontSize="xs" fontWeight="hairline">Logout</Text>
                    </Box>
                </Box> */}
            {/* ):( */}
                <Box display="flex" flexDirection="row-reverse" justifyContent="space-evenly" alignItems="center">
                    <Box>
                        <Link to="/register"><Text >New Admin</Text></Link>
                    </Box>
                    <Box>
                        <Link to="/login"><Text >Login</Text></Link>
                    </Box>
                    <Box>
                        <Link to="/billing"><Text >Billing</Text></Link>
                    </Box>
                    {isAuth ?  <Box>
                        <Link to="/admindash"><Text >Admin Dashboard</Text></Link>
                    </Box>:""
                    }
                   
                </Box>
            {/* )} */}
            
        </Box>

    </Box>
  )
}