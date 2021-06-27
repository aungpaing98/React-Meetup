// props:{id, image, title, address, description}
import classes from './MeetupItem.module.css';
import Card from '../ui/Card';

function MeetupItem(props){
    return <div className={classes.item}>
        <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.description}></img>
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <address>{props.address}</address>
                <div className={classes.actions}>
                    <button>To Favorites</button>
                </div>
            </div>
        </Card>
    </div>

};

export default MeetupItem;