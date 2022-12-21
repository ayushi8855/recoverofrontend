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
  } from "@chakra-ui/react";
import axios from "axios";
  import { useContext, useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import {AuthContext} from "../context/AuthContext"
  import { UserContext } from "../context/UserContext";
  export const Login = () => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const navigate = useNavigate();
    const {isAuth,toggleAuth}= useContext(AuthContext)
    const{userdata,username11} =useContext(UserContext)
    const submitHandler = async(e) => {

      e.preventDefault();
  
      const payload = {
        email: userEmail,
        password: userPassword,
      };
// ---------------------------------------------------------------------------------
      axios.post('http://localhost:5000/login',payload)
      .then(
        response => 
        {
         
         if(response.status === 200){
          if(response.data.user.role==="admin"){
            toggleAuth(!isAuth)
            username11(response.data.user)
          }
         
          console.log(response.data.user)
          alert("logging successfully")
          // username11(response.data.userdata)
            navigate("/")
      
          //   setToken(response.data.token)
          }
          
        }
      ).catch(err=>{
        alert(err.response.data.message)
      })
        
      
          
      
// -----------------------------------------------------------------------------

      console.log("login",payload);
    };
  
    return (
      
    <Box mt="50px">
       <Box w='80%' m='auto'>
         <Flex
        minH={"80vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} py={12} width={{base:"80%", md:"60%", lg:"45%"}}>
          
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <form onSubmit={submitHandler}>
                <FormControl id="email">
                  <FormLabel>Email/Mobile :</FormLabel>
                  <Input
                    required
                    type="text"
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password :</FormLabel>
                  <Input
                    required
                    type="password"
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link to="" ><Text align="center" color="rgb(40,116,240)">Forgot password?</Text></Link>
                  </Stack>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    type='submit'
                  >
                    Login
                  </Button>
                  <Link to="/register"><Text align="center" color="rgb(40,116,240)">New User? create an account</Text></Link>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
     </Box>
    </Box>
    );
  };


  // tr----
  // dsa  fibonnaci recursion stack queue
  // amstrom number
//reversing string
//reactjs,nodejs
//event bubbling, useref
//conditional rendering
//event loop , hosting
//apis
//redux flow 
//node basic , module file system, how to connect data base
//projects
//chakra ui
// stylecomponent
//axios
//dependencies