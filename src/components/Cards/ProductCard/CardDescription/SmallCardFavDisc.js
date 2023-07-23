import { Grid, Typography } from '@mui/material'

const SmallCardFavDisc = ({ tag, description, note }) => {
  return (
    <>
      <Typography
        className="small-card-description"
        fontWeight={600}
        fontSize={14}
        marginTop={3}
        marginBottom={3}
        sx={{ paddingLeft: 2 }}
      >
         {description?.substring(0,60)}...
      </Typography>
      <div style={{ textAlign: 'right', fontSize: 12.5 }}>{note} KM</div>

      <div>{tag}</div>
    </>
  )
}

export default SmallCardFavDisc
