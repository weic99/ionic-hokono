export interface Post {
  user: {
    username: string,
    avatar: string,
  },
  date: string,
  image: string,
  content: string,
  likes: number
}
