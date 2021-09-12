import { Button, TextField } from '@material-ui/core'
import React, { Component } from 'react'

export default class Todo extends Component {
    state={
        Title:"",
        Description:""

    }
    readValues=()=>{
        console.log(this.state)

    }
    onHandleChange=(event)=>{
        console.log("typing ...")
        this.setState({
            [event.target.name]:event.target.value
        })

    }
    render() {
        return (
            <div>
                <TextField 
                label="Title"
                margin="normal"

                name="Title"
                fullWidth
                onChange={this.onHandleChange}
                />
                <TextField 
                label="Description"
                margin="normal"
                name="Description"
                fullWidth
                onChange={this.onHandleChange}/>
                
                <Button onClick={this.readValues} color="primary" variant="contained" fullWidth>Submit</Button>
           <h1>{this.state.Title}</h1>
           <h1>{this.state.Description}</h1>
            </div>
        )
    }
}
