"use client";
import { Logo } from "@/components/logo";
import { UserPhoto } from "./user.photo";
import { UserAuth } from "@/context/Auth";
import "./user.header.scss";

export const UserHeader = () => {
  const { user } = UserAuth();

  return (
    <header className="user_header">
      <div className="fluid-container">
        <Logo />

        <div className="ontrol">
          {user ? (
            <>
              {user.photoURL ? (
                <>
                  <UserPhoto url={user.photoURL} />
                </>
              ) : (
                <>
                  <UserPhoto
                    url={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`}
                  />
                </>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </header>
  );
};
