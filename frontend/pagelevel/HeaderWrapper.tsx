"use client"

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function HeaderWrapper ()
{
    const pathname = usePathname();
    if ( pathname === "/signIn" ) return null;
    return <Header />;
}
