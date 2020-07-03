import React from "react"

import {useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {reset} from "../../state/actions"

import WritingPanel from "./WritingPanel"
import CompletedSection from "./CompletedSection"
import TimesUpPanel from "./TimesUpPanel"

import {Box, makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
  background: {

  }
})

const WritingController = () => {

  const [completedParagraphs, setCompletedParagraphs] = useState([])
  const [currentParagraph, setCurrentParagraph] = useState("")
  const [confirmClick, setConfirmClick] = useState(false)

  const [hasDownloaded, setHasDownloaded] = useState(false)

  const time = useSelector(state=>state.time)
  const dispatch = useDispatch()
  const classes = useStyles()

  const addParagraphToCompleted = () =>{
    setCompletedParagraphs(state=>[...state, currentParagraph])
    setCurrentParagraph("")
  }

  const handleKeyPress = (e) => {
    if (e.key == "Enter"){
      addParagraphToCompleted()
    }
  }

  const downloadSprint = () => {
    const element = document.createElement("a")
    const file = new Blob([completedParagraphs.join(" ")], {type: 'text/plain'})
    element.href = URL.createObjectURL(file)
    element.download="sprint.txt"
    document.body.appendChild(element)
    element.click()
    setHasDownloaded(true)
  }

  const resetClick = () => {
    if (hasDownloaded || confirmClick){
      resetWritingPanel()
    } else if (!confirmClick){
      setConfirmClick(true)
    }
  }

  const resetWritingPanel = () =>{
    dispatch(reset())
    setCompletedParagraphs([])
    setConfirmClick(false)
    setHasDownloaded(false)
  }

  const inputPanel = (time > 0 ?
    <WritingPanel
      currentParagraph={currentParagraph}
      handleChange={(e)=>setCurrentParagraph(e.target.value)}
      handleKeyPress = {handleKeyPress}
      /> :
      <TimesUpPanel
        downloadSprint={downloadSprint}
        resetClick={resetClick}
        confirmClick={confirmClick}/>
    )

  useEffect(()=>{
    if (time < 0) {
      addParagraphToCompleted()
    }
  }, [time])

  return(
    <Box className={classes.background} m={2}>
      <CompletedSection
        paragraphs={completedParagraphs}
        />
        {inputPanel}
    </Box>
  )
}

export default WritingController
