import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Home from './HomePage'
import ReactDOM from 'react-dom';
const {spawn} = require('child_process');

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({
   
    container:
    {
        left: '50%', top: '50%',
    },
    paper: {
      marginTop: theme.spacing(88888),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
      alignItems: 'center'
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  


class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            username:'',
            password:'',
            remember:false,
            result:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    handleChange(event) {
        const {name,value} = event.target;
        this.setState({[name]:value});
    }
    handleSubmit(event){
        this.setState({submitted:true});
        const {username,password} = this.state;
        if(username =='Test' && password=='Test'){
          fetch('/getexample',
          {
            method: "POST",
            cache: "no-cache",
            headers:{
                "content_type":"application/json",
            },
            body:JSON.stringify(username)

          }).then(res => {
            return res.json()
          }).then(json => {
            this.setState({['result']:json.result});
          })



          alert('Welcome '  + username + password )
         
          ReactDOM.render(
            <Home />,
            document.getElementById('root')
          );
           /* ReactDOM.render(
                <React.StrictMode>
                <HomePage />
                </React.StrictMode>,
                document.getElementById('root')
            );*/
  
           // alert('Welcome ' + username );
          // return <backdown />;
        }
        
        event.preventDefault();


    }

    render() {

        
        const {username, password} =this.state;
        const classes= useStyles;
        return (
            <Container component="main" maxWidth="xs" className ={classes.container}>
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in { this.state.result}
              </Typography>
              <form className={classes.form}  onSubmit={this.handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="User Name"
                  name="username"
                  autoComplete="email"
                  autoFocus
                  value = {username}
                  onChange = {this.handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value = {password}
                  onChange = {this.handleChange}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
            <Box mt={8}>
              <Copyright />
            </Box>
          </Container>
        );    
    }
}

  
  
    
  
  

export default SignIn;