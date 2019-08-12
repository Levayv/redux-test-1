// src/js/components/Form.jsx

import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";
function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}
class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        console.log("ConnectedForm.handleChange()");
        console.log(event.target.id);
        console.log(event.target.value);
        this.setState({ [event.target.id]: event.target.value });
    }
    handleSubmit(event) {
        console.log("ConnectedForm.handleSubmit()");
        event.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        console.log("generated id="+id);
        this.props.addArticle({ title, id });
        this.setState({ title: "" });
    }
    render() {
        console.log("ConnectedForm.render()");
        const { title } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                    SAVE
                </button>
            </form>
        );
    }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;