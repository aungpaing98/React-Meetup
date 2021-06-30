import MeetupList from '../components/meetup/MeetupList';
import FavoriteContent from '../store/favorite-contents';
import {useContext} from 'react';

function Favorites(){
    const FavoriteCtx = useContext(FavoriteContent);
    let contents;
    if (FavoriteCtx.totalFavorites===0){
        contents=<p>Nothing Favorites</p>
    }
    else{
        contents = <MeetupList meetups={FavoriteCtx.favorites} />
    }
    return 
        <section>
            {contents}
        </section>
};

export default Favorites;