import React from "react"
import CompletedParagraph from "./CompletedParagraph"

import {Box} from "@material-ui/core"

const CompletedSection = (props) => {
  const completedParagraphs = props.paragraphs.map((x, i) => <CompletedParagraph text={x} key={i} />)

  return (
    <Box px={3}>
      {completedParagraphs}
    </Box>
  )
}

export default CompletedSection
