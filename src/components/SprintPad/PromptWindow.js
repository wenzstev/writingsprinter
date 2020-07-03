import React from "react"
import {useEffect, useState} from "react"
import {quotes} from "../../assets/quotes"
import {useSelector} from "react-redux"
import {
  Box,
  Paper,
  Grid,
  Container,
  makeStyles
} from "@material-ui/core"

import jeans from "../../assets/jeans.jpg"
import leafiron from "../../assets/leafiron.jpg"

import TimerBar from "./TimerBar"
import ImagePrompt from "./ImagePrompt"
import TextPrompt from "./TextPrompt"

const useStyles = makeStyles({
  headerBox: {
    position: "fixed",
    width: "100%",
    top: 16,
    left: 0
  },
  headerPaper: {
    width: "90%",
    margin: "auto",
  }
})

const PromptWindow = () => {
  const classes = useStyles()

  const [quote, setQuote] = useState({})
  const hasTextPrompt = useSelector(state=>state.hasText)


  useEffect(()=>{
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }, [])


  const headerHeight = hasTextPrompt ? 200 : 40

  const showTextPrompt = hasTextPrompt ?
    <TextPrompt quote={quote} textHeight={headerHeight/4}/>
    : null


  return (
      <Box height={headerHeight}>
        <Box className={classes.headerBox}>
          <Paper className={classes.headerPaper} elevation={2}>
            {showTextPrompt}
            <TimerBar/>
          </Paper>
        </Box>
      </Box>


  )
}

export default PromptWindow
