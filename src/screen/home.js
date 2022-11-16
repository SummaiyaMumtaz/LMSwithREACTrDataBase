// import { Box } from "@mui/system";
// import { useEffect } from "react";
import React from 'react'
import UserForm from "./user/Form";
// import { useNavigate } from "react-router-dom"
// // import Login from "./login";
// import checkuser from "../config/fbMethods"
export default function Home() {
//     const params = useParams();
//     console.log(params.id)
    // let navigate = useNavigate();
    // let sign= ()=>{
    // navigate("/signup")
    // navigate("/form")
    // }

//     useEffect(()=>{
//         checkuser()
//         .then((res)=>{
//             console.log(res);
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     },[])
    return(
        
       <UserForm/> 
       
    //    <>
       
    //    <Box className="header">
    //    <h1 >STUDENT </h1>
    //    </Box>

    //    <Box>
     
    //    <p>Are you a new STUDENT<span><a className="navigate" onClick={sign}>Form FILL</a>
    //   </span></p>
    //    </Box>
    //    </>
    )
}