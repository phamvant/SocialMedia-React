import React, { FC } from "react";
import Post from "./Posts";
import { Box } from "@mui/system";

const Feed = (characters: any) => {
  console.log(characters.characters);

  return (
    <Box flex={2} p={2} margin={20}>
      {characters.characters.map((character: any) => {
        return <Post character={character} />;
      })}
    </Box>
  );
};

export default Feed;
