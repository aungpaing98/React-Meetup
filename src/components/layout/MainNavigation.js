import classes from './MainNavigation.module.css';
import { Link } from 'react-router-dom';

function MainNavigation(){

    return <div className={classes.header}>
                <h1>Meetups</h1>
                <div className={classes.logo}>
                    <nav>
                        <ul>
                            <Link to="/">All Meetups</Link>
                            <Link to="/new">New Meetup</Link>
                            <Link to="/favorites">Favorites</Link>
                        </ul>
                    </nav>
                </div>
            </div>
};

export default MainNavigation;