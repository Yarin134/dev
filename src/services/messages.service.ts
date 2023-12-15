import { IMessage } from "../entities/message.entity";
import { instance } from "./axios/axios.instance";

const messagesService = {
  create: async (entity: IMessage) => {
    try {
      const message = await instance.post("message/create", entity);
      return message.data;
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (id: string) => {
    try {
      const message = await instance.delete("message/delete", {
        params: { id },
      });
      return message.data;
    } catch (error) {
      console.log(error);
    }
  },
  update: async (id: string, updateEntity: IMessage) => {
    try {
      const message = await instance.put("message/update", updateEntity, {
        params: {
          id,
        },
      });
      return message.data;
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (id: string) => {
    try {
      const message = await instance.get("message/getById", {
        params: {
          id,
        },
      });
      return message.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export { messagesService };
