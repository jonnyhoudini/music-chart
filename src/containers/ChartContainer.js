import React, { useState, useEffect } from 'react'
import SongList from '../components/SongList'
import Header from '../components/Header';
import SelectGenre from '../components/SelectGenre';

const ChartContainer = () => {

    const [songs, setSongs] = useState([]);


    const chart = {
        all: 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json',
        rock: 'https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json',
        dance: 'https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json',
        country: 'https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json'
    }

    const [genre, setGenre] = useState('https://itunes.apple.com/gb/rss/topsongs/limit=20/json');
    // const [genre, setGenre] = useState("");

    const onGenreSelect = (choice) => {
        setGenre(chart[choice]);
        getSongs();
    };

    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = function () {
        fetch(genre)
            .then(res => res.json())
            .then(songs => setSongs(songs.feed.entry))
    }

    return (
        <>
            <main className="container">
                <Header />
                <SongList songs={songs} />
                <SelectGenre onGenreSelect={onGenreSelect} />
            </main>
        </>
    )
}

export default ChartContainer