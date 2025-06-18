"use client"

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function HeaderWrapper ()
{
    const pathname = usePathname();
    if ( pathname === "/signIn" || pathname === "/logIn" ) return null;
    return <Header />;
}
