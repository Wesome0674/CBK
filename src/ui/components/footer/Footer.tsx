import Image from "next/image"
import { Container } from "../container/Container"
import { Typographie } from "@/ui/designsystem/typography/Typographie"

interface Props { }

export const Footer = ({ }: Props) => {
    const year = new Date().getFullYear()  // returns the current year
    return (
        <Container className="bg-secondary py-20">
            <div className="flex items-center justify-around">
                <div className="flex gap-4 items-center">
                    <h1 className="text-light text-base">CBK</h1>
                    <div className="w-[40px] relative aspect-square rounded-full bg-primary">
                        <Image
                            alt="logo"
                            fill
                            src="/assets/images/me2.png"
                            style={{
                                objectFit: "cover"
                            }}
                        />
                    </div>
                </div>
                <Typographie variant="body-sm" theme="light" className="flex gap-6 items-center cursor-pointer">
                    <span>Home</span>
                    <span>About</span>
                    <span>Skills</span>
                    <span>Projects</span>
                    <span>Contact</span>
                </Typographie>
                <Typographie variant="body-sm" theme="light">
                    Copyright © {year} CBK
                </Typographie>
            </div>
        </Container>
    )
}