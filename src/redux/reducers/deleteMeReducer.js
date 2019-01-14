
import { DELETE_ME_TYPE, NO_SERIOUSLY_DELETE_ME, FETCH_POSTS, NEW_POST } from '../actions/types'

 const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case DELETE_ME_TYPE: 
            return {
                ...state,
                item: 'remember to delete your boilerplate reducers :)'
            }
        case NO_SERIOUSLY_DELETE_ME:
            return {
                ...state,
                item: 'seriously why haven\'t you deleted your boilerplate reducers yet >:('
            }
        default:
            return state
    }
}

/** Example actions from online Redux tutorial from the following youtube video:
 *  https://www.youtube.com/watch?v=93p3LxR9xfM&t=2137s
 */
export function example1(state = initialState, action){
    let ret
    switch(action.type){
        case FETCH_POSTS:
            console.log('FETCH_POSTS reducer')
            ret = {
                ...state,
                items: action.payload
            }
            console.log('ret', ret)
            console.log('action',action)
            console.log('state',state)
            return ret;
        case NEW_POST:
            console.log('NEW_POSTS reducer')
            ret = {
                ...state,
                item: action.payload 
            }
            console.log('ret', ret)
            console.log('action',action)
            console.log('state',state)
            return ret;
        default:
            console.log('default reducer')
            return state
    }
}