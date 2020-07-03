import React from "react"
import {Tooltip} from "@material-ui/core"

import HelpIcon from "@material-ui/icons/Help"



const HelpTooltip = (props) => {
  return(
    <Tooltip
      title={props.children}
      fontSize="small"
      placement="right-start"
      arrow>
      <HelpIcon />
    </Tooltip>

  )
}

export default HelpTooltip
