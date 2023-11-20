// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import { currentJokeSetup, currentJokePunchline } from '../utils/sample_data/emptyData';
import { CustomFunction } from 'sass';
import getRequest from '../utils/getJoke';
import init from '../components/init';


  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();

startApp = () => {
  getRequest()
  init();
}
