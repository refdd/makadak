import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const CardMetadata = ({category, flag}) => {
    return (
        <div className='flex justify-between items-center w-1/3 pr-4'>
            <BookmarkBorderIcon /> 
            <p className='text-xs'>{category}</p>
            <span className={`fi fi-${flag}`}></span>
        </div>
    )
}
export default CardMetadata;