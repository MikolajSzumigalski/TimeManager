import uuid from './uuid'
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM} from '../actions/types'
const initialState = {
    items: [
        {id: uuid(), name: 'Watch Witcher 1'},
        {id: uuid(), name: 'Watch Witcher 2'},
        {id: uuid(), name: 'Watch Witcher 3'},
        {id: uuid(), name: 'Watch Witcher 4'}
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        default:
            return state    
    }
}