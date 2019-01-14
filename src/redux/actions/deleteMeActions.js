import { DELETE_ME_TYPE, NO_SERIOUSLY_DELETE_ME, NEW_POST, FETCH_POSTS } from './types'

export function deleteMe(){
    return function(dispatch){
        dispatch({
            type: DELETE_ME_TYPE,
            payload: 'Remember to delete your boilerplate actions :)'
        })
    }
}

export const noSeriouslyDeleteMe = (obj) => dispatch => {
    const API_URL = 'https://jsonplaceholder.typicode.com/posts';   
    console.log('newPost action')
    let params = {
        title: obj.title,
        body: obj.body
    }

    fetch(API_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    })
    .then(res => res.json())
    .then(data => {console.log(data); return data})
    .then(data => dispatch({
        type: NO_SERIOUSLY_DELETE_ME,
        payload: data
    }))
}

/** Example actions from online Redux tutorial from the following youtube video:
 *  https://www.youtube.com/watch?v=93p3LxR9xfM&t=2137s
 */
export function example1(post){
    return function(dispatch){
        
        const API_URL = 'https://jsonplaceholder.typicode.com/posts';
        console.log('newPost action')
        let params = {
            title: post.title,
            body: post.body
        }

        fetch(API_URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        })
        .then(res => res.json())
        .then(data => {console.log(data); return data})
        .then(newPost => dispatch({
            type: NEW_POST,
            payload: newPost
        }))
    }
}

export const example2 = () => dispatch => {
    const API_URL = 'https://jsonplaceholder.typicode.com/posts';
    fetch(API_URL)
        .then(res => res.json())
        .then(data => { console.log(data); return data })
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }))
}