import React, {useEffect, useState} from "react";
import {Navbar} from "../components/Navbar"
import {Grid, useTheme} from "@material-ui/core";
import styled,{ createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props.theme === 'dark' ? '#333' : '#fafafa')};
  }  
`

const MainStyle = styled.div`
    display:flex;
    align-items: flex-start; 
    flex-wrap: wrap;
    background-color: aliceblue;
    div{
      background-color:aquamarine;
      min-width: 50px;
      max-width: 190px;
      min-height: 209px;
      margin: 5px;
      word-break: break-all;
      flex-grow: 1;
      flex-shrink: 0;
      span{background-color:red; padding:4px; cursor:pointer}
    }
`

export const Tasks = ()=>{
    
    // const tasks = [{title:"teste", task:"12abcssdasdads"},
    //  {title:"teste1", task:"21abcssdasdads"},
    //  {title:"teste2", task:"23abcssdasdads"},
    //  {title:"teste3", task:"32abcssdasdads"}
    // ]
    useEffect(()=>{
        getTasks()
    },[])

        
     const theme = useTheme(); 

   const [tasks, setTasks] = useState({});
   console.log("AAAAAAAAAAAAAAAAAAA", tasks)

    const getTasks = ()=>{
        const storageTasks = JSON.parse(localStorage.getItem("cards"));
        const newTasks = [...tasks, storageTasks]
         setTasks(newTasks)
        
    }

   
    return(
        <div>
            <GlobalStyle theme={theme.palette.type} />
            <Navbar />
            <Grid container justifyContent="center" alignItems="center">
                {tasks.map((dado, i)=>{
                    return (<MainStyle key={i}>
                        <span >X</span>
                        <h2>{dado.title}</h2>
                        <p>{dado.task}</p>
                    </MainStyle>)})
                }
            </Grid>
        </div>
    )
}