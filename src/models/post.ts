export interface Post {
  user: {
    username: string,
    avatar: string,
  },
  title: string,
  date: string,
  image: string,
  content: string,
  likes: number
}
