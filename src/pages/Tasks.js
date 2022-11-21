import React, {useEffect, useState, useRef} from "react";
import {Navbar} from "../components/Navbar"
import {CardTask} from "../components/CardTask"
import {Grid, useTheme} from "@material-ui/core";
import styled,{ createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props.theme === 'dark' ? '#333' : '#fafafa')};
  }  
`

export const Tasks = ()=>{

    const componentDidMount = useRef(false)
    
    const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        getTasks()
    },[])

    useEffect(()=>{
        componentDidMount.current ? saveToLocalStorage() : componentDidMount.current = true;
    },[tasks])

        
    const theme = useTheme(); 


    const getTasks = ()=>{
        const storageTasks = JSON.parse(localStorage.getItem("cards"));
        storageTasks && setTasks(storageTasks)
    }
//    console.log(tasks)

    const deleteTasks = (indTaskToDel)=>{ 
            
        setTasks(
            tasks.filter((item, ind, obj)=>{
                return ind !== indTaskToDel;
            })
        )        

    }

    const saveToLocalStorage = ()=>{
        localStorage.setItem("cards", JSON.stringify(tasks))
    }

    const cardsToRender = tasks.map((item, ind)=>{
        return(
            <div render={ind} style={{marginTop:'30px', margin:'5px'}} >
                <CardTask title={item.title} task={item.task} deleteTasks={()=>{deleteTasks(ind)}} />
            </div>
        )
    })

   
    return(
        <div>
            <GlobalStyle theme={theme.palette.type} />
            <Navbar />
            <Grid container justifyContent="center" alignItems="start">
                {cardsToRender}
            </Grid>
        </div>
    )
}