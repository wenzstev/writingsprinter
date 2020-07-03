import React from "react"

import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormGroup,
  FormControlLabel,
  Radio,
  Grid,
  Button,
  Box,
  Checkbox
} from "@material-ui/core"

import {useStyles} from "@material-ui/styles"

import {useDispatch, useSelector} from "react-redux"
import {setTime, setPrompt, startCounter} from "../../state/actions"

const TimePicker = (props) => {
  const dispatch = useDispatch()
  const time = useSelector(state=>state.time)
  const hasTextPrompt = useSelector(state=>state.hasText)
  const hasImagePrompt = useSelector(state=>state.hasImage)

  return (
    <Grid container justify="center">
      <FormControl
      component="fieldset">
        <RadioGroup
          row
          value={time}
          onChange={(event)=>dispatch(setTime(parseInt(event.target.value)))}>
          <FormControlLabel
            value={300000}
            control={<Radio />}
            label="5 minutes"
            labelPlacement="bottom"/>
          <FormControlLabel
            value={600000}
            control={<Radio />}
            label="10 minutes"
            labelPlacement="bottom"/>
          <FormControlLabel
            value={900000}
            control={<Radio />}
            label="15 minutes"
            labelPlacement="bottom"/>
        </RadioGroup>
        <Box mt={2}>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox checked={hasTextPrompt}/>}
              label="Include excerpt"
              value="TEXT"
              onChange={(event)=>dispatch(setPrompt(event.target.value))}/>
          </FormGroup>
        </Box>
        <Box mt={2}>
          <Button
            variant="contained"
            onClick={()=>dispatch(startCounter())}
            fullWidth>
            Begin!
          </Button>
        </Box>
      </FormControl>
    </Grid>

  )
}

export default TimePicker
