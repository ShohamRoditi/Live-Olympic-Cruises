import React, { Component } from 'react';
import { MdEdit, MdSave } from "react-icons/md";

class Competitor extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      editing: false 
    }

    this.edit = this.edit.bind(this)
    this.save = this.save.bind(this)
    this.renderForm = this.renderForm.bind(this)
    this.renderUI = this.renderUI.bind(this)

  }

  edit() {
    this.setState({ editing: true }) 
  }

 
  save(event, id) {
    event.preventDefault() // to prevent the default behaviour/ functionality
    console.log("print");
    console.log( this.state.id, this.score.value, this.time.value);
    this.props.onChange(this.props.index,this.score.value, this.time.value);
    this.setState({ editing: false }) 
  }

  renderForm(props) {
    return (
      <div>
          <form onSubmit = {this.save}>
            <h6>Please Enter The Following:</h6>
          
            <label className = "updateLabel"> 
                Score:
                <input required type = "text" name = "score" ref= {input => this.score = input}/>
            </label>
                    
            <label className = "updateLabel">
                Time: 
                <input required type = "text" name = "time" ref= {input => this.time = input}/>
            </label>
            <button type = "submit" className = "btn btn-primary card-button"><MdSave /></button>
          </form>
      </div>
    )
  }

 

  renderUI(props) {
    return (
      <div className="competitor">
        <div>{this.props.children}</div>
        <span>
          <button 
            onClick={this.edit} 
            className="btn btn-primary" 
            style={{marginRight: '7px'}}
          > 
            <MdEdit />
          </button>
        </span>
      </div>
    );
  }

  render() {
    return this.state.editing ? this.renderForm() : this.renderUI()
  }
}

export default Competitor;
