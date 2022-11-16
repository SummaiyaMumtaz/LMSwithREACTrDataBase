import app from '../config/fbconfig'
import { getDatabase, ref, push, set ,onValue} from "firebase/database";
import { getAuth,signInWithEmailAndPassword ,createUserWithEmailAndPassword} from "firebase/auth";

const db = getDatabase(app);
const auth = getAuth(app);

// let senddata = ()= {
//     const postListRef = ref(db, 'students/');
//   const newPostRef = push(postListRef);
//   // Create a new post reference with an auto-generated id
//   set(newPostRef, {
      
//   });
//   }

let sendDataAll = (data , nodeName)=>{
  return new Promise((resolve, reject) => {
      const postListRef = ref(db, `${nodeName}/`);
      const newPostRef = push(postListRef);
      data.id = push(postListRef).key;
      set(newPostRef, data)
      .then(()=>{
          resolve("Data Sent Successfully")
      }) 
      .catch((error)=>{
          reject(error)
      })
      }) 
 
};
let getData = (nodeName) => {

    
    return new Promise((resolve, reject) => {
      let reference = ref(db, `${nodeName}/`);

      onValue(reference,(snapshot) => {
          const data=snapshot.exists();
            // let data = snapshot.val();
            if (data) {
              resolve(snapshot.val());
            }else{
              reject(" No data found")
            }      
          })
        })
        // {
        //   onlyOnce: false,
        // }
    }
  
// // let Sendtodos=(obj)=>{
//   let Sendtodos=(obj,nodename,id)=>{
//     //edit k case m id aegi
//   // const postListRef = ref(database, 'todos/');
//  let postListRef ;
//   if(id){
//     //agr id mojod h
//     postListRef = ref(database, `${nodename}/${id}`);
//     //save krwadia
//   }
//   else{
//     //case add
//     let addref = ref(database, nodename)
//     //ref bnae ,,key generate kre , or nai id bnade
//     obj.id= push(addref).key;
//     postListRef = ref(database, `${nodename}/${obj.id}`);
//   }
//   const newPostRef = push(postListRef);
//   //set m jo data likhty wo firbase m chala jata h
//   //database m gaya h ya nh .then 
//   set(newPostRef, obj );




let signUpUser = (obj) => {
  let { email, password} = obj;
  
  // === this promise will return on Signup page. ===
  return new Promise((resolve, reject) => {
    // let navigate = useNavigate();
    // === this "then" will give the status of Authentication. ===
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // user successfully registerd in authentication
        const user = userCredential.user;
        const refrence = ref(db, `users/${user.uid}`);
        obj.id=user.uid;
        set(refrence, obj)
          // === this "then" will give the status of database function
          .then(() => {
            // this "resolve" is our custom message which will show in signup page "then"

            // this "resolve" is our custom message which will show in signup page "then"
            resolve("User Created Successfully and send to database");
            // navigate("/login");

          })
          .catch((errr) => {
            reject(errr);
          });
      })
      .catch((err) => {
        reject(err);
      });
  });
};







let loginUser = (obj) => {
  let { email, password } = obj;
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        const reference = ref(db, `users/${user.uid}`);
        obj.id = user.uid;
        onValue(reference, (e) => {
          let status = e.exists();
          console.log(status);
          if (status) {
            resolve(e.val());
          } else {
            reject("Data Not Found ");
          }
        });
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorMessage);
        alert('invalid email and password')
        reject(errorMessage);
      });
  });
}
// let getData = (nodeName, id) => {
//     let reference = ref(db, `${nodeName}/${id ? id : ""}`);
    
//     return new Promise((resolve, reject) => {
//       onValue(
//         reference,
//         (snapshot) => {
//           if (snapshot.exists()) {
//             let data = snapshot.val();
//             if (id) {
//               resolve(data);
//             } else {
//               let arr = Object.values(data);
//               resolve(arr);
//             }
//           } else {
//             // no data found
//             reject("No Data Found");
//           }
//         },
//         {
//           onlyOnce: false,
//         }
//       );
//     });
//   };

// let checkuser = () =>{
//   const user = auth.currentUser;
//   return new Promise((resolve,reject)=>{
//     if(user){
//       resolve(user);
//     } else{
//       reject("no user")
//     }
//   })

export  {sendDataAll ,getData , signUpUser,loginUser};