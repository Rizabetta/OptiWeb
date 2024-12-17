import { fetchRepoData, fetchPosts, fetchUsers } from "./services/api";

const repoQueries = {
  repoData: () => ["repoData"],
  fetchRepoData: () => ({
    queryKey: repoQueries.repoData(),
    queryFn: fetchRepoData,
  }),
};

const postQueries = {
  posts: () => ["posts"],
  fetchPosts: () => ({
    queryKey: postQueries.posts(),
    queryFn: fetchPosts,
  }),
};

const userQueries = {
  users: () => ["users"],
  fetchUsers: () => ({
    queryKey: userQueries.users(),
    queryFn: fetchUsers,
  }),
};

export { repoQueries, postQueries, userQueries };
