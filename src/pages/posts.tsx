import React from "react";
import type { FC } from "react";
import { PostsList } from "entities/posts";

const Posts: FC = () => {
  return (
    <div>
      <PostsList />
    </div>
  );
};

export default Posts;
