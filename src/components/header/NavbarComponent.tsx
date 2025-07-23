'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation';
import { MenuItem } from '@/types/menuType';
import { MenuList } from './menu';
import { ShoppingCart } from 'lucide-react';
import { Badge } from '../ui/badge'; // Adjust the path if your Badge component is elsewhere
import { Button } from '../ui/button';
import { useAppSelector } from '@/lib/hook';

export default function NavbarComponent() {
    const pathname = usePathname();
    const [menu] = useState<MenuItem[]>(MenuList);
    const { itemCount } = useAppSelector((state) => state.cart) // Total items in cart

    return (
        <nav className="lg:px-12 lg:h-20 px-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 flex flex-wrap items-center  shadow-md">
            <div className="flex-1 flex justify-between items-center">
                <Link href="/" className="text-xl text-white">Company</Link>
            </div>

            <div className="hidden md:flex md:items-cente md:w-auto w-full" id="menu">
                <nav>
                    <ul className="md:flex items-center justify-between text-base text-white pt-6 md:pt-0">
                        {menu.map((item, index) => (
                            <li key={index}>
                                <Link
                                    className={`md:p-4 py-3 px-0 block ${pathname === item.path ? 'font-bold' : ''}`}
                                    href={item.path}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        {/* Cart Button with Badge */}
                    <Link href="/cart">
                        <Button variant="ghost" size="icon" className="relative">
                            <ShoppingCart className="h-5 w-5" />
                            {/* Show badge only if there are items in cart */}
                            {itemCount > 0 && (
                                <Badge
                                    variant="destructive"
                                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0  text-xs"
                                >
                                    {itemCount}
                                </Badge>
                            )}
                        </Button>
                    </Link>
                    </ul>
                    
                </nav>
            </div>
        </nav>
    )
}
