import React from 'react';

import Header from './components/Header/Header';
import Posts from "./pages/Posts/Posts";
import PostContainer from "./components/PostContainer/PostContainer";

function App() {
    return (
        <>
            <Header/>
            <Posts/>
            <PostContainer/>
        </>
    );
}

export default App;
