import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import Inputfield from "../../component/textfield";
import SMButton from "../../config/components/SMButton";
// import Inputfield from "../../config/components/Inputfield";
import { sendData } from "../../config/firebasemethods";

function Countries() {
  const [model, setModel] = useState({});

  let saveCurrency = () => {
    console.log(model);
    sendData(model, "countries")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <h1>Countries</h1>
        <Container>
          <Grid container>
            <Grid md={4} item>
              <Inputfield
                label="Country Name"
                onChange={(e) =>
                  setModel({ ...model, countryName: e.target.value })
                }
              />
            </Grid>
            <Grid md={4} item>
              <Inputfield
                label="Country Code"
                onChange={(e) =>
                  setModel({ ...model, countryCode: e.target.value })
                }
              />
            </Grid>
            <Grid md={4} item>
              <Inputfield
                label="Currency"
                onChange={(e) =>
                  setModel({ ...model, currency: e.target.value })
                }
              />
            </Grid>
            <Grid md={4} item>
              <SMButton onClick={saveCurrency} label="Save" />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
export default Countries;