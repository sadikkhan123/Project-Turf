import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import data from "../../../../resources/data.json"
import { Link } from 'react-router-dom';

const BookTurf = () => {
  

  return (
    <>
    <div>
    {data.map(data=>{
          return(
            <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={data.turfimages}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {data.Name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {data.price}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Link to={`/Singleturf/${data.id}`}>
      <Button size="small" color="primary">
        view
      </Button></Link>
    </CardActions>
  </Card>
          )
        })}

    
   
  </div>
  </>
  )
}

export default BookTurf