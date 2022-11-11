import React, {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PlaylistAddSharpIcon from '@material-ui/icons/PlaylistAddSharp';
import AssignmentSharpIcon from '@material-ui/icons/AssignmentSharp';
import {Divider, Switch} from '@material-ui/core';
import {GlobalContext} from "../global/GlobalContext";

const useStyles = makeStyles({
    root: {
      width: '98vw',
      marginTop:'5px',
      justifyContent:'end'
    },
    divider:{
        flexGrow: 1
    }
  });
  
  export const Navbar = ()=>{
    const classes = useStyles();

    const {darkMode, setDarkMode} = useContext(GlobalContext);

    const history = useNavigate();
    const changePage = (page)=>{
      history(page)
    }


    const [value, setValue] = useState(0);
  
    const handleMode = () => {
      setDarkMode(!darkMode)
    }
  
    return (
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
        edge="end"
      >
        <BottomNavigationAction onClick={()=>{changePage('/')}} label="Add Tarefa" icon={<PlaylistAddSharpIcon />} />
        <div className={classes.divider}></div>
        <BottomNavigationAction onClick={()=>{changePage('/tasks')}} label="Tarefas Cadastradas" icon={<AssignmentSharpIcon />} />
        <Divider orientation="vertical" flexItem/>
        <Switch inputProps={{ 'aria-label': 'primary checkbox' }} onClick={handleMode}/>

      </BottomNavigation>
    );
  }