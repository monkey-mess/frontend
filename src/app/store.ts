import { configureStore } from "@reduxjs/toolkit";
import { createUser, IUser } from "@/entities/user";

interface ISetUserAction {
  type: "SET";
  newState: IUser;
}
interface IDeleteUserAction {
  type: "DELETE";
}

type IUserAction = ISetUserAction | IDeleteUserAction;

function userReducer(state: IUser | null = createUser(), action: IUserAction): IUser | null {
  switch (action.type) {
    case "SET":
      return action.newState;
    case "DELETE":
      return null;
    default:
      return state;
  }
}

export const store = configureStore({ reducer: userReducer });

store.subscribe(() => {
  console.log("Текущее состояние:", store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
