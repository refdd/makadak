
import MyActivity from "@/widgets/MyActivity/MyActivity";
import MyItems from "@/widgets/MyItems/MyItems";
import MyWishLists from "@/widgets/MyWishLists/MyWishLists";
import { Box } from "@mui/material";

export default function Account() {
  return (
    <Box marginBottom={5}>
      <Box marginBottom={2}>
        <MyActivity />
      </Box>
      <Box marginBottom={2}>
        <MyItems />
      </Box>
      <Box marginBottom={2} position="relative">
        <MyWishLists />
      </Box>
    </Box>
  );
}
