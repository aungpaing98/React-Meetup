import './App.css';
import MainNavigation from './components/layout/MainNavigation';
import {Route, BrowserRouter} from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';


function App() {
  return (
    <div>
      <BrowserRouter>
        <MainNavigation />
        <Route exact path='/'><AllMeetups /></Route>
        <Route exact path='/new'><NewMeetup /></Route>
        <Route exact path='/favorites'><Favorites /></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
