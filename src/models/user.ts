export interface User {
  username: string,
  password: string,
  email: string,
  displayName: string,

  profile: {
    avatar: string,
    name: string,
    address: string,
    slogan: string
  }
}
