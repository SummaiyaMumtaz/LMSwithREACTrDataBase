// import { CircularProgress, Grid } from "@mui/material";
// // import React, { useState } from 'react'
// import uni from "../img/uni.jpg"
// import Inputfield from "../component/textfield";
// import { Button } from "bootstrap";
// import { Box, margin } from "@mui/system";
// import { useNavigate } from "react-router-dom";
// import { loginUser } from "../config/fbMethods";
// import { useState } from "react";
// import React from 'react'

// function Login(){

//     const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
// //   const [isLoading, setLoader] = useState(false);
//   const navigate = useNavigate();

//     let showpassword=()=>{
//         var x = document.getElementById("pass");
//         if (x.type === "password") {
//           x.type = "text";
//         } else {
//           x.type = "password";
//         }
//     }
    

//   let login = () => {
//     // setLoader(true);
//     loginUser({
//       email,
//       password,
//     })
//       .then((success) => {
//         // setLoader(false);
//         console.log(success);
//         navigate(`/${success.id}`);
//       })
//       .catch((err) => {
//         // setLoader(false);
//         console.log(err);
//       });
//   };
// return(
//     <>
//      <Grid container>
//        <Grid>
//     <Box style={{
//         position: "fixed",
//         top: "50%",
//         left: "50%",
//         // /* bring your own prefixes */
//         transform: "translate(-50%, -50%)"
//         }}>
//   <div style={{ background:"rgba(0, 0, 0,0.7)"}}>
//   <h1 className="text-light">Login</h1>   
//             <Box><Inputfield placeholder="Registration No" type="text" 
//             // onChange={(e) => setEmail(e.target.value)}
//             >
//             </Inputfield>
//               </Box>
//             <Box>
//             <Inputfield  placeholder="Password" type="password" id="pass"
//             // onChange={(e) => setPassword(e.target.value)}
//              >
//             </Inputfield>
//                </Box>  
//         <div class="align-items-center">
//         <div class="form-check ">
//         <input class="form-check-input" type="checkbox" value="" id="form2Example3" />
//         <label class="form-check-label text-light" onClick={showpassword}>
//                 show password
//         </label>
//         </div>
//         <a href="#!" class="text-body"><span className="text-light text-center">Forgot password?</span></a>
//         <Button
//         //  disabled={isLoading}
//          onClick={login} variant="contained">
//               {/* {isLoading ? "wait a min..." : "Login"} */}
//             </Button>
//           </div>

//   </div>
//     </Box>
        
//          </Grid>
//           <Grid>
//             <img src={uni}></img>
//         </Grid>  </Grid> 
//     </>
// )
// }
// export default Login;