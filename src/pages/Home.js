import React, {useState} from "react";
import {Navbar} from "../components/Navbar"
import {Grid, makeStyles, TextField, Typography, Snackbar, useTheme} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props.theme === 'dark' ? '#333' : '#fafafa')};
  }  
`

const useStyles = makeStyles((theme)=>({
    root:{
        height:'100vh',
        color:theme.palette.secondary.main,
    },
    input:{
        marginTop:'10px',
        padding:'10px',
        borderColor:'#2f6bd4',
        backgroundColor:'#2f6bd4',
        color:'white',
        "&:hover":{
            cursor:'pointer',
        }
    },
    textField:{
        width:'40vw',
        borderColor:'#2f6bd4',
    },
    textarea:{
        padding:'15px',
        resize:'none',
        borderColor:'#888',
        backgroundColor:'inherit'

    },
    labelTarefa:{
        color:'#aaa',
        fontWeight:'bold'
    }
}));


export const Home = ()=>{

    const classes = useStyles();
    
    const theme = useTheme(); 

    const [task, setTask] = useState({});
    const [cards, setCard] = useState([]);
    const [SuccessMsg, setSuccessMsg] = useState(false);


    const handleTxt = (e)=>{
        setTask({...task, [e.target.name]:e.target.value})
        console.log(task)

    }


    const buildCard = (e) =>{
        e && e.preventDefault();
        e && setSuccessMsg(true); 
        e && console.log("TAREFA REGISTRADA");
        setCard([...cards, task])
        localStorage.setItem("cards", JSON.stringify(cards))
    }

        const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setSuccessMsg(false);
    }

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    return(
        <div>
            <GlobalStyle theme={theme.palette.type} />
            <Navbar />
            <form onSubmit={buildCard}>
                <Grid classes={{root:classes.root}} container direction="column" justifyContent="center" alignItems="center">
                    <Typography variant="h5" component="h2">
                        To Do Task <AssignmentTurnedInIcon />
                    </Typography>
                    
                    <br />
                    <br />

                    <TextField
                        id="outlined-secondary"
                        label="Nomeie a Tarefa"
                        variant="outlined"
                        color="secondary"
                        className={classes.textField}
                        name="title"
                        onChange={handleTxt}
                        value={task.title}
                        title="Nome da tarefa"
                        required
                                                
                    />
                    <br />
                    <br />
                    <label htmlFor="card" className={classes.labelTarefa}>Sua tarefa:</label>
                    <textarea name="task" onChange={handleTxt} value={task.task} id={"card"} className={classes.textarea} cols={45} rows={8} maxLength={200}></textarea>
                    <input type="submit" className={classes.input} value="enviar"/>
                </Grid>
                <Snackbar open={SuccessMsg} autoHideDuration={1500} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                          Tarefa Registrada!
                    </Alert>
                </Snackbar>
            </form>
        </div>
    )
}