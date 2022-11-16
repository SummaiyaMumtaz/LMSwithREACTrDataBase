// // import { Box } from "@mui/system"
// // import React from 'react'


// // export default function StudentProfile(){
// //     return(
// //         <>
// //         <div style={{ borderRadius:"15px"}} className="border row border-primary">
// //         <div>
// //             <div className="col-md-2 " style={{ borderRadius:"15px"}}>
// //                 <div className="bg-primary">
// //                     <p>loremsdfghdfghcvb</p>

// //                 </div>

// //             </div>
// //             <div className="col-md-6">
// //                 <div>

// //                 </div>
// //             </div>

// //         </div>
// //         </div>
        
// //         </>
// //     )
// // }
// import React from 'react';
// import useState from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import CssBaseline from '@mui/material/CssBaseline';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import { Container } from '@mui/system';
// import { Grid } from '@mui/material';
// //img
import profile from "../../img/profile.jpg"
// import { getData } from '../../config/fbMethods';



// // let [dataObj , setDataobj]= useState([]);
// // Let getstudentdata=()=>{


// // getData("students")
// // .then(
// // console.log(data)
// // )
// // .catch(
// // console.log(error)
// // )


// // }



// const drawerWidth = 240;


// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginRight: -drawerWidth,
//     ...(open && {
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginRight: 0,
//     }),
//   }),
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginRight: drawerWidth,
//   }),
// }));

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-start',
// }));

// export default function PersistentDrawerRight() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
//             Student Portal
//           </Typography>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="end"
//             onClick={handleDrawerOpen}
//             sx={{ ...(open && { display: 'none' }) }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Main open={open}>
//         <DrawerHeader />
//             <Grid Container>
//                 <Grid item md={6} xs={12}>
//                 <Box style={{width:"30%",
//             boxShadow:" rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
//                     <img style={{borderRadius: "50%",}} width="30%" src={profile} alt="profile-image"/>
//                     <Typography variant='h1' style={{fontSize:"35px"}}>obj.Name</Typography>
//                 </Box>
                
//                 </Grid>
//                 <Grid item md={6} xs={12}>
//                 <Box style={{width:"30%",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",}}>
//                     <img></img>
//                     <p>Details</p>
//                 </Box>

//                 </Grid>
                

//             </Grid>
       
//         {/* <Typography paragraph>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//           tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
//           enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
//           imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
//           Convallis convallis tellus id interdum velit laoreet id donec ultrices.
//           Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
//           adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
//           nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
//           leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
//           feugiat vivamus at augue. At augue eget arcu dictum varius duis at
//           consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
//           sapien faucibus et molestie ac.
//         </Typography>
//         <Typography paragraph>
//           Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
//           eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
//           neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
//           tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
//           sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
//           tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
//           gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
//           et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
//           tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
//           eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
//           posuere sollicitudin aliquam ultrices sagittis orci a.
//         </Typography> */}
//       </Main>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//           },
//         }}
//         variant="persistent"
//         anchor="right"
//         open={open}
//       >
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {['Courses', 'idk'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {['Result', 'Attendance'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//     </Box>
//   );
// }








// import * as React from 'react';
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import { getData } from "../../config/fbMethods";
// page import
// import ResultShow from '../screen/admin_screens/Result'

// import Registeration Form from '../screen/admin_screens/quiz'
// import Result from '../screen/admin_screens/Result';
// import Home from '../home';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let [stdData , setstdData] = useState([]);

let StudentData =()=>{
  getData("students")
  .then((res) => {
    console.log(res);
    setstdData(Object.values(res))
    // let arr = res.filter((x) => x.isShowResult);
    // console.log(arr)
    // if(res.firstName == "Summaiya"){
      // setstdData([...res]);
    // }
  })

  .catch(
    console.log("no data found")
  )
}
useEffect(() => {
  StudentData();
}, []);
console.log(stdData)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
const navigate = useNavigate()
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {/* add pages here */}
        {[{
          route:'Semester Registeration',
          name:'Semester Registeration'
        }
        ,{
          route:'Courses',
          name:'Courses'
        }
        ,{
          route:'Attandance',
          name:'Attandance'
        }
      ].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={()=>{
            navigate(text.route)
          }} >
              <ListItemIcon>
                {/* list icon add here */}
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Student Portal
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
    
        <Box>
        <Routes>
            <Route path='Courses'  /> 
            <Route path='Attandance' />
            <Route path='Semester Registeration'  />
        </Routes> 
        </Box>


        {/* add working here  */}
        <h5>Dashboard</h5>
        
        <Grid Container>
                 {/* <Grid item md={6} xs={12}>
                 <Box style={{width:"50%",
            boxShadow:" rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
                    <img style={{borderRadius: "50%",}} width="30%" src={profile} alt="profile-image"/>
                   
                    <Typography variant='h1' style={{fontSize:"35px"}}>SUMMAIYA</Typography>
                </Box>
                
                </Grid> */}
                
 {stdData && stdData.length > 0? 
<Grid Container>
<Grid item md={6} xs={12}>
                 <Box style={{width:"50%",
            boxShadow:" rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
                    <img style={{borderRadius: "50%",}} width="30%" src={profile} alt="profile-image"/>
                    {stdData.map((e)=>{
  return <> <Typography variant='h1' style={{fontSize:"35px"}}>{e.firstName}</Typography></> 
  })}
                    </Box></Grid>

<Grid item md={6} lg={6} sm={12}>
  {stdData.map((e)=>{
  return <>
 
  <Grid item md={6} xs={12}>
<Box style={{width:"70%",margin:"15px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",}}>
<h3>Overview : </h3>
<p>Name : {e.firstName} {e.lastName}</p>
<p> Father Name : {e.fatherName}</p>
<p>Father Contact : {e.fatherContact}</p>
<p>Contact Number : {e.contact}</p>
<p>Urgent Contact : {e.EmergencyContact}</p>
</Box></Grid>
  </> 
  })}
 </Grid>
</Grid>

 :null}
               
      
            
                

            </Grid>

        <Grid>
        <Grid item md={6} xs={12}>
                 <Box style={{ background:"rgba(255, 165, 0,0.3)",
            boxShadow:" rgba(255, 165, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
                    {/* <img style={{borderRadius: "50%",}} width="30%" src={profile} alt="profile-image"/> */}
                 <Typography variant='h1' style={{fontSize:"18px", fontWeight:"bold"}}>CGPA </Typography>
                 <Typography variant='h5' style={{fontSize:"18px"}}>3.25 </Typography>
 
                    </Box></Grid>
        </Grid>
           
      
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {

  window: PropTypes.func,
};

export default ResponsiveDrawer;


{/* <Grid item md={6} xs={12}>
<Box style={{width:"50%",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",}}>
   
    {/* <p>Details</p>
     */}
//      <Grid item md={12} sm={12}>
// <table>
// {stdData && stdData.length > 0 ? (
// //yaha kia hua h mne render
// stdData.map((x, i) => (
//   <tr key={i}>
//     <td>{x.rollNum}</td>
//     <td>{x.name}</td>
//     <td>{x.result}</td>
//     <td>{x.marks}</td>
//   </tr>
// ))
// ) : (
// <h1>No Result</h1>
// )}
// </table>
// </Grid>
// </Box>

// </Grid> */}