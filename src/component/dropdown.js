// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
// import { useEffect, useState } from "react";
// import { getData } from "../config/fbMethods";
// import React from 'react'

// export default function DropDown(props) {
//   const {
//     label,
//     value,
//     onChange,
//     datasource,
//     required,
//     displayField,
//     valueField,
//     nodeName,
//   } = props;

//   const [dtSource, setDtSource] = useState(datasource);

//   let getNodeData = () => {
//     if (nodeName) {
//       getData(nodeName)
//         .then((res) => {
//           setDtSource(res);
//         })
//         .catch((err) => {});
//     }
//   };
//   useEffect(() => {
//     getNodeData();
//   }, []);

//   return (
//     <>
//       <InputLabel id="demo-simple-select-label">{label}</InputLabel>
//       <Select
//         required={required}
//         fullWidth={true}
//         variant="standard"
//         labelId="demo-simple-select-label"
//         id="demo-simple-select"
//         label={label}
//         onChange={onChange}
//         value={value}
//       >
//         {dtSource && dtSource.length > 0
//           ? dtSource.map((x) => (
//               <MenuItem value={x[valueField ? valueField : "id"]}>
//                 {x[displayField ? displayField : "fullName"]}
//               </MenuItem>
//             ))
//           : null}
//       </Select>
//     </>
//   );
// }
// component h yh mera
// run kr k dikhao
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { getData } from "../config/fbMethods";
import React from "react";

export default function DropDown(props) {
  const {
    label,
    value,
    onChange,
    dataSource,
    required,
    displayField,
    valueField,
    nodeName,
    test,
  } = props;
  // console.log(props.dataSource);
  const [dtSource, setDtSource] = useState(dataSource);
  let getNodeData = () => {
    if (nodeName) {
      getData(nodeName)
        .then((res) => {
          setDtSource(res);
        })
        .catch((err) => {});
    }
  };
  useEffect(() => {
    getNodeData();
  }, []);

  return (
    <>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        required={required}
        fullWidth={true}
        variant="standard"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={label}
        onChange={onChange}
        value={value}
        nodeName={nodeName}
      >
        {dataSource && dataSource.length > 0
          ? dataSource.map((e, i) => <MenuItem value={e}>{e}</MenuItem>)
          : null}
      </Select>
    </>
  );
}

