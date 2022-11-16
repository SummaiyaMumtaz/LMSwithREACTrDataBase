// import { Box, CircularProgress, TextField } from "@mui/material";
// import React, { Component, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Inputfield from "../../component/textfield";
// import signUpUser from "../../config/fbMethods";
// // import { signUpUser } from "../../config/fbMethods";

// export default function Signup() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isloading , setloader] = useState(false);
//   let navigate = useNavigate();

//   let sign = () => {
//     navigate("/login");
//   };

//   let signUp = () => {
//     setloader(true)
//     signUpUser({
//       email,
//       password,
      
//     })
//       .then((success) => {
//         // console.log(success);
//         setloader(false);
//         navigate("/login");
//         // sign();
//       })
//       .catch((error) => {
//         setloader(false);
//         console.log(error);
        
//       });
//   };
//   return (
    
//   <div className=" App m-auto">    
//   <Box className=" header text-center m-5">
//         <h1 style={{ fontFamily: 'cursive',}}>Form Check</h1>
//       </Box>
//       <div style={{ width : "30%", borderRadius:"25px"}} className="m-auto border border-3 border-primary">
//       <h2 style={{ fontFamily: 'cursive', fontWeight:"bold"}}  className="m-3 text-primary">SIGN UP</h2>
//       <Box Container>
//         <Box Item xs={12} md={12} >
//             <Inputfield label="Email" placeholder='Email'
//             onChange={(e) => setEmail(e.target.value)}
//             variant="standard"></Inputfield>
//         </Box>
//         <Box Item>
//         <Inputfield label="Password"
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//             variant="standard"/>
//         </Box>
//         {/* <Box>
//           <TextField
//             label="Email"
//             // onChange={(e) => setEmail(e.target.value)}
//             variant="standard"
//           />
//         </Box> */}
//         {/* <Box>
//           <TextField
//             label="Password"
//             type="password"
//             // onChange={(e) => setPassword(e.target.value)}
//             variant="standard"
//           />
//         </Box> */}
//       </Box>
//       <button onClick={signUp}>{isloading? <CircularProgress />: "Signup"}</button>
//       <p>
//         Already have an account?{" "}
//         <span>
//           <a className="navigate" onClick={sign}>
//             LogIn
//           </a>
//         </span>
//       </p>
//       </div>
//   </div>

//   );
// }
