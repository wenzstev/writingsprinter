export const setTime = (value) => {
  return {
    type: "SETTIME",
    payload: value
  }
}


export const setPrompt = (prompt) => {
  return {
    type: prompt
  }
}

export const startCounter = () => {
  return {
    type: "STARTTIMER"
  }
}

export const reset = () => {
  return {
    type: "RESET"
  }
}
