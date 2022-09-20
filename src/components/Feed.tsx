import React from "react";
import Post from "./Posts";
import { Box } from "@mui/system";

const Feed = () => {
  return (
    <Box flex={2} p={2} margin={20}>
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
