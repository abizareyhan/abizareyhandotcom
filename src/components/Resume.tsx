import Image from "next/image"
import { Button } from "./Button"

const Resume = () => {
    const resume = [
        {
            company: 'Gravel Teknologi Indonesia',
            title: 'Senior Android Engineer',
            start: 'Feb 2023',
            end: 'Present',
            logo: 'https://assets.abizareyhan.com/work-gravel-logo.jpeg',
        },
        {
            company: 'Zenius Education',
            title: 'Senior Android Engineer',
            start: 'Apr 2020',
            end: 'Jan 2023',
            logo: 'https://assets.abizareyhan.com/work-zenius-purple-logo.png',
        },
        {
            company: 'Zenius Education',
            title: 'Mobile App Developer',
            start: 'May 2019',
            end: 'Mar 2020',
            logo: 'https://assets.abizareyhan.com/work-zenius-yellow-logo.jpg',
        },
        {
            company: 'Kisel Indonesia',
            title: 'Staff IT Business Solution',
            start: 'May 2018',
            end: 'Apr 2019',
            logo: 'https://assets.abizareyhan.com/work-kisel-logo.jpeg',
        },
    ]

    return (
        <div className="rounded-2xl border p-6 border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-100">
                <BriefcaseIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Work</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {resume.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md border border-zinc-700/50 bg-zinc-800 ring-0">
                            <Image src={role.logo} alt="" width={28} height={28} className="h-7 w-7" unoptimized />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-100">
                                {role.company}
                            </dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-xs text-zinc-400">
                                {role.title}
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                                className="ml-auto text-xs text-zinc-500"
                                aria-label={`${role.start} until ${role.end}`}
                            >
                                <time dateTime={role.start}>
                                    {role.start}
                                </time>{' '}
                                <span aria-hidden="true">—</span>{' '}
                                <time dateTime={role.end}>
                                    {role.end}
                                </time>
                            </dd>
                        </dl>
                    </li>
                ))}
            </ol>
            <Button href="https://linkedin.com/in/abizareyhan" variant="secondary" className="group mt-6 w-full">
                More on LinkedIn
                <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-hover:stroke-zinc-50 group-active:stroke-zinc-50" />
            </Button>
        </div>
    )
}

const BriefcaseIcon = (props: any) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100/10 stroke-zinc-500"
            />
            <path
                d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                className="stroke-zinc-500"
            />
        </svg>
    )
}

const ArrowDownIcon = (props: any) => {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <path
                d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default Resume