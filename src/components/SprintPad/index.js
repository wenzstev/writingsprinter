import React from "react"

import CompletedSection from "./CompletedSection"
import PromptWindow from "./PromptWindow"
import WritingPanel from "./WritingPanel"
import WritingController from "./WritingController"
import {
  Container,
  Paper,
  Box,
  makeStyles
} from "@material-ui/core"

const useStyles = makeStyles({
  container: {
  }
})

const SprintPad = () => {
  const classes = useStyles()
  return(
    <Container maxWidth={false}>
      <Box my={2}>
          <PromptWindow />
          <WritingController />
      </Box>
    </Container>
  )
}


export default SprintPad
