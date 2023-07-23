const CardDescription = ({txt}) => {
    return (
        <div style={{ paddingRight:16, textAlign:'left', maxHeight:70, minHeight:70}}>
            <p style={{fontWeight:600}}>    {txt?.substring(0, 60)}..</p>
        </div>
    )
}

export default CardDescription;