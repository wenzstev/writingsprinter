import React from "react"

import {makeStyles} from "@material-ui/core"

import {useDispatch} from "react-redux"
import {reset} from "../../state/actions"

import {
  Paper,
  Box,
  Typography,
  Button,
  Grid
} from "@material-ui/core"

const useStyles = makeStyles({
  button: {
    margin: 20,
    paddingX: 20,
  }
})

const TimesUpPanel = (props) => {
  const classes = useStyles()

  const newSprintButton = props.confirmClick ?
    <Button className={classes.button}
      color="secondary"
      variant="contained"
      onClick={props.resetClick}
      >
      Are you sure? Your old sprint will be lost.
    </Button> :
    <Button
      className={classes.button}
      color="primary"
      variant="outlined"
      onClick={props.resetClick}
      > Start a new Sprint
    </Button>

  return (
    <Box p={2}>
      <Paper>
        <Typography align="center" variant="h6">
          Time's Up!
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Box align="center">
              <Button
                className={classes.button}
                color="primary"
                variant="contained"
                onClick={props.downloadSprint}
                > Download your Sprint </Button>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box align="center">
              {newSprintButton}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>

  )
}

export default TimesUpPanel
