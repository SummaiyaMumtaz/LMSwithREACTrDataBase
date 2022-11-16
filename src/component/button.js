import { Button } from "@mui/material";
import React from 'react'

export default function ButtonS(prop){
const {label,onClick}= prop ;


return(
<Button style={prop.style}

onClick={onClick} variant="outlined">{label}</Button>
//yeh complete nhi h
    )}
