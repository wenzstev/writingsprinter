import {combineReducers} from "redux"

const timeReducer = (state=600000, action) => {
  switch(action.type){
    case "SETTIME":
      return action.payload
    case "RESET":
      return 600000
    default:
      return state
  }
}

const startReducer = (state=false, action) => {
  switch(action.type){
    case "STARTTIMER":
      return true
    case "RESET":
      return false
    default:
      return state
  }
}

const hasImagePromptReducer = (state=true, action) => {
  switch(action.type){
    case "IMAGE":
      return !state
    default:
      return state
  }
}

const hasTextPromptReducer = (state=true, action) => {
  switch(action.type){
    case "TEXT":
      return !state
    default:
      return state
  }
}


const rootReducer = combineReducers({
  time: timeReducer,
  start: startReducer,
  hasImage: hasImagePromptReducer,
  hasText: hasTextPromptReducer,
})

export default rootReducer
