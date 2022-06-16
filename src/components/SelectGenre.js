import React from 'react'

const SelectGenre = ({ onGenreSelect }) => {

    const handleSelect = (event) => {
        const chosen = event.target.value;
        onGenreSelect(chosen);
    }


    return (
        <>
            <label htmlFor="genre">Choose a genre:</label>
            <select name="genre" onChange={handleSelect}>
                <option value="all">All</option>
                <option value="rock">Rock</option>
                <option value="country">Country</option>
                <option value="dance">Dance</option>
            </select>
        </>
    )
}

export default SelectGenre