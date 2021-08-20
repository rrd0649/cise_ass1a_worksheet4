import React from "react";

// import Home from "./pages/Home";
// import SEPractice from "./pages/SE-Practice";
// import SubmitArticle from "./pages/Submit-Article"; 
// import NotFoundPage from "./pages/404";

import {
  BrowserRouter as Router
} from "react-router-dom";

const App = () =>  {
    return (
        <Router>
        <div className="content">
          <h1>Software Engineering Practice Evidence Repository (SEPER)</h1>
            <ul className="header">
                <li><a href = "/">Home</a></li>
                <li><a href = "/SEPractice">Select the Practice</a></li>
                <li><a href = "/SubmitArticle">Submit an Article</a></li>
            </ul>
          </div>
        </Router>
    );
}
 
export default App;
