const WELCOME = 'WELCOME'

export function welcomeText() {
  return {
    type: WELCOME
  }
}


const initialState = {
  welcomeText: '',
}

export default function welcome (state = initialState, action) {
  switch (action.type) {
    case WELCOME :
      return {
        ...state,
        welcomeText: 'Scrape The News'
      }
    default :
     return state
  }
}