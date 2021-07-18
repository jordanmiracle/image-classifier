import React, {Component} from "react";
import './App.css';
import PostForm from "./components/PostForm/PostForm";
import PostList from "./components/PostList/PostList";

class App extends Component {
    state = {
        text: null
    }

    render() {
        return (
        <div className="App">
          <PostForm/>
          <hr />
          <PostList/>
        </div>
        );
    }

}

export default App;

