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
  const [guestCanPause, setGuestCanPause] = React.useState("true");
  const [defaultVotes, setDefaultVotes] = React.useState(2);

  const handleVotesChange = (e) => {
    setDefaultVotes(e.target.value);
  };

  const handleGuestCanPauseChange = (e) => {
    setGuestCanPause(e.target.value === "true" ? true : false);
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      const reqOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          guest_can_pause: guestCanPause,
          votes_to_skip: defaultVotes,
        }),
      };
      fetch("/create-room", reqOptions)
        .then((res) => res.json())
        .then((data) => console.log(data));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <Navigation />

      <Grid container gap={5}>
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
              defaultValue={guestCanPause}
              onChange={(e) => handleGuestCanPauseChange(e)}
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
              onChange={(e) => handleVotesChange(e)}
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
          <Button color="primary" variant="contained" onClick={handleSubmit}>
            Create Room
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateRoomPage;
