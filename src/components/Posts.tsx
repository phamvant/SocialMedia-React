import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const Post = (character: any) => {
  const [value, setValue] = useState("");
  const [checkBox, setCheckBox] = useState(false);

  return (
    <div>
      <Card sx={{ margin: "2em 0" }}>
        <CardHeader
          avatar={<Avatar src="https://mui.com/static/images/avatar/1.jpg" />}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={character.character.name}
          subheader={character.character.date}
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.unsplash.com/photo-1481277542470-605612bd2d61"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {character.character.post}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              onChange={(e, checkBox) => {
                if (!checkBox) {
                  setValue("");
                  setCheckBox(true);
                } else {
                  setValue("Liked");
                  setCheckBox(false);
                }
              }}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite color="error" />}
            />
          </IconButton>
          <Typography>{value}</Typography>

          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};
export default Post;
