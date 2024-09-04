// import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import {
  ArrowRight,
  BookOpen,
  CircleHelp,
  LucideIcon,
  MessagesSquare,
  X,
} from "@lab2lives/lucide-react";
import clsx from "clsx";
import { translate } from "@docusaurus/Translate";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const links: {
    title: string;
    href: string;
    description: string;
    Icon: LucideIcon;
  }[] = [
    {
      title: translate({ id: "landingPage.links.introduction" }),
      href: "/docs/intro",
      description: translate({
        id: "landingPage.links.introduction.description",
      }),
      Icon: BookOpen,
    },
    {
      title: translate({ id: "landingPage.links.faq" }),
      href: "/faq",
      description: translate({ id: "landingPage.links.faq.description" }),
      Icon: CircleHelp,
    },
    {
      title: translate({ id: "landingPage.links.contact" }),
      href: "mailto: admin@benkon.io",
      description: translate({ id: "landingPage.links.contact.description" }),
      Icon: MessagesSquare,
    },
  ];

  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <main>
        <div className="mx-auto max-w-[1500px] px-4">
          <div className="pt-28">
            <p className="flex w-fit items-center gap-2 rounded-lg border-[1px] border-solid border-gray-300 px-2 py-1 text-sm">
              <div className="inline-block h-2 w-2 rounded-full bg-green-500" />
              Beta
            </p>
            <h1 className="text-5xl font-semibold">
              {translate({ id: "landingPage.title" })}
            </h1>
            <p className="text-2xl text-gray-600">
              {translate({ id: "landingPage.subtitle" })}
            </p>

            <div className="flex flex-col pt-10">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={clsx(
                    "flex gap-3 border-0 border-t-[1px] border-solid border-gray-300 py-5 text-black hover:text-black hover:no-underline md:max-w-[450px] lg:max-w-[600px]",
                    index === links.length - 1 && "border-b-[1px]",
                  )}
                >
                  <div className="h-fit rounded-lg border-[1px] border-solid border-gray-300 p-2 leading-[0] text-gray-600">
                    <link.Icon size={24} />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="m-0">{link.title}</h3>
                    <p className="m-0 text-gray-600">{link.description}</p>
                  </div>

                  <div className="flex flex-1 justify-end text-gray-400">
                    <ArrowRight size={24} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end md:justify-start">
          <img
            src="img/hero_img.png"
            className="relative bottom-0 right-0 mt-10 w-[100%] md:absolute md:bottom-[90px] md:w-[60%] lg:w-[50%]"
          />
        </div>
      </main>
    </Layout>
  );
}
