import React from "react"
import {useState, useEffect} from "react"
import {quotes} from "../../assets/quotes"
import {Textfit} from "react-textfit"
import {
  Typography,
  Box,
  Grid
} from "@material-ui/core"

const TextPrompt = (props) => {
  console.log(props.textHeight)
  return (
      <Box m={2} p={2} fontStyle="italic">
        <Box height={props.textHeight}>
          <Textfit mode="multi" max={30} style={{height: "100%"}}>
            "{props.quote.text}"
          </Textfit>
        </Box>
        <Box height={50} mt={2}>
          <Textfit mode="multi" max={20} style={{height:"100%"}}>
            - {props.quote.author}, {props.quote.book}
          </Textfit>
        </Box>

      </Box>
  )
}

export default TextPrompt
