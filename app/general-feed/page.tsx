"use client";

import { useQuery } from "react-query";
import {
  Container,
  Typography,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import supabase from "../../supabase";
import FeedItem from "../../components/FeedItem";

export default function GeneralFeed() {
  const { data: posts, isLoading } = useQuery("generalPosts", async () => {
    const { data, error } = await supabase.from("posts").select("*");
    if (error) {
      throw error;
    }
    return data;
  });

  return (
    <Container>
      <Typography variant="h4">General Feed</Typography>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <List>
          {posts?.map((post, index) => (
            <FeedItem
              key={post.id}
              content={post.content}
              type="Commentator"
            />
          ))}
        </List>
      )}
    </Container>
  );
}
