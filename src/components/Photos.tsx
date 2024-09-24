import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { Container } from "./Container"

const Photos = () => {
    const images = [
        {
            src: 'https://assets.abizareyhan.com/gravel-dulur.jpg',
            creditLabel: 'Gravel Dulur',
            creditUrl: 'https://play.google.com/store/apps/details?id=com.graveltechnology.kernet',
            rotation: 'rotate-2',
            objectPosition: 'center bottom',
        },
        {
            src: 'https://assets.abizareyhan.com/gravel-owner.jpg',
            creditLabel: 'Gravel Owner',
            creditUrl: 'https://play.google.com/store/apps/details?id=com.graveltechnology.owner',
            rotation: '-rotate-2',
            objectPosition: 'center bottom',
        },
        {
            src: 'https://assets.abizareyhan.com/zenius-zencoin.jpg',
            creditLabel: 'Zenius v2 UI by Acellia Ivena Riza',
            creditUrl: 'https://dribbble.com/shots/18885152-ZenCoin-on-Zenius-App',
            rotation: 'rotate-2',
            objectPosition: 'center',
        },
        {
            src: 'https://assets.abizareyhan.com/lexus-reach.jpg',
            creditLabel: 'Lexus Reach Indonesia',
            creditUrl: 'https://play.google.com/store/apps/details?id=id.co.lexus.reach',
            rotation: '-rotate-2',
            objectPosition: 'center bottom',
        },
        {
            src: 'https://assets.abizareyhan.com/zenius-tryout.png',
            creditLabel: 'Zenius v1 UI by Anastania Melinda',
            creditUrl: 'https://www.behance.net/gallery/88729059/Try-Out-Practice-UIUX-Design',
            rotation: 'rotate-2',
            objectPosition: 'center',
        },
        {
            src: 'https://assets.abizareyhan.com/topup-kisel.png',
            creditLabel: 'Topup UI by Lukman Arif Utama',
            creditUrl: 'https://dribbble.com/shots/6242498-Case-Study-Top-Up-App',
            rotation: '-rotate-2',
            objectPosition: 'center',
        },
    ]

    return (
        <>
            <Container className="mt-16">
                <div className="max-w-2xl text-lg">
                    <h3 className="text-xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
                        Works
                    </h3>
                </div>
            </Container>
            <div className="mt-4 sm:mt-8 overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden">
                <div className="flex justify-center min-w-max px-4 sm:px-6 md:px-8">
                    <div className="flex gap-5 sm:gap-8">
                        {images.map((image) => (
                            <div key={image.src} className="flex flex-col items-center">
                                <div
                                    className={clsx(
                                        'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-800 sm:w-72 sm:rounded-2xl',
                                        image.rotation
                                    )}
                                >
                                    <Image
                                        src={image.src}
                                        width={1600}
                                        height={1600}
                                        priority={true}
                                        alt=""
                                        sizes="(min-width: 640px) 18rem, 11rem"
                                        className="absolute inset-0 h-full w-full object-cover"
                                        style={{ objectPosition: image.objectPosition }}
                                    />
                                </div>
                                <div className="mt-2 text-white text-xs text-center">
                                    <Link href={image.creditUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-300">{image.creditLabel}</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Photos