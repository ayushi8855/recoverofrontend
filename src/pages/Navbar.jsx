import { Box, Image, Text, } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FiLogOut } from "react-icons/fi";

export const Navbar = () => {
    const [isAuth,setIsAuth] = useState(false);

  return (
    <Box w="100%" top={0} position="fixed" zIndex={2} bgColor="rgb(38,165,65)" maxH="50px" p={2}  alignItems="center" display="flex" gap={2} >
        <Box color='white' flex={3} letterSpacing={1} fontFamily="heading" fontWeight="bold" >
            {isAuth ? (
                <Box display="flex" flexDirection="row-reverse" justifyContent="space-evenly" alignItems="center">
                    <Box cursor="pointer" >
                        <FiLogOut fontSize="20px"></FiLogOut>
                        <Text fontSize="xs" fontWeight="hairline">Logout</Text>
                    </Box>
                </Box>
            ):(
                <Box display="flex" flexDirection="row-reverse" justifyContent="space-evenly" alignItems="center">
                    <Box>
                        <Link to="/register"><Text >New Admin</Text></Link>
                    </Box>
                    <Box>
                        <Link to="/login"><Text >Login</Text></Link>
                    </Box>
                    <Box>
                        <Link to="/admindash"><Text >Admin Dashbord</Text></Link>
                    </Box>
                </Box>
            )}
            
        </Box>

    </Box>
  )
}