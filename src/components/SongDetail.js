const SongDetail = ({song, position}) => {
    return (
        <div>
            {position}
            <br/>
            {song["title"]['label']}
        </div>
    )
}


export default SongDetail