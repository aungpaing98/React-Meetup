// props: [{data}, {data}]

import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';


function MeetupList(props){
    return (<div className={classes.list}>
        {props.meetups.map(meetup=>(
            <MeetupItem 
            key={meetup.id}
            image={meetup.image}
            address={meetup.address}
            title={meetup.title}
            description={meetup.description}
            />
        ))}
    </div>)
};

export default MeetupList;