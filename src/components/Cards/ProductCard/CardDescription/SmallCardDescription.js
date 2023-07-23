import { Grid, Typography } from "@mui/material";

const SmallCardDescription = ({ tag, description, note }) => {
    var arabic = /[\u0600-\u06FF]/;
    return (
        <>
            <Typography
                textAlign={'left'}
                height={'50px'}
                className="small-card-description"
                fontWeight={600}
                fontSize={14}
                sx={{ paddingLeft: 2 }} >
                {description?.length > 60 ? (description?.substring(0, 60) + '...') : description}
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {tag}

                <Typography pl={1} sx={{ direction: arabic.test(description) ? 'rtl' : 'ltr' }}
                    className="small-card-note"
                    overflow={'hidden'} textOverflow={'ellipsis'} whiteSpace={'nowrap'}
                    fontSize={14}
                    color='grey'
                >
                    {note}
                </Typography>
            </div>
        </>

    )
}

export default SmallCardDescription;