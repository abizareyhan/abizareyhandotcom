import { Container } from "@/components/Container"
import Image from "next/image"
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/SocialIcon"
import clsx from "clsx"
import Link from "next/link"

export default function About() {
    return (
        <>
            <Container className="mt-16 sm:mt-32">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                    <div className="lg:pl-20">
                        <div className="max-w-xs px-2.5 lg:max-w-none">
                            <Image
                                src={'https://assets.abizareyhan.com/profile.png'}
                                alt="Reyhan Abizar"
                                width={1080}
                                height={1080}
                                sizes="(min-width: 1024px) 32rem, 20rem"
                                className="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-800"
                            />
                        </div>
                    </div>
                    <div className="lg:order-first lg:row-span-2">
                        <div className="lg:order-first lg:row-span-2">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100">Hi I’m Reyhan</h1>
                            <div className="mt-6 space-y-7 text-base text-zinc-400">
                                <p>I’ve been into tech since 2017, and I currently focus on building awesome mobile apps with Kotlin. My goal is to create easy-to-use experiences that people really enjoy while also driving success for businesses.</p>
                                <p>I’m proud of turning ideas into real products. I love being involved in every part of making an app, from the first idea to launching it. With my Google Play Academy certification, I know the rules of Google Play, which helps me keep my apps up to date and meet all the requirements.</p>
                                <p>I believe in learning all the time. I like trying out new tools and ideas to keep my skills sharp. Staying updated on the latest trends in mobile development helps keep my creativity going.</p>
                                <p>Working with other engineers is something I really enjoy. I like teaming up to make our apps better and ensure everything works well on different devices.</p>
                                <p>I always look at data to help me make choices. By checking analytics, I make sure my apps meet what users want and help achieve business goals. It’s all about making smart choices for everyone involved.</p>
                                <p>Thanks for stopping by my portfolio! I’m excited to connect, share ideas, and explore new opportunities in mobile development. Let’s create something great together!</p>
                            </div>
                        </div>

                    </div>
                    <div className="lg:pl-20">
                        <ul role="list">
                            <SocialLink href="https://github.com/abizareyhan" icon={GitHubIcon} className="mt-4">
                                Checkout my GitHub
                            </SocialLink>
                            <SocialLink href="https://linkedin.com/in/abizareyhan" icon={LinkedInIcon} className="mt-4">
                                Connect on LinkedIn
                            </SocialLink>
                            <SocialLink
                                href={`mailto:abizareyhan@gmail.com`}
                                icon={MailIcon}
                                className="mt-4"
                            >
                                abizareyhan@gmail.com
                            </SocialLink>
                            <SocialLink
                                href={`mailto:me@abizareyhan.com`}
                                icon={MailIcon}
                                className="mt-4"
                            >
                                me@abizareyhan.com
                            </SocialLink>
                        </ul>
                    </div>
                </div>
            </Container>
        </>
    )
}

const SocialLink: React.FC<{ icon: React.ElementType; href: string, className: string, children: React.ReactNode }> = ({ icon: Icon, href, className, children }) => {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                className="flex text-sm font-medium transition group text-zinc-200 hover:text-teal-500"
            >
                <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
                <span className="ml-4">{children}</span>
            </Link>
        </li>
    )
}