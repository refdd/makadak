import {Button} from "@mui/material";

const FileUploadBtn = ({txt, handleChange, name}) => {
    return (
        <div>
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                type="file"
                onChange={handleChange}
                name={name}
            />
            <label htmlFor="raised-button-file">
                <Button variant="raised" component="span" sx={{
                    textDecoration: 'underline',
                    ml: 1,
                    "&.MuiButtonBase-root:hover": {
                        bgcolor: "transparent",
                        textDecoration:'underline'
                    }
                }}>
                    {txt}
                </Button>
            </label>
        </div>
    )
}


export default FileUploadBtn;