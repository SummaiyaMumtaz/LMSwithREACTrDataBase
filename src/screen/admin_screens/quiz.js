import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from 'react'
import ButtonS from "../../component/button";
import { getDatabase, ref, push, set, onValue } from "firebase/database";
import Inputfield from "../../component/textfield";
// import { sendDataAll } from "../../config/fbMethods";
import  {sendDataAll} from '../../config/fbMethods';

export default function CreateQuiz(){
    // const db = getDatabase()
    
  let[options , setOptions] = useState([])
  let[question , setQuestion] = useState("")
  let [correctOption , setCorrectOption] = useState("")
//  let [quizName , setquizName] = useState("")
//  let [duaration , setduaration] = useState("")

let [IsCreateQuiz,setIsCreateQuiz] = useState(false);
let[obj,setobj]=useState({});
//   let[data , setData] = useState([])
//   let[data , setData] = useState([])


function fillobj(key,val) {
  obj[key]=val;
  setobj({...obj});
  console.log(obj);
}
let fillOptionsArray =(i , val)=>{
options[i] = val;
setOptions([...options])
// console.log(options) 
}
//courses 
let sendQuestions = ()=>{

    // if(question!="" &&  options!="" && correctOption!="" && options.map((e)=>{
    //  return e==correctOption
    // }))
  //  let Questions = {question , options , correctOption} 
      //  ( {question , options , correctOption} , "questions")
      sendDataAll({ ...obj , question , options , correctOption} , "questions")
      // sendDataAll({obj , options , correctOption} , "questions")
      .then((success)=>{
        console.log("success")
    })
    .catch((error)=>{
      console.log("error")
    })
  }
  let createQuiz = () => {
    setIsCreateQuiz(true);
  };
  
  // let getQuizData = () => {
  //   const db = getDatabase();
  //   const starCountRef = ref(db, "Quizs/");
  //   onValue(starCountRef, (snapshot) => {
  //     const data = snapshot.val();
  //     console.log(data);
  //     setLists([...Object.values(data)]);
  //   });
  // };
  // useEffect(() => {
  //   getQuizData();
  
  //   // setData();
  // }, []);

// else{
//     alert("question not submit")
// }


return(
    <>
    <div style={{ width : "80%", borderRadius:"25px"}} className="m-auto border border-3 border-primary">
   <container>
   <Grid Container>
   <Grid Item md={6} lg={6} sm={12} xs={12} >
    
    <Box>
<Typography variant="h4">quiz</Typography>
    </Box>

    {/* <Grid container>
<Grid item md={12}> */}
    <Inputfield label="quiz duaration" required="required" value={obj.quizDuaration}
              onChange ={(e) => fillobj("quizDuaration", e.target.value)} >
    </Inputfield>
</Grid>
<Grid item md={12}>
    <Inputfield label="quiz name" required="required"   value={obj.quizName}  
               onChange ={(e) => fillobj("quizName", e.target.value)} >
    </Inputfield>
{/* </Grid> */}
    {/* </Grid> */}
    </Grid></Grid>
    
    <Grid container spacing={3} sx={{ marginY: "30px", padding: "30px" }} >
                <Grid item xs={12} md={12} sm={12} lg={12} >
                <Typography m={3} variant="h4">Add New Question</Typography>
                <Inputfield required="required" value={question} onChange={(e)=>setQuestion(e.target.value)} label="Question"/>
                  </Grid>
                  <Grid item xs={12} md={6} sm={12} lg={6} >
                  <  Inputfield required="required" value={options[0]} onChange={(e)=>fillOptionsArray( 0 , e.target.value)} label="Option 1"/>
                  <  Inputfield required="required" value={options[1]} onChange={(e)=>fillOptionsArray( 1 , e.target.value)}  label="Option 2"/>
                 
                  </Grid>
                  <Grid item xs={6} md={6} sm={12} lg={6} >
                  <  Inputfield required="required" value={options[2]} onChange={(e)=>fillOptionsArray( 2 , e.target.value)}  label="Option 3"/>
                  <  Inputfield required="required" value={options[3]} onChange={(e)=>fillOptionsArray( 3 , e.target.value)}  label="Option 4"/>
                  </Grid>
                  <Grid item xs={12} md={3} sm={12} lg={3} ></Grid>
                  <Grid item xs={12} md={6} sm={12} lg={6} >
                  <  Inputfield required="required" value={correctOption} onChange={(e)=>setCorrectOption(e.target.value)}  label="CorrectOption"/>
                  {/* {greenSignal? <p style={{color :"green"  , margin :"10px"}}>Question submitted Successfully</p> : null}  */}
                  {/* {redSignal? <p style={{color :"red" , margin :"10px"}}>Question Not Submitted</p> : null}  */}
                  <ButtonS onClick={sendQuestions} label="Add"/>
                 
                  </Grid>
               
         </Grid>

    </container></div>   </>
)
}