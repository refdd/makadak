import React from "react";
import { Avatar } from "@mui/material";
import { useTheme } from "@emotion/react";
import { timeElapsed } from "@/helpers";


const styles = (theme) => ({
  messageRow: {
    display: "flex",
    alignItems: 'center'
  },
  messageRowRight: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: 'center'
  },
  messageBlue: {
    position: "relative",
    marginLeft: "20px",
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: theme.palette.primary.main,
    maxWidth: "50vw",
    // height: "50px",
    textAlign: "left",
    font: "400 .9em 'Open Sans', sans-serif",
    borderRadius: "7px",
    color: 'black',
    "&:after": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "0",
      borderTop: "15px solid #A8DDFD",
      borderLeft: "15px solid transparent",
      borderRight: "15px solid transparent",
      top: "0",
      left: "-15px"
    },
    "&:before": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "0",
      borderTop: "17px solid #97C6E3",
      borderLeft: "16px solid transparent",
      borderRight: "16px solid transparent",
      top: "-1px",
      left: "-17px"
    }
  },
  messageOrange: {
    position: "relative",
    marginRight: "20px",
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "#f8e896",
    width: "60%",
    //height: "50px",
    textAlign: "left",
    font: "400 .9em 'Open Sans', sans-serif",
    border: "1px solid #dfd087",
    borderRadius: "10px",
    "&:after": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "0",
      borderTop: "15px solid #f8e896",
      borderLeft: "15px solid transparent",
      borderRight: "15px solid transparent",
      top: "0",
      right: "-15px"
    },
    "&:before": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "0",
      borderTop: "17px solid #dfd087",
      borderLeft: "16px solid transparent",
      borderRight: "16px solid transparent",
      top: "-1px",
      right: "-17px"
    }
  },

  messageContent: {
    padding: 0,
    margin: '10px 0',
    paddingBottom: '10px'
  },
  messageTimeStampRight: {
    position: "absolute",
    fontSize: ".85em",
    fontWeight: "300",
    marginTop: "10px",
    bottom: "-3px",
    right: "5px",
    margin: '5px 0'
  },

  orange: {
    width: theme.spacing(4),
    height: theme.spacing(4)
  },

  blue: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    margin: '0 10px'
  },

  avatarNothing: {
    color: "transparent",
    backgroundColor: "transparent",
    width: theme.spacing(4),
    height: theme.spacing(4)
  },
  displayName: {
    marginLeft: "20px"
  }
})


const ChatMessage = ({ data, orientation }) => {
  const theme = useTheme();
  const classes = styles(theme);
  const message = data.message ?? "no message";
  const timestamp = timeElapsed(data.createdAt, true) ?? "";
  const photoURL = data.photoURL ?? "dummy.js";
  const displayName = data.displayName ?? "";
  return (
    orientation === 'right' ?
      <div style={classes.messageRowRight}>
        <div style={classes.messageBlue}>
          <p style={classes.messageContent}>{message}</p>
          <div style={classes.messageTimeStampRight}>{timestamp}</div>
        </div>
        <Avatar
          alt={displayName}
          style={classes.blue}
          src={photoURL}
        />
      </div>
      :
      <div style={classes.messageRow}>
        <Avatar
          alt={displayName}
          style={classes.orange}
          src={photoURL}
        />
        <div>
          <div style={classes.displayName}>{displayName}</div>
          <div style={classes.messageBlue}>
            <div>
              <p style={classes.messageContent}>{message}</p>
            </div>
            <div style={classes.messageTimeStampRight}>{timestamp}</div>
          </div>
        </div>
      </div>
  );
};


export default ChatMessage;
