import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import uuid from 'uuid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

class TaskList extends Component{
    state = {
        open: false,
        name: ''
    }
    handleClickOpen = () => {
        this.setState({ open: true });
      };
    
    handleClose = () => {
        this.setState({ open: false });
      };
    
    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    addTask = () => {
        this.setState(state => ({
            items: [...state.items, {id: uuid(), name: this.state.name}]
        }))
        this.setState({ open: false });
    }

    render(){
        const { items } = this.state
        return(
            <div style={{margin: '0 auto', width: '20%'}}>
                <Button 
                    variant="contained" 
                    color="primary"
                    style={{marginBottom: '2rem', marginTop: '2rem'}}
                    onClick={this.handleClickOpen}
                    >Dodaj zadanie</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Dodaj zadanie</DialogTitle>
                    <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Twoje zadanie"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        fullWidth
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Powrót
                    </Button>
                    <Button onClick={this.addTask} color="primary">
                        Dodaj
                    </Button>
                    </DialogActions>
                </Dialog>  
                <List component="nav" style={{maxWidth: 360}}>
                    <TransitionGroup >
                        {items.map(({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListItem button>
                                    <Button
                                        style={{backgroundColor: 'red', color: 'white'}}
                                        onClick={() => {this.setState( state => ({
                                            items: state.items.filter(item => item.id !== id)
                                        }))
                                        }}
                                    >
                                    Usuń
                                    </Button>
                                    <ListItemText primary={name} />
                                </ListItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </List>
            </div>      
        )
    }
}

export default TaskList