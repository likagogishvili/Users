import { create } from "zustand";
import { Users } from "../types/types";

type Store = {
  users: Users[];
  setUsers: (users: Users[]) => void;
  deletedItem: number;
  setDeletedItem: (deletedItem: number) => void;
};

const useStore = create<Store>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
  deletedItem: 0,
  setDeletedItem: (deletedItem) => set({ deletedItem }),
}));
export default useStore;
