import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"

export const AvatarContainer: React.FC<{ className?: string;[key: string]: any }> = ({ className, ...props }) => {
    return (
        <div
            className={clsx(
                className,
                'h-10 w-10 rounded-full bg-zinc-800/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-white/10 backdrop-blur'
            )}
            {...props}
        />
    )
}

export const Avatar: React.FC<{ large?: boolean; className?: string;[key: string]: any }> = ({ large = false, className, ...props }) => {
    return (
        <Link
            href="/"
            aria-label="Home"
            className={clsx(className, 'pointer-events-auto')}
            {...props}
        >
            <Image
                src={'https://assets.abizareyhan.com/profile.png'}
                width={100}
                height={100}
                alt=""
                sizes={large ? '4rem' : '2.25rem'}
                className={clsx(
                    'rounded-full bg-zinc-800 object-cover',
                    large ? 'h-16 w-16' : 'h-9 w-9'
                )}
                priority
            />
        </Link>
    )
}