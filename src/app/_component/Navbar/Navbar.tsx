"use client";

import * as React from "react";
import Link from "next/link";
import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@base-ui/react";
import logo from "../../../assets/images/freshcart-logo.svg";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  function handleLogout() {
    signOut({ redirect: true, callbackUrl: "/login" });
  }
  const { data: sessionData, status } = useSession();
  return (
    <NavigationMenu className="bg-white max-w-full p-3 sticky top-0 z-50 shadow-sm">
      <NavigationMenuList className="justify-between">
        <Image src={logo} alt="Fresh Cart" />
        <div className="md:flex gap-4 hidden">
          <NavigationMenuItem>
            <Link className="font-semibold hover:text-green-500" href="/">
              Home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link className="font-semibold hover:text-green-500" href="/shop">
              Shop
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link className="font-semibold hover:text-green-500" href="/brands">
              Brands
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              className="font-semibold hover:text-green-500"
              href="/categories"
            >
              Categories
            </Link>
          </NavigationMenuItem>
        </div>
        <div className="md:flex gap-6 hidden items-center">
          {status === "authenticated" ? (
            <>
              <Link href="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </Link>
              <Link href="/wishlist">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </Link>
              <span
                onClick={handleLogout}
                className="bg-green-600 py-2 px-3 text-white rounded-md hover:bg-green-700 transition-all"
              >
                Logout
              </span>
            </>
          ) : (
            <Link href="/login">
              <span className="bg-green-600 py-2 px-3 text-white rounded-md hover:bg-green-700 transition-all">
                SignIn
              </span>
            </Link>
          )}
        </div>
        <NavigationMenuItem className="md:hidden">
          <NavigationMenuTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <ListItem href="/" title="Home">
                <Link href="/">Home</Link>
              </ListItem>
              <ListItem href="/shop" title="Shop">
                <Link href="/shop">Shop</Link>
              </ListItem>
              <ListItem href="/brands" title="Brands">
                <Link href="/brands">Brands</Link>
              </ListItem>
              <ListItem href="/categories" title="Categories">
                <Link href="/categories">Categories</Link>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link href={href}>
            <div className="flex flex-col gap-1 text-sm">
              <div className="leading-none font-medium">{title}</div>
              <div className="line-clamp-2 text-muted-foreground">
                {children}
              </div>
            </div>
          </Link>
        }
      />
    </li>
  );
}
