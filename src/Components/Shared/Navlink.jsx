'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href, children, className}) => {
    const pathname=usePathname()
    console.log(pathname);
    const isActive=pathname===href
    return (
    <Link href={href} className={`${isActive?'border-b2 bg-purple-500':''} ${className}`}>{children}</Link>
    );
};

export default Navlink;