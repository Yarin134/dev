import { IUser } from "../entities/user.entity";
import { instance } from "./axios/axios.instance";

const usersService = {
  create: async (entity: IUser) => {
    try {
      const user = await instance.post("user/create", entity);
      return user.data;
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (id: string) => {
    try {
      const user = await instance.delete("user/delete", {
        params: { id },
      });
      return user.data;
    } catch (error) {
      console.log(error);
    }
  },
  update: async (id: string, updateEntity: IUser) => {
    try {
      const user = await instance.put("user/update", updateEntity, {
        params: {
          id,
        },
      });
      return user.data;
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (id: string) => {
    try {
      const user = await instance.get("user/getById", {
        params: {
          id,
        },
      });
      return user.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export { usersService };
