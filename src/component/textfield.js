// import { TextField } from "@mui/material";
import { TextField } from '@mui/material';
import React from 'react'

export default function Inputfield(prop){
const {label,type,required,disabled,value,placeholder
    ,onChange}= prop ;

return(
<TextField style={{
    fontSize:'25px',
    fontFamily:'cursive'
}} className='m-2 p-2' id="standard-basic" label={label} value={value}  type={type}
    disabled={disabled} placeholder={placeholder} required={required} onChange= {onChange} variant='standard' />
    )}
