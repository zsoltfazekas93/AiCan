import React from 'react';
import { Button } from 'react-bootstrap';

import { ipcRenderer } from 'electron';
import axios from 'axios';


const {
    FETCH_TRESHOLD,
  } = require('../../../utils/constants')
  
class Treshold extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            number_1: 0,
            number_2: 0,
            function: "SIN",
            message_1: "",
            message_2: "",
            treshold: "",
        }
        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
    }

    onInputchange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    onHandleChange(event) {
        this.setState({
            function: event.target.value
        })
    }
      
    onSubmitForm(event){
        const params = {
            number_1: this.state.number_1,
            number_2: this.state.number_2,
            function: this.state.function
        }
        axios.post('http://localhost:5000/treshold/', params)
        .then((response) => {
            this.setState({message_1: response.data.number_1,
                           message_2: response.data.number_2})
        })
        .then((response => {
            ipcRenderer.send(FETCH_TRESHOLD, {"message_1": this.state.message_1, "message_2": this.state.message_2});
        })
        )
        event.preventDefault()
    }

    componentDidMount(){
        axios.get('http://localhost:5000/treshold/')
        .then((response) => { 
            this.setState({treshold: response.data.treshold})
        })
    }
    
    componentWillUnmount(){

    }

    render() {
      return (
          <div>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Number_1:</label>
                        <input type="number" onChange={this.onInputchange} value={this.state.number_1} className="form-control" name="number_1"></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Number_2:</label>
                        <input type="number" onChange={this.onInputchange} value={this.state.number_2} className="form-control" name="number_2"></input>
                    </div>
                </div>
                <div className="form-group">
                    <label>Choose a function:</label>
                    <select onChange={this.onHandleChange} className="form-control" id="function_selector">
                        <option value="SIN">SIN</option>
                        <option value="COS">COS</option>
                        <option value="LOG">LOG</option>
                    </select>
                </div>
                <div className="col text-center">
                    <Button variant="primary" onClick={this.onSubmitForm}>Check Tresholds</Button>
                </div>
                <div className="col text-center">
                    <label>Treshold: {this.state.treshold}</label>
                </div>
            </form>

            <div className="col text-center">
                <div className="alert alert-light" role="alert">
                    {this.state.message_1}
                </div>
                <div className="alert alert-light" role="alert">
                    {this.state.message_2}
                </div>
            </div>
        </div>
        );
    }
  }

export default Treshold;
