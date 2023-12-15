interface IMessage {
  time: Date;
  _id?: string;
  content: string;
  senderId: string;
  recieverId: string;
}

export { IMessage };
