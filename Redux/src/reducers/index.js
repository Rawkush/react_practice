import {combineReducers} from 'redux';

const songsReducer = () => {

    return [
        {
            title: 'Songs 1',
            duration: '2:30'
        },
        {
            title: 'Songs 2',
            duration: '2:30'
        },
        {
            title: 'Songs 3',
            duration: '2:30'
        }
    ];
};

const selectedSongReducer = (selectedSong=null, action)=> {
    if(action.type='SONG_SELECTED')
        return action.payload;

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})