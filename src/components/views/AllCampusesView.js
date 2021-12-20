//import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontType: 'bold',
    fontFamily: 'Courier, sans-serif', 
    fontSize: '35px', 
    color: '#CDDC39'
  },
  appBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  greeting:{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: "50%",
    margin: "auto",
  },
  links:{
    textDecoration: 'none',
  }

}));

const AllCampusesView = (props) => {
  const {campuses,deleteCampus} = props;
  const classes = useStyles();
  if (!campuses.length) {
    return(
    <div>
      <p>There are no campuses.</p>
      <Link to={`campus/new`}>
          <button>Add New Campus</button>
      </Link>
    </div>
    );   
  }

  return (
    <div>
      <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit" >
            University Directory
          </Typography>

          <Link className={classes.links} to={'/'} >
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              Home
            </Button>
          </Link>

          <Link className={classes.links} to={'/campuses'} >
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'} >
            <Button variant="contained" color="primary">
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>

      {campuses.map((campus) => {
        return (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <img src={campus.imgurl} alt="" height = '150' width = '250'/>
          <h2>{campus.address}</h2>
          <p>{campus.description}</p>
          <FaTimes style={{color:'red',cursor:'pointer'}} onClick={() => deleteCampus(campus.id)}>Delete</FaTimes>
          <Link to={`/editcampus`}>
          <button>Edit</button>
          </Link>
        </div>
  );
}
)}
<Link to={`/newcampus`}>
  <button>Add New Campus</button>
</Link>
</div>
);
};

export default AllCampusesView;