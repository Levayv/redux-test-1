// src/js/components/App.jsx

import React from "react";
import List from "./List";
import Form from "./Form";
import NameInput from "./NameInput";
const App = () => (
    <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
            <h2>Articles</h2>
            <List />
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>Add a new article</h2>
            <Form />
        </div>
        <div>
            <NameInput/>
            <NameInput/>
            <NameInput/>
        </div>
    </div>
);
export default App;