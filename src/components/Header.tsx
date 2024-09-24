'use client'

import React, { Fragment } from 'react'
import { Avatar, AvatarContainer } from './Avatar'
import { Container } from './Container'
import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
]

const Header: React.FC = () => {
    const pathname = usePathname()
    const isHome = pathname === '/'

    return (
        <header
            className="pointer-events-none relative z-50 flex flex-col"
            style={{
                height: 'var(--header-height)',
                marginBottom: 'var(--header-mb)',
            }}
        >
            {isHome && (
                <>
                    <div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]" />
                    <Container
                        className="top-0 order-last -mb-3 pt-3"
                        style={{ position: 'var(--header-position)' }}
                    >
                        <div
                            className="top-[var(--avatar-top,theme(spacing.3))] w-full"
                            style={{ position: 'var(--header-inner-position)' as any }}
                        >
                            <div className="relative">
                                <AvatarContainer
                                    className="absolute left-0 top-3 origin-left transition-opacity"
                                    style={{
                                        opacity: 'var(--avatar-border-opacity, 0)',
                                        transform: 'var(--avatar-border-transform)',
                                    }}
                                />
                                <Avatar
                                    large
                                    className="block h-16 w-16 origin-left"
                                    style={{ transform: 'var(--avatar-image-transform)' }}
                                />
                            </div>
                        </div>
                    </Container>
                </>
            )}
            <div
                className="top-0 z-10 h-16 pt-6"
                style={{ position: 'var(--header-position)' as any }}
            >
                <Container
                    className="top-[var(--header-top,theme(spacing.6))] w-full"
                    style={{ position: 'var(--header-inner-position)' }}
                >
                    <div className="relative flex gap-4">
                        <div className="flex flex-1">
                            {!isHome && (
                                <AvatarContainer>
                                    <Avatar />
                                </AvatarContainer>
                            )}
                        </div>
                        <div className="flex flex-1 justify-end md:justify-center">
                            <MobileNavigation className="pointer-events-auto md:hidden" />
                            <DesktopNavigation className="pointer-events-auto hidden md:block" />
                        </div>
                        <div className="flex justify-end md:flex-1">
                            <div className="pointer-events-auto">
                                {/* Dark mode is now always on, so we've removed the toggle */}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    )
}

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
            <path
                d="M1.75 1.75 4 4.25l2.25-2.5"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

const MobileNavItem: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
    return (
        <li>
            <Popover.Button as={Link} href={href} className="block py-2">
                {children}
            </Popover.Button>
        </li>
    )
}

const MobileNavigation: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <Popover {...props}>
            <Popover.Button className="group flex items-center rounded-full bg-zinc-800/90 px-4 py-2 text-sm font-medium text-zinc-200 shadow-lg shadow-zinc-800/5 ring-1 ring-white/10 hover:ring-white/20">
                Menu
                <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-400 group-hover:stroke-zinc-300" />
            </Popover.Button>
            <Transition.Root>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Popover.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-zinc-900 p-8 ring-1 ring-zinc-800"
                    >
                        <div className="flex flex-row-reverse items-center justify-between">
                            <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                                <CloseIcon className="h-6 w-6 text-zinc-400" />
                            </Popover.Button>
                            <h2 className="text-sm font-medium text-zinc-400">
                                Navigation
                            </h2>
                        </div>
                        <nav className="mt-6">
                            <ul className="-my-2 divide-y divide-zinc-100/5 text-base text-zinc-300">
                                {navItems.map((item) => (
                                    <MobileNavItem key={item.href} href={item.href}>
                                        {item.label}
                                    </MobileNavItem>
                                ))}
                            </ul>
                        </nav>
                    </Popover.Panel>
                </Transition.Child>
            </Transition.Root>
        </Popover>
    )
}

const NavItem: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <li>
            <Link
                href={href}
                className={clsx(
                    'relative block px-3 py-2 transition',
                    isActive
                        ? 'text-teal-400'
                        : 'hover:text-teal-400'
                )}
            >
                {children}
                {isActive && (
                    <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-400/0 via-teal-400/40 to-teal-400/0" />
                )}
            </Link>
        </li>
    )
}

const DesktopNavigation: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <nav {...props}>
            <ul className="flex rounded-full bg-zinc-800/90 px-3 text-sm font-medium text-zinc-200 shadow-lg shadow-zinc-800/5 ring-1 ring-white/10">
                {navItems.map((item) => (
                    <NavItem key={item.href} href={item.href}>
                        {item.label}
                    </NavItem>
                ))}
            </ul>
        </nav>
    )
}

export default Header