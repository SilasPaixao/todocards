import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export function CardTask({title, task, deleteTasks}) {
  return (
    <Card style={{ width: '310px' }} >
      <CardContent>
        <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
          TO DO TASK
        </Typography>
        <Typography sx={{ fontSize: 14 }} component="div" align="center">
          {title}
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" style={{width:'290px', wordWrap:'break-word'}}>
          {task}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button onClick={deleteTasks} size="small">Apagar</Button>
      </CardActions>
    </Card>
  );
}