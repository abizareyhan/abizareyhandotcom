import clsx from "clsx"
import Link from "next/link"

export const Card: React.FC<{ as: 'div' | 'article'; className?: string; children: React.ReactNode }> = ({ as: Component = 'div', className, children }) => {
    return (
        <Component
            className={clsx(className, 'group relative flex flex-col items-start')}
        >
            {children}
        </Component>
    )
}

export const CardLink: React.FC<{ children: React.ReactNode, href: string }> = ({ children, href }) => {
    return (
        <>
            <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
            <Link href={href}>
                <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                <span className="relative z-10">{children}</span>
            </Link>
        </>
    )
}

export const CardTitle: React.FC<{ as: 'h2' | 'h3'; href: string; children: React.ReactNode }> = ({ as: Component = 'h2', href, children }) => {
    return (
        <Component className="text-base font-semibold tracking-tight text-zinc-100">
            {href ? <CardLink href={href}>{children}</CardLink> : children}
        </Component>
    )
}

export const CardDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <p className="relative z-10 mt-2 text-sm text-zinc-400">
            {children}
        </p>
    )
}

export const CardCta: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div
            aria-hidden="true"
            className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
        >
            {children}
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
                <path
                    d="M6.75 5.75 9.25 8l-2.5 2.25"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    )
}

export const CardEyebrow: React.FC<{ as: 'p' | 'time'; decorate: boolean; className?: string; children: React.ReactNode }> = ({
    as: Component = 'p',
    decorate = false,
    className,
    children,
    ...props
}) => {
    return (
        <Component
            className={clsx(
                className,
                'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500',
                decorate && 'pl-3.5'
            )}
            {...props}
        >
            {decorate && (
                <span
                    className="absolute inset-y-0 left-0 flex items-center"
                    aria-hidden="true"
                >
                    <span className="h-4 w-0.5 rounded-full bg-zinc-500" />
                </span>
            )}
            {children}
        </Component>
    )
}
