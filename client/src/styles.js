import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    width: '100%',
    height: '120px',
    borderRadius: 5,
    backgroundColor: 'black',
    margin: '0px 0px 20px 0px',
    display: 'flex',
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'white',
  },
  image: {
    marginLeft: '15px',
    textShadow: '20px',
  },
}));
