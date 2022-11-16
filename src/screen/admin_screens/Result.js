import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import DropDown from "../../component/dropdown";
import { Button, Grid, Switch } from "@mui/material";
import { getData, sendDataAll } from "../../config/fbMethods";
import ButtonS from "../../component/button";
export default function Result() {
  let [users, setuser] = useState([]);
  const db = getDatabase();
  const courses = ["web Development" , "Graphic Designing"]
  const result = [{
    id : 1,
    rollNumber : "ghfd46",
    marks : 40 ,
    status :"pass"
  },
  {
    id : 2,
    rollNumber : "ghfd46",
    marks : 40 ,
    status :"pass"
  },
  {
    id : 3,
    rollNumber : "ghfd46",
    marks : 40 ,
    status :"pass"
  },
  {
    id : 4,
    rollNumber : "ghfd46",
    marks : 40 ,
    status :"pass"
  }
]
  const [allResults, setAllResults] = useState(["ABC", "DEF"]);
  const [selectedCource, setSelectedcourse] = useState("");
  const [ResultTableData, setResultTableData] = useState("");
  let[form , setForm] = useState(false)

 let updateResult = ()=>{
  sendDataAll({result , form , selectedCource} , "result")
  .then((success)=>{
console.log(success)
  })
  .catch((error)=>{
    console.log(error)
  })
 }
  

  // const [AllResults, setAllResults] = useState("");

  // let showdropD = (e) => {
  //     setSelectedcourse(e);
  //     let obj = allResults.find((x) => x.course == e);
  //     console.log(obj);
  //     setResultTableData([...obj.result]);
  //   };
  // let getdata = ()={
  // const starCountRef = ref(db, 'posts/');
  // onValue(starCountRef, (snapshot) => {
  //   const data = snapshot.val();
  //   updateStarCount(postElement, data);
  // });
  // }

  // let getResultData = () => {
  // getData("students")
  //       .then((res) => {
  //         console.log(res);
  //         let arr = res.filter((x) => x.isShowResult);
  //         setAllResults([...arr]);
  //         console.log(allResults);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   useEffect(() => {
  //     getResultData();
  //   }, []);
  console.log(form)
  console.log(selectedCource)
  return (
    <>
      <div>
        <Box className="Row border border-right-0 border-left-0">
          <h1 className="text-center">Create Result</h1>
          <box>
            <Grid>
              <Grid md={6} item>
                <Switch value={form} onChange={(e)=>setForm(e.target.checked)} ></Switch>
                <DropDown
                  label="Course"
                  onChange={(e) => setSelectedcourse(e.target.value)}
                  value={selectedCource}
                  dataSource={courses}
                ></DropDown>
              <ButtonS onClick={updateResult} label="Update Result"/>
              
              </Grid>
            </Grid>
          </box>
        </Box>
      </div>
    </>
  );
}
