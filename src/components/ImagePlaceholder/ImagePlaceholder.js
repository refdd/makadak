
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

const ImagePlaceholder = () => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            background: '#121212',
            border:'1px solid grey',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius:4
        }}
        >
            <InsertPhotoIcon />
        </div>
    )
}


export default ImagePlaceholder;