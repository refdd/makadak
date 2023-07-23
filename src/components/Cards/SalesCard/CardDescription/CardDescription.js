const CardDescription = ({txt}) => {
    return (
        <div style={{display:'flex', justifyContent:'space-between', paddingRight:16, alignItems:'end'}}>
            <p style={{fontWeight:600}}>{txt}</p>
        </div>
    )
}

export default CardDescription;