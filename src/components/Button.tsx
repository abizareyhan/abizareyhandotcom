import { clsx } from "clsx"
import Link from "next/link"

const variantStyles = {
    primary:
        'bg-zinc-800 font-semibold bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-700 active:text-zinc-100/70',
    secondary:
        'bg-zinc-50 font-medium bg-zinc-800/50 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-50 active:bg-zinc-800/50 active:text-zinc-50/70',
}

export const Button: React.FC<{ variant?: 'primary' | 'secondary'; className?: string; href?: string, children: React.ReactNode }> = ({ variant = 'primary', className, href, ...props }) => {
    className = clsx(
        'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
        variantStyles[variant],
        className
    )

    return href ? (
        <Link href={href} className={className} {...props} />
    ) : (
        <button className={className} {...props} />
    )
}
