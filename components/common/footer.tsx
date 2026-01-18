import Link from "next/link";
import { Github, Twitter, XIcon } from "lucide-react";

const Footer = () => {

    return (
        <div className="absolute bottom-0 left-0 w-full py-5" >
            <div className="w-full max-w-3xl mx-auto px-4 md:px-10 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground" >
                <Link href="https://x.com/AshutoshDM_1" target="_blank" className="hover:text-foreground transition-colors flex items-center gap-1" >
                    <Twitter className="size-4" />
                    <span>@AshutoshDM_1</span>
                </Link>
                <Link href="https://x.com/AshutoshDM_1" target="_blank" className="hover:text-foreground transition-colors flex items-center gap-1" >
                    <Github className="size-4" />
                    <span>ashutosh-tiwari</span>
                </Link>
            </div>
        </div>
    )
}

export default Footer;