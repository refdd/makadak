const HeroVideo = ({ img }) => {
    return (
        <video
            id="herovid"
            playsInline
            autoPlay
            muted
            width={'100%'}
            controls={false}
            src={img}
            type="video/mp4"
        />
    )
}

export default HeroVideo