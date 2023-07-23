import { useRouter } from "next/router";
import PostCompleteSuccess from "../c2c/post-complete-success";
import { Grid } from "@mui/material";

const SuceessTopUp = ({ handleTopupSuccess }) => {
  const router = useRouter();
  const { id, type } = router.query
  return (
      <PostCompleteSuccess
        handleFinishWithdraw={handleTopupSuccess}
        text={"top up added successfully"}
        id={id}
        type={type}
      />

  );
};

export default SuceessTopUp;
