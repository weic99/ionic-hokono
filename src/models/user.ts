export interface User {
  username: string,
  password: string,
  email: string,
  displayName: string,
  uid: string,

  profile: any;
  // profile: {
  //   avatar: string,
  //   name: string,
  //   address: string,
  //   blurb: string
  // }
}
