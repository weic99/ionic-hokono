export interface Message {
  author: string
  timeStamp: number;
  data: {
    text: string;
  }
}
