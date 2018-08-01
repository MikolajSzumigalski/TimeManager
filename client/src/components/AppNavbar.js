import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

class AppNavbar extends Component {
    state = {
        styles: {
            root: {
              flexGrow: 1,
            },
            flex: {
              flexGrow: 1,
            },
            menuButton: {
              marginLeft: -12,
              marginRight: 20,
            },
          }
    }
    render() {
        return(
            <div style={this.state.styles.root}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton style={this.state.styles.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" style={this.state.styles.flex}>
                        Rzeczy do porobienia
                    </Typography>
                    <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default AppNavbar