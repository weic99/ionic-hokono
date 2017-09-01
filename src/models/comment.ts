export interface Comment {
  user: {
    username: string,
    avatar: string,
  },
  date: number,
  body: string,
  likes: number
}
