import React from "react"
import SongDetail from "./SongDetail"

const SongList = ({songs, onSongClicked}) => {
    const SongItems = songs.map((song, index) => {
        let position = index +1;
        return (
        <SongDetail song={song} key={index} onSongClicked={onSongClicked} position={position}/>
        )
    })

    return (
        <div>
            <ul>
                {SongItems}
            </ul>
        </div>
    )
}



export default SongList