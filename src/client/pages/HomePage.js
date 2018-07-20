import React from 'react'

const Home = () => {

    return (
        <div>
        <div>Hello world - first server side rendering Home Page</div>
        <button onClick={() => console.log('click me')}>Click</button>
    </div>
    )
}

export default {
    component: Home
}