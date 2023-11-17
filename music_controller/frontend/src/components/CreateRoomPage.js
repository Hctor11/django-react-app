import React from "react";
import Navigation from "./Navigation";
import {
  Typography,
  TextField,
  Button,
  Grid,
  FormHelperText,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { Link } from "react-router-dom";

const CreateRoomPage = () => {
  const defaultVotes = 2;

  return (
    <div>
      <Navigation />

      <Grid container spacing={8} gap={5}>
        <Grid item xs={12} alignContent="center">
          <Typography variant="h4" align="center">
            Create a room
          </Typography>
        </Grid>
        <Grid
          container
          xs={12}
          alignContent="center"
          justifyContent="center"
          width="100vh"
        >
          <FormControl component="fieldset">
            <FormHelperText>
              <div justifyContent="center">Guest Control of Playback State</div>
            </FormHelperText>
            <RadioGroup
              row
              aria-label="controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
            >
              <FormControlLabel
                value="true"
                control={<Radio color="primary" />}
                label="Play/Pause"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="false"
                control={<Radio color="secondary" />}
                label="No Control"
                labelPlacement="bottom"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid
          container
          xs={12}
          alignContent="center"
          justifyContent="center"
          width="100vh"
        >
          <FormControl>
            <TextField
              required={true}
              type="number"
              defaultValue={defaultVotes}
              inputProps={{
                min: 1,
              }}
              label="Votes Required To Skip Song"
            />
          </FormControl>
        </Grid>
        <Grid
          container
          xs={12}
          alignContent="center"
          justifyContent="center"
          width="100vh"
          gap={2}
        >
          <Button color="error" variant="outlined" component={Link} to="/">
            Back to Home
          </Button>
          <Button color="primary" variant="contained">
            Create Room
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateRoomPage;
