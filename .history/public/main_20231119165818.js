// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import { currentJokeSetup, currentJokePunchline } from '../utils/sample_data/emptyData';
import getRequest from '../utils/getJoke';
import in


  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();

startApp = () => {
  getRequest()
  init();
}
