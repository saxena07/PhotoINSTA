
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginleft: 0,
      width: '95%',
      height: '50%',
      margin: theme.spacing(1),
    },
  },
  paper: {
    // width: '80%',    
    height: '90%',    
    backgroundColor: "#E2DCC8",
    padding: theme.spacing(3), 
  },
  form: {
    // backgroundColor: "#E2DCC8",
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '50%',
    margin: '0px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));
