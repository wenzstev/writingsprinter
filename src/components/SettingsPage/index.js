import React from "react"

import {
  Box,
  Container,
  Paper,
  Typography,
  Modal
} from "@material-ui/core"

import {makeStyles} from "@material-ui/core/styles"

import HelpTooltip from "./HelpTooltip"
import SettingsTitle from "./SettingsTitle"
import TimePicker from "./TimePicker"
import Instructions from "./Instructions"

const useStyles = makeStyles({
  root: {
    outline: 0,
  }
})

const SettingsModal = (props) => {
  const classes = useStyles()
  return (
    <Modal open={props.open} >
        <Box m={3} className={classes.root}>
          <Paper variant="outlined">
            <SettingsTitle />
            <TimePicker />
            <Instructions />
          </Paper>
        </Box>
    </Modal>
  )
}

export default SettingsModal
