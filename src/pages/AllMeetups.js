import { useState, useEffect } from "react";
import MeetupList from "../components/meetup/MeetupList";


function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetup, setLoadedMeetup] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-meetup-ee022-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = []
        for (const key in data){
            const meetup = {
                id: key,
                ...data[key]
            };
            meetups.push(meetup)
        };

        setIsLoading(false);
        setLoadedMeetup(meetups);
        console.log(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading ... </p>
      </section>
    );
  }

  return (
    <div>
      <MeetupList meetups={loadedMeetup} />
    </div>
  );
}

export default AllMeetups;
