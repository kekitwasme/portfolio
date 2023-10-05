import "./globals.css"
import { Inter } from "next/font/google"

import Header from "@app/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "Jay X | Personal Portfolio",
    description: "Jay is a full-stack developer | open to work",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className + "text-gray-900 bg-gray-50 h-[5000px] flex flex-col items-center relative"}>
                {/* background colors */}
                <span className="-z-50">
                    <div
                        className={`
                        fixed bg-indigo-50 -top-[12vw] right-[calc((100vw-768px)/768*150)] rounded-full blur-3xl
                        w-[50vw] h-[50vw] 
                        md:w-[45vw] md:h-[45vw]
                        xl:w-[40vw] xl:h-[40vw]`}
                    />
                    <div
                        className={`
                        fixed bg-red-50 top-[12vw] left-[calc((100vw-768px)/768*155)] rounded-full blur-3xl
                        max-w-780px w-[55vw] h-[55vw] max-w-[400] max-h-[400]
                        md:w-[44vw] md:h-[44vw]
                        xl:w-[40vw] xl:h-[40vw]`}
                    />
                </span>

                <Header />

                {children}
            </body>
        </html>
    )
}
