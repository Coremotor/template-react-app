import { create } from "zustand";
import { request } from "shared/api";

interface PostsState {
  posts: Post[];
  getPosts: () => Promise<void>;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const usePostsStore = create<PostsState>((set) => ({
  posts: [],
  getPosts: async (url = "https://jsonplaceholder.typicode.com/posts") => {
    try {
      const response = await request.get(url);
      set({ posts: response.data });
    } catch (e) {}
  },
}));
