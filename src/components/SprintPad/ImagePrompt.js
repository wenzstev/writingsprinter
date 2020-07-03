import React from "react"
import {useEffect, useState} from "react"
import {Box, Grid, makeStyles} from "@material-ui/core"


const useStyles = makeStyles({
  image: props=> ({
    maxHeight: props.maxHeight-60,
    maxWidth: "100%"
  })
})

const ImagePrompt = (props) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [imgJSON, setImgJSON] = useState()
  const [image, setImage] = useState()

  const classes = useStyles(props)

  useEffect(()=>{
    const url = "https://pixabay.com/api/?"
    const urlParams = new URLSearchParams("")
    urlParams.append("key", "17274503-2ae9dc6d6a12213f10ab70078")
    urlParams.append("q", "people")
    urlParams.append("editors_choice", "true")
    urlParams.append("safesearch", "true")
    urlParams.append("per_page", 100)
    console.log(urlParams.toString())
    fetch(url + urlParams.toString())
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          const temporaryImageVar = result["hits"][Math.floor(Math.random()*100)]
          console.log(temporaryImageVar)
          setImgJSON(temporaryImageVar)
          setImage(temporaryImageVar["webformatURL"])
        },
        (error) => {
          console.log("houston, we have a problem")
          setIsLoaded(true)
          setImgJSON(error)
        }
      )
  }, [])

  console.log(imgJSON)
  console.log(image)

  return (
      <Box m={2} p={2}>
        <img src={image} className={classes.image}/>
      </Box>

  )
}

export default ImagePrompt
