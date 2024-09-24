'use client'

import { Article } from "@/components/Article"
import { Container } from "@/components/Container"
import Photos from "@/components/Photos"
import Resume from "@/components/Resume"
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcon"
import Link from "next/link"

export default function Home() {
  const articles = [
    {
      url: 'https://blog.abizareyhan.com/dynamic-app-icon-on-android/',
      title: 'Dynamic App Icons on Android using activity-alias',
      description: 'Ever wonder how apps like Discord or Twitter let users change their app icon? It’s not magic—it’s an Android trick using activity-alias in the manifest file! By toggling between the main activity and an alias with different icons, you can dynamically switch the app icon during runtime.',
    },
    {
      url: 'https://blog.abizareyhan.com/google-play-in-app-updates-step-by-step/',
      title: 'A step-by-step guide to setting up Google Play In-App Updates',
      description: 'As an Android developer, you can remind users to update your app or force them to do so. Google\'s In-App Updates feature lets you update apps within the app itself. You can choose between Flexible updates, allowing users to continue using the app, or Immediate updates, which require an update first.',
    },
    {
      url: 'https://blog.abizareyhan.com/understanding-the-important-of-accessibility/',
      title: 'Understanding The Important Of Accessibility',
      description: '"Accessibility" (or "a11y") means making tech easy for everyone, no matter their abilities. Features like voice commands and screen readers help. Whether it\'s websites or apps, ensuring they\'re accessible is key. Even gaming is getting more inclusive with Sony\'s Project Leonardo.',
    },
  ]
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl text-lg">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Senior Android Engineer
          </h1>
          <p className="mt-6 text-base text-zinc-400">
            Hey, I’m Reyhan, a Senior Android Engineer specializing in Kotlin.
            I build mobile apps that help companies achieve their goals and long-term vision.
            As a Google Play Academy certified professional, I have solid knowledge of the Play Store and its policies.
            I’m passionate about product that I built and leveraging data-driven insights to ensure that the apps I develop meet user needs while driving business success.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/abizareyhan"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/abizareyhan"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <h3 className="text-xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
              Articles
            </h3>
            {articles.map((article) => (
              <Article key={article.url} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

const SocialLink: React.FC<{ icon: React.ElementType; href: string }> = ({ icon: Icon, href }) => {
  return (
    <Link className="group -m-1 p-1" href={href}>
      <Icon className="h-6 w-6 transition fill-zinc-600 fill-zinc-400 group-hover:fill-zinc-300" />
    </Link>
  )
}