import React from "react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button, buttonVariants } from "./ui/button";
import {
  LoginLink,
  RegisterLink,
  LogoutLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

let { isAuthenticated, getUser } = getKindeServerSession();

const Navbar = async () => {
  const authenticated = await isAuthenticated();
  const user = await getUser();
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white-75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <div className="flex items-center space-x-2">
            {authenticated && (
              <Avatar className="w-9 h-9 rounded-full">
                <AvatarImage src="https://github.com/shadcn.png" size="" />
                <AvatarFallback>{user.given_name[0]}{user.family_name[0]}</AvatarFallback>
              </Avatar>
            )}
            <Link href="/" className="flex z-40 font-semibold text-lg">
              <span>Film Trackr</span>
            </Link>
          </div>
          {/* to do: add mobile navbar */}
          <div className="hidden items-center space-x-4 sm:flex">
            {!authenticated ? (
              <>
                <LoginLink
                  className={buttonVariants({
                    size: "sm",
                  })}
                >
                  Sign in{" "}
                </LoginLink>
                <RegisterLink
                  className={`${buttonVariants({
                    size: "sm",
                  })} flex items-center`}
                >
                  Register <ArrowRight className="ml-1 h-5 w-5"></ArrowRight>
                </RegisterLink>
              </>
            ) : (
              <div className="flex items-center space-x-3">
              <p>My Films <span className="font-semibold">|</span></p>
              <p>Watchlist <span className="font-semibold">|</span></p>
              <LogoutLink
              >
                <Button>
                   Sign Out
                </Button>
              </LogoutLink>
              </div>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
