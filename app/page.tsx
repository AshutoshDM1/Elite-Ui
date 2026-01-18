import { ModeToggle } from "@/components/mode-toggle";
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react/jsx-runtime";

export default function Home() {
  const componentsLinks: ComponentAccordion[] = [
    {
      name: "Profile Drawer",
      href: "/profile-drawer",
      description: ["Animated", "Progressive Blur", "Default",],
      ImageUrl: "/images/component1/image1.png",
      videoUrl: "https://res.cloudinary.com/dnvl8mqba/video/upload/v1768752010/Elite-ui/Profile-Viewer_dffj1e.mp4",
      avatarUrl: "/elitedev.png",
    },
  ]

  return (
    <div className="min-h-screen max-w-7xl mx-auto py-40 px-4 md:px-10">
      <div>
        <h1 className="text-3xl text-center font-buda ">UI components for people who ship...</h1>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center gap-4 m-10" >
        {componentsLinks.map((component) => (
          <ComponentsAccordion key={component.name} componentsAccordion={component} />
        ))}
      </div>
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
    </div>
  );
}

interface ComponentAccordion {
  name: string;
  href: string;
  description: string[];
  ImageUrl?: string;
  videoUrl?: string;
  avatarUrl: string;
}

export const ComponentsAccordion = ({ componentsAccordion }: { componentsAccordion: ComponentAccordion }) => {
  return (
    <Link href={componentsAccordion.href}>
      <div className="border rounded-3xl w-80 shadow-sm overflow-hidden aspect-16/14  " >
        <div className="p-3 flex gap-2" >
          <div className="size-8 shrink-0 rounded-full overflow-hidden bg-muted" >
            <Image src={componentsAccordion.avatarUrl} alt={componentsAccordion.name} width={1000} height={1000} quality={100} className="w-full object-cover" />
          </div>
          <div className="mt-1">
            <h3 className="text-xs leading-4 font-medium">{componentsAccordion.name}</h3>
            <div className="flex items-center" >
              {componentsAccordion.description.map((description, index) => (
                <Fragment key={description} >
                  <span className="text-[10px] text-muted-foreground">{description}</span>
                  {index !== componentsAccordion.description.length - 1 && <Dot className="size-4 text-muted-foreground" />}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full mt-2 " >
          {componentsAccordion.videoUrl ?
            <video src={componentsAccordion.videoUrl} autoPlay muted loop className="w-fit object-cover rounded-2xl aspect-16/12 " />
            : <Image src={componentsAccordion.avatarUrl} alt={componentsAccordion.name} width={1000} height={1000} quality={100} className="w-full object-cover" />}
        </div>
      </div>
    </Link>
  )
}
