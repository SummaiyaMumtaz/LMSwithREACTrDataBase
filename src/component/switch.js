import Switch from "@mui/material/Switch";
import React from 'react'
function Switch(props) {
  const { label, onChange, value } = props;
  return (
    <>
      <Switch checked={value} value={value}
       label={label} onChange={onChange} />
    </>
  );
}
export default Switch;