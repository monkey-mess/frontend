"use client";
import { redirect } from "next/navigation";
import { IUser } from "@/entities/user";

// someFile.ts
import { store } from "../store";

const fakeUser: IUser = {
  id: 1,
  userHandle: "b0gam",
  username: "bagomed",
};

function handleSubmitButton() {
  store.dispatch({ type: "SET", newState: fakeUser });
  redirect("/");
}

export default function Auth() {
  return (
    <div>
      <div>
        <form>
          <input placeholder="login" />
          <input placeholder="password" />
          <button
            onClick={() => {
              handleSubmitButton();
            }}
            type="button"
          />
        </form>
      </div>
    </div>
  );
}
