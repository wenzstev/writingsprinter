import React from "react"

import {
  Box,
  Typography
} from "@material-ui/core"

const SettingsTitle = () => {
  return (
    <Box textAlign="center" p={2}>
      <Typography variant="h5">
        How long do you want to write?
      </Typography>
    </Box>
  )
}

export default SettingsTitle
