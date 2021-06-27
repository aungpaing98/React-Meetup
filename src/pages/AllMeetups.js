import MeetupList from '../components/meetup/MeetupList'

const DUMMY_DATA = [
    {
        id: 1,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1200px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg",
        title: "The Great Wall",
        address: "China",
        description: "One of the Greatest Art"
    },
    {
        id: 2,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1200px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg",
        title: "The Great Wall",
        address: "China",
        description: "One of the Greatest Art"
    }
]


function AllMeetups(){
    return <div>
            <MeetupList meetups={DUMMY_DATA} /> 
    </div>
};

export default AllMeetups;