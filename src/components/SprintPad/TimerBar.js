import React from "react"

import {useDispatch, useSelector} from "react-redux"
import {useState, useEffect} from "react"

import {countdown, setTime} from "../../state/actions"

import {
  LinearProgress,
  Box,
  makeStyles
} from "@material-ui/core"

const useStyles = makeStyles({
  bar: {
    height: "8px",
    borderRadius:"10px"
  }
})

const TimerBar = (props) => {

  const dispatch = useDispatch()
  const time = useSelector(state=>state.time)
  const start = useSelector(state=>state.start)
  const hasText = useSelector(state=>state.hasText)
  const [startStamp, setStartStamp] = useState(0)
  const [counter, setCounter] = useState()
  const [initialTimerAmount, setInitialTimerAmount] = useState()

  const classes = useStyles()

  const timeLeftToBarAmount = () =>{
    return time/initialTimerAmount * 100
  }

  // have to create seperate useEffect because closures prevent start from updating
  useEffect(()=>{
    if (start){
      setStartStamp(()=>new Date().getTime())
      setInitialTimerAmount(time)
    }
  }, [start])

  useEffect(()=>{
    if (startStamp != 0){
      setCounter(setInterval(()=>{
        const current = new Date().getTime()
        dispatch(setTime(time-(current-startStamp)))
      }, 1000))
    }
  }, [startStamp])

  useEffect(()=>{
    if (time < 0) {
      clearInterval(counter)
    }
  }, [time])



  return (
    <Box p={hasText? 1: 0}>
      <LinearProgress
        variant="determinate"
        value={timeLeftToBarAmount()}
        className={classes.bar}/>
    </Box>
  )
}

export default TimerBar
