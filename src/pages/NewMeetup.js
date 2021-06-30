import NewMeetupForm from "../components/meetup/NewMeetupForm";
import { useHistory } from "react-router-dom";

function NewMeetups() {
    const history = useHistory();
  function addMeetupHandler(meetup) {
    fetch(
      "https://react-meetup-ee022-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetup),
        header: {
          "Content-type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <div>
      <h1>New Meetup Form</h1>
      <NewMeetupForm addMeetup={addMeetupHandler} />
    </div>
  );
}

export default NewMeetups;
