import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';
import { useRef } from 'react';

function NewMeetupForm(props){
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const newMeetup = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };

        props.addMeetup(newMeetup);
    }


    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label>Meetup Title</label>
                    <input type="text" required id='title' ref={titleInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label>Meetup Image</label>
                    <input type="url" required id='image' ref={imageInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label>Meetup Address</label>
                    <input type="text" required id='address' ref={addressInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label>Meetup Description</label>
                    <input type="textarea" required id='description' ref={descriptionInputRef}></input>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>

        </Card>
    )
};

export default NewMeetupForm;