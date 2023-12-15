import { IGroup } from "../entities/group.entity";
import { instance } from "./axios/axios.instance";

const groupsService = {
  create: async (entity: IGroup) => {
    try {
      const group = await instance.post("group/create", entity);
      return group.data;
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (id: string) => {
    try {
      const group = await instance.delete("group/delete", {
        params: { id },
      });
      return group.data;
    } catch (error) {
      console.log(error);
    }
  },
  update: async (id: string, updateEntity: IGroup) => {
    try {
      const group = await instance.put("group/update", updateEntity, {
        params: {
          id,
        },
      });
      return group.data;
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (id: string) => {
    try {
      const group = await instance.get("group/getById", {
        params: {
          id,
        },
      });
      return group.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export { groupsService };
