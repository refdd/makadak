import { Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
export default function RadioFilter({
  label,
  currentSelection,
  value,
  onClick,
}) {
  const isActive = value === currentSelection;
  return (
    <Button
      sx={{
        textAlign: "inherit",
        display: "block",
        color: '#fff',
        position: "relative",
        background:'#121212',
        paddingBlock: 1.4
      }}
      onClick={() => onClick(value)}
    >
      {label}
      {isActive && <CheckIcon sx={{
        "position":"absolute",
        "top":0,
        "bottom":0,
        "right": 0,
        "margin":"auto",
        "color": 'primary.main',
      }} />}
    </Button>
  );
}
