// Функция для фетчинга листа сообщений
import { fakeFetch } from "@/shared";

const fakeMessageList: IMessageAPI[] = [
  {
    senderHandle: "b0gam",
    text: "Hello, that's my first message",
    date: "2025-09-19T14:00:00.000Z",
  },
  {
    senderHandle: "evilb0gam",
    text: "And what do you want?",
    date: "2025-09-19T14:00:10.000Z",
  },
  {
    senderHandle: "b0gam",
    text: "I just wanna talk, don't you?",
    date: "2025-09-19T14:00:32.000Z",
  },
  {
    senderHandle: "b0gam",
    text: "Hello? ",
    date: "2025-09-19T14:02:34.000Z",
  },
  {
    senderHandle: "evilb0gam",
    text: "Bro don't bother me",
    date: "2025-09-19T14:02:54.000Z",
  },
];

export interface IMessageAPI {
  senderHandle: string;
  text: string;
  date: string;
}

export async function getMessageList() {
  return fakeFetch<IMessageAPI[]>(fakeMessageList, "fulfilled").then((responseData) => {
    return responseData;
  });
}
