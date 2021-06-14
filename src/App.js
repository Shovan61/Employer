import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import reviews from './data';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './App.css';


const useStyles = makeStyles((theme) => ({
 root: {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
 
 },
 img: {
   height: theme.spacing(22),
   width: theme.spacing(22),
   position: 'relative',
   bottom: '180px',
 },
 borderImg: {
 alignSelf: 'center',
 height: '200px' 
 },
 border: {
  backgroundColor: '#e3f2fd',
  position: 'relative',
  top: '17px',
  left: '20px',
  height: '170px',
  width: '170px',
  borderRadius: '50%',
 },
 card: {
   height: '55%',
   width: '50%',
   display: 'flex',
   flexDirection: 'column'
 },
 quote: {
   position: 'relative',
   zIndex: '1',
   bottom: '8rem',
   height: '30px',
   width: '30px',
   color: 'white',
   backgroundColor: '#90caf9',
   borderRadius: '50%'
 },
 button: {
  alignSelf: 'center'  
 },
 arrow: {
   color: '#90caf9',
   cursor: 'pointer',
   transition: 'all 0.2s ease-in',
   '&:hover': {
    color: '#42a5f5'
     
   },
   margin: '0 8px'
 },
 surprise: {
   backgroundColor: '#e3f2fd',
   alignSelf: 'center',
   marginTop: '1.5rem',
   marginBottom: '3rem',
   borderRadius: '8px',
   cursor: 'pointer',
   transition: 'all 0.2s ease-in',
   '&:hover': {
    backgroundColor: '#90caf9',
    
   },
   '&:hover span': {
    color: '#333'
   }
 }
}));


 const allUserName = () => {
 let userArr = [];
 
 reviews.forEach(curUser => {
 userArr.push(curUser.name);
 });

 return userArr;

 };

 
function App() {
 const classes = useStyles();
 const [user, setUser] = useState(reviews[3]);
 
//   Up arrow
 const handleUp = () => {
  const currentUserName = user.name;
  const allUsers = allUserName();
  
  const indx = allUsers.indexOf(currentUserName);
  
  let newind;
  
  indx < reviews.length - 1 ? newind = indx + 1 : newind = 0;

  // console.log(`index: ${indx}, new Index: ${newind}`);
  setUser(reviews[newind]);
 };
 

//  Down arrow
 const handleDown = () => {
  const currentUserName = user.name;
  const allUsers = allUserName();
  
  const indx = allUsers.indexOf(currentUserName);

  let newind;
  
  if(indx === 0) {
    newind = reviews.length - 1;
  } else if (indx > 0) {
    newind = indx - 1;
  }
  
  setUser(reviews[newind]);
 };
 

//  Random
const handleRandom = () => {

  const currentUserName = user.name;
  const allUsers = allUserName();
  
  const indx = allUsers.indexOf(currentUserName);
 
  const randNumber = Math.floor(Math.random() * reviews.length)
  const randomPerson = reviews[randNumber];

  
  indx !== randNumber ? setUser(randomPerson) : setUser(reviews[Math.floor(Math.random() * reviews.length)])

  
};

 return (
   <div className={classes.root}>
      <h2>Our Reviews</h2>
      <div/>

      
      <Card className={classes.card}>
        <div className={classes.borderImg}>
          <div className={classes.border}/>
         <FormatQuoteIcon className={classes.quote}/>
        <Avatar 
        alt={user.name}
        src={user.image}
        className={classes.img} 
        />   
        </div>  


          <Typography style={{fontWeight: '700', letterSpacing: '2px', alignSelf: 'center', marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} variant="subtitle2" gutterBottom>
            {user.name}
            <span style={{color: '#1976d2', fontWeight: '400', letterSpacing: '0px', textTransform: 'uppercase'}}>{user.job}</span>

            <Typography variant='body2' style={{margin: '1rem'}} color='textSecondary'>            
            {user.text}
            </Typography>
           </Typography>
           
           <div style={{
             display: 'flex',
             flexDirection: 'column',
             position: 'fixed',
             top: '27rem',
             left: '36.3rem'
           }}>

           <div className={classes.button}>
              <ArrowBackIosIcon 
              className={classes.arrow}
              onClick={handleDown}
              />
              <ArrowForwardIosIcon 
              className={classes.arrow}
              onClick={handleUp}
              />
           </div>
           
           <div className={classes.surprise}>
              <Button 
              onClick={handleRandom} 
              >
                Surprise Me
              </Button>
           </div>
           </div>

      </Card>
      

    
       
   </div>
 )
     
};

export default App;

