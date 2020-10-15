import React, {ReactElement} from 'react';
import '../styles/MainLayout.css'
import {Link} from 'react-router-dom'
import {StandardComponentProps} from '../helpers/interfaces'
import AtomIcon from '../images/atom-icon.png'
import {Typography, AppBar, Toolbar, Button, makeStyles, Container} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: "center",
        flex: "1 1 auto"
    },
    mainContainer: {
        paddingTop: 40
    },
    menuBtn: {
        color: "#ffffff"
    }
});

function MainLayout({children}: StandardComponentProps) {
    const classes = useStyles()
    return (
    <>
        <AppBar position="static" color="secondary">
            <Toolbar>
                <div className={classes.root}>
                    <Typography align="center" variant="h4">QuickEd</Typography>
                    <img alt="atom" className="header-icon" src={AtomIcon}/>
                </div>
                <Button variant="text">
                    <Link to="/formula" className={classes.menuBtn}>Формулы</Link>
                </Button>
                <Button variant="text">
                    <Link to="/test" className={classes.menuBtn}>Тесты</Link>
                </Button>
                <Button variant="text">
                    <Link to="/game" className={classes.menuBtn}>Игры</Link>
                </Button>
            </Toolbar>
        </AppBar>
        <Container maxWidth="lg" className={classes.mainContainer}>{children as ReactElement}</Container>
    </>);
}

export default MainLayout;
