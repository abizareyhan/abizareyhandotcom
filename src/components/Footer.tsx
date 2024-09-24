import Link from 'next/link'
import { Container, InnerContainer, OuterContainer } from '@/components/Container'

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
    return (
        <Link
            href={href}
            className="transition hover:text-teal-500 dark:hover:text-teal-400"
        >
            {children}
        </Link>
    )
}

const Footer: React.FC = () => {
    return (
        <footer className="mt-32">
            <OuterContainer>
                <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
                    <InnerContainer>
                        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                            <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                                <NavLink href="/about">About</NavLink>
                                <NavLink href="/projects">Projects</NavLink>
                                <NavLink href="/achievements">Achievements</NavLink>
                                <NavLink href="https://blog.abizareyhan.com">Blog</NavLink>
                                <NavLink href="https://linkedin.com/in/abizareyhan">Linkedin</NavLink>
                                <NavLink href="https://github.com/abizareyhan">Github</NavLink>
                            </div>
                            <p className="text-sm text-zinc-600 dark:text-zinc-300">
                                &copy; {new Date().getFullYear()} AbizaReyhan
                            </p>
                        </div>
                    </InnerContainer>
                </div>
            </OuterContainer>
        </footer>
    )
}

export default Footer