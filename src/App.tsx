// import React from "react";
import { Button, IconButton, Typography } from "@mui/material";
// import {
//   Camera,
//   Outlet,
//   PhotoCamera,
//   Settings,
//   Upload,
// } from "@mui/icons-material";
import styled from "@emotion/styled";
// import { createTheme } from "@mui/material";

import React from "react";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import { Box, Container, Stack } from "@mui/system";
import { theme } from "./theme";
import Add from "./components/Add";
import Counter from "./components/Counter";

function App() {
  const characters = [
    {
      name: "Jessi Finlry",
      date: "2/6/2022",
      post: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    },
    {
      name: "Meryl Southwell",
      date: "1/7/2022",
      post: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    },
    {
      name: "Garth Bernolet",
      date: "12/4/2021",
      post: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    },
    {
      name: "Milt Yeoland",
      date: "2/12/2022",
      post: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    },
    {
      name: "Kesley Hayselden",
      date: "4/9/2022",
      post: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    },
    {
      name: "Bambi Screeton",
      date: "3/27/2022",
      post: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    },
    {
      name: "Skipton Braunes",
      date: "11/27/2021",
      post: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    },
    {
      name: "Starr Pengilly",
      date: "9/26/2021",
      post: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    },
    {
      name: "Kelcie Breeds",
      date: "1/10/2022",
      post: "In congue. Etiam justo. Etiam pretium iaculis justo.",
    },
    {
      name: "Milka Casillas",
      date: "4/11/2022",
      post: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    },
  ];

  const top10Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
    {
      label: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
  ];
  return (
    <Box>
      <Navbar topFilm={top10Films} />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed characters={characters} />
        <Rightbar />
      </Stack>
      <Add />
      <Counter />
    </Box>
  );
}

export default App;
