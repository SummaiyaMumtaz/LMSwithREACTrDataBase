// import { Form } from "react-router-dom";
import React, { useEffect } from "react";
import Inputfield from "../../component/textfield";
import { Box } from "@mui/system";
import { useState } from "react";
// import { sendDataAll } from '../../config/fbMethods'
import ButtonS from "../../component/button";
import { Grid } from "@mui/material";
import DropDown from "../../component/dropdown";
import { sendDataAll , signUpUser } from "../../config/fbMethods";

export default function UserForm() {
  // let simp = [fatherCnic]
  // let req =[
  //   "firstName" ,"lastName","course","contact",
  //   "cnic","fatherName" ,"fatherContact" ,	"emergencyContact" , "dateOfBirth"    ]

  let [model, setmodel] = useState({});
  let [dob, setdob] = useState("");
  let Section = ["A", "B"];
  let courses = ["Graphic Designing", "Web Development"];
let [Email,setEmail] = useState("");
let [Age,setAge] = useState("");
let [Password,setPassword] = useState("");
  let signUp = () => {
        // setloader(true)
        signUpUser({
          Email,
          Password,
          
        })
          .then((success) => {
            console.log(success);
            // setloader(false);
            // navigate("/login");
            // sign();
          })
          .catch((error) => {
            // setloader(false);
            console.log(error);
            
          });
      };

  let fillmodel = (key, val) => {
    model[key] = val;
    setmodel({ ...model });
    console.log(model);
  };

  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
      // console.log("get meri age")
      //  return  fillmodel("age",age);
      return setAge = (age);
    }
  }

  useEffect(() => {
    getAge(dob);
  }, [dob]);

  let submit = () => {
    sendDataAll(model, "students")
      // sendDataAll({...model,dob:dob},"students")
      .then((success) => {
        alert("form has been submit");
        console.log(model);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className=" App m-auto">
        <Box className=" header text-center m-5">
          <h1 style={{ fontFamily: "cursive" }}>REGISTRATION FORM</h1>
        </Box>
        <div
          style={{ width: "80%", borderRadius: "25px" }}
          className="m-auto border border-3 border-primary"
        >
          <container>
            <Grid Container>
              <Grid Item md={6} lg={6} sm={12} xs={12}>
                {/* { req.map(function(x,i){      
            return (
            <Inputfield value={model.x} 
            onChange={(e)=>fillmodel({x},e.target.value)} 
            required="required"
             label= {x}
              type="text"></Inputfield>
         )
        }) }  */}

                <Inputfield
                  value={model.firstName}
                  onChange={(e) => fillmodel("firstName", e.target.value)}
                  required="required"
                  label="first Name"
                  type="text"
                ></Inputfield>
                <Inputfield
                  value={model.lastName}
                  onChange={(e) => fillmodel("lastName", e.target.value)}
                  required="required"
                  label="Last Name"
                  type="text"
                ></Inputfield>
                {/* email */}
                <Inputfield
                  // value={model.email}
                  // onChange={(e) => fillmodel("email", e.target.value)}
                  onChange={(e)=> setEmail(e.target.value)}
                  required="required"
                  label="Email"
                  type="text"
                ></Inputfield>

                <DropDown
                  required="required"
                  value={model.courseName}
                  label="Course Name"
                  onChange={(e) => fillmodel("courseName", e.target.value)}
                  dataSource={courses}
                  test={true}
                />
                <DropDown
                  required="required"
                  value={model.section}
                  label="Section"
                  onChange={(e) => fillmodel("section", e.target.value)}
                  dataSource={Section}
                />

                {/* section */}
                <Inputfield
                  value={model.contact}
                  onChange={(e) => fillmodel("contact", e.target.value)}
                  required="required"
                  label="Contact"
                  type="text"
                ></Inputfield>
                <Inputfield
                  value={model.cnic}
                  onChange={(e) => fillmodel("cnic", e.target.value)}
                  required="required"
                  label='Cnic'
                  type="text"
                ></Inputfield>
                <Inputfield
                  value={model.fatherName}
                  onChange={(e) => fillmodel("fatherName", e.target.value)}
                  required="required"
                  label="FatherName"
                  type="text"
                ></Inputfield>
                <Inputfield
                  value={model.fatherCnic}
                  onChange={(e) => fillmodel("FatherCnic", e.target.value)}
                  label="Father Cnic"
                  type="text"
                ></Inputfield>

                <Inputfield
                  value={model.fatherContact}
                  onChange={(e) => fillmodel("fatherContact", e.target.value)}
                  required="required"
                  label="Father Contact"
                  type="text"
                ></Inputfield>

                
                <Inputfield
                  value={model.EmergencyContact}
                  onChange={(e) =>
                    fillmodel("EmergencyContact", e.target.value)
                  }
                  required="required"
                  label="Emergency Contact"
                  type="text"
                ></Inputfield>
                <Inputfield
                  value={dob}
                  onChange={(e) => setdob(e.target.value)}
                  //  label= "DoB (yyyy/mm/dd)"
                  type="date"
                ></Inputfield>
                <Inputfield
                  // value={dob}
                  onChange={(e) => setPassword(e.target.value)}
                   label= "Password"
                   placeholder="set password"
                  type="password"
                ></Inputfield>

                <Inputfield
                  value=""
                  onChange={(e)=>getAge(e.target.value)}
                  label="age"
                  disabled="disabled"
                >
                  {Age}
                </Inputfield>

                {/* </Grid> */}
                {/* <Grid Item md={6} lg={6} sm={12} xs={12} > */}

                {/* </Grid> */}

                {/* <Grid Item md={4} lg={4} sm={6} xs={6} >
            <Inputfield value={model.firstName} 
            onChange={(e)=>fillmodel( "firstName" , e.target.value)} 
            required="required"
             label="First Name"
              type="text"></Inputfield>
        */}
              </Grid>
            </Grid>
          </container>
        </div>
        <ButtonS onClick={submit} label="SUBMIT"></ButtonS>
      </div>
    </>
  );
}
{
  /* <TextField
        label="LastName" value={LastName} onChange={(e)=> SetLastName(e.target.value)} type="text"  variant="outlined">
        </TextField>
       </Box>
       <Box>
       <TextField
        label="Course" value={Course} onChange={(e)=> SetLastName(e.target.value)}  required type="text" variant="outlined">
        </TextField>
       </Box>
       <Box>
       <TextField
        label="Section" value={Section} required type="text" variant="outlined">
        </TextField>
       </Box>
       <Box>
       <TextField
        label="Contact" value={Contact} required type="text" variant="outlined">
        </TextField>
       </Box>
       <Box>
       <TextField
        label="CNIC" value={CNIC} type="text" variant="outlined">
        </TextField>
       </Box>
       <Box>
       <TextField
        label="FatherName" value={FatherName} required type="text" variant="outlined">
        </TextField>
       </Box>
       <Box>
       <TextField
        label="FatherCnic"value={FatherCnic} type="text" variant="outlined">
        </TextField>
       </Box>
       <Box>
       <TextField
        label="fatherContact" value={fatherContact} type="text" variant="outlined">
        </TextField>
       </Box>
       <Box>
       <TextField
        label="emergencyContact" value={emergencyContact} type="text" variant="outlined">
        </TextField>
       </Box>
       <Box>
       <TextField
        label="dateofBirth" value={dateofBirth} type="text" variant="outlined">
        </TextField>
       </Box>
       <Box>
       <TextField
        label="Age" value={Age} type="text" variant="outlined">
        </TextField> */
}

{
  /* <TextField id="outlined-basic" label="Outlined"  /> */
}
{
  /* <TextField required id="filled-basic" label="Filled" variant="filled" /> */
}
{
  /* <TextField id="standard-basic" label="Standard" variant="standard" /> */
}
