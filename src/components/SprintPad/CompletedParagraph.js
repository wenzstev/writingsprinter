import React from "react"

import {Typography} from "@material-ui/core"

const CompletedParagraph = (props) => {
  return (
    <Typography
      variant="body1"
      component="p"
      align="left"
      paragraph={true}>
      {props.text}
    </Typography>
  )
}

export default CompletedParagraph
