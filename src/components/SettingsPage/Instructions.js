import React from "react"
import HelpIcon from "@material-ui/icons/Help"

import {
  Grid,
  Box,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core"

import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles({
  outer: {
    boxShadow: "none",
  },
  panel: {
    fontSize: "1rem",
    color: "darkgray"
  },
  panelText: {
    color: "black"
  }
})

const Instructions = () => {
  const classes = useStyles()
  return(
    <Box mt={2} mb={1}>
    <Grid container justify="center">
      <ExpansionPanel className = {classes.outer}>
        <ExpansionPanelSummary className={classes.panel}>
            How does this work?
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.panelText}>
            Simply decide how long you want to write for, and the timer will begin to count down. To encourage writing as fast as possible, you won't be
            able to delete any paragraph once you have completed it. If selected, a random quote from a famous book will be provided, but feel free to ignore
            it if your muse takes you elsewhere.
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Grid>
    </Box>
  )
}

export default Instructions
