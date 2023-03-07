import React, { useEffect } from "react";
import type { FC } from "react";
import styled from "styled-components";
import { usePostsStore } from "entities/posts/model/store";

export const PostsList: FC = () => {
  const posts = usePostsStore((state) => state.posts);
  const getPosts = usePostsStore((state) => state.getPosts);

  useEffect(() => {
    void getPosts();
  }, []);

  return (
    <Container>
      {posts.map((post) => (
        <Post key={post.id}>{post.title}</Post>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Post = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
`;
