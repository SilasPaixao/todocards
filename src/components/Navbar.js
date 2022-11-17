import React, {useState, useEffect, useContext, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PlaylistAddSharpIcon from '@material-ui/icons/PlaylistAddSharp';
import AssignmentSharpIcon from '@material-ui/icons/AssignmentSharp';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import {Divider} from '@material-ui/core';
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
    const componentDidMountTimes = useRef(0)
    const {darkMode, setDarkMode} = useContext(GlobalContext);
//---------------------------------theme mode part
    useEffect(
      ()=>{
        initialThemeMode()
        // console.log("didmount")
        // console.log(darkMode)
    },[])

    useEffect(()=>{
      if(componentDidMountTimes.current >= 2 ){ 
        storageThemeMode()
        // console.log("storageThemeMode(useEffect)")
      }else{
        componentDidMountTimes.current += 1
        // console.log("storageThemeMode(useEffect COLOQUEI TRUE)", componentDidMountTimes.current)
      }
    },[darkMode])

    const initialThemeMode = ()=>{
     localStorage.getItem("themeValue")==="dark" ? localStorage.setItem("themeValue", "dark") : localStorage.setItem("themeValue", "light")
    //  console.log("initialThemeMode(function)")
    }

    const handleMode = () => {
      setDarkMode(!darkMode)
      // console.log(darkMode)
    }

    const storageThemeMode = ()=>{
      darkMode ? localStorage.setItem("themeValue", "dark") : localStorage.setItem("themeValue", "light");
      // console.log("storageThemeMode(function)")
    }
 //-------------------------------------------------------------
    const history = useNavigate();
    const changePage = (page)=>{
      history(page)
    }

    const [value, setValue] = useState(0);
  
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
        <BottomNavigationAction onClick={handleMode} label="Modo Noturno/Diurno" icon={<SettingsBrightnessIcon />} />
        {/* <Switch ref={themeModeButton} inputProps={{ 'aria-label': 'primary checkbox' }} onClick={handleMode}/> */}

      </BottomNavigation>
    );
  }