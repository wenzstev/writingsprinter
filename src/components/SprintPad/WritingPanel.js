import React from "react"

import {
  Paper,
  Box,
  TextField
} from "@material-ui/core"

const WritingPanel = (props) =>{
  console.log(props)
  return (
    <Box m={2}>
        <Box p={2}>
          <TextField
            fullWidth
            multiline
            placeholder="Get inspired!"
            value={props.currentParagraph}
            onChange={props.handleChange}
            onKeyPress={props.handleKeyPress}
          />
      </Box>
    </Box>
  )
}

export default WritingPanel
