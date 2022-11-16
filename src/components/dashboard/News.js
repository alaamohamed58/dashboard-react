import { Typography, Box, Stack } from "@mui/material";
import React from "react";
import NewsItem from "./NewsItem";

const DUMMY_NEWS = [
  {
    id: "n1",
    title: "New Farm are available on cheap",
  },
  {
    id: "n2",
    title: "New Farm are available on cheap",
  },
  {
    id: "n3",
    title: "New Farm are available on cheap",
  },
  {
    id: "n4",
    title: "New Farm are available on cheap",
  },
  {
    id: "n5",
    title: "New Farm are available on cheap",
  },
];

const News = () => {
  return (
    <Stack
      sx={{
        width: { xs: "100%", xl: "23%" },
        margin: "auto",
        background: "#fff",
      }}
    >
      <Typography
        component="h3"
        sx={{
          fontSize: "22px",
          color: "rgba(0, 0, 0, 0.87)",
          fontWeight: 700,
          margin: "36px 20px 0px",
        }}
      >
        New & Update
      </Typography>

      <Box component="ul">
        {DUMMY_NEWS.map((news) => {
          return <NewsItem key={news.id} id={news.id} title={news.title} />;
        })}
      </Box>
    </Stack>
  );
};

export default News;
