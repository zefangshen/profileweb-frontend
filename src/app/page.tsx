// import Link from "next/link";
import { Link } from "@nextui-org/react";
import Image from "next/image";
import { apiClient } from "@/api/api-server";
import SubscribeForm from "@/components/SubscribeForm";
import { ScrollShadow } from "@nextui-org/react"; 
import { Divider } from "@nextui-org/react";
import CardPublication from "@/components/CardPublication";
import CardTalk from "@/components/CardTalk";
import CardProject from "@/components/CardProject";

export default async function Home() {
  const dataBio = await apiClient.getUserBio();
  const dataNews = await apiClient.getNews();
  const baseURL = process.env.BACKEND_API_URL;

  return (
      <>
      <div className="my-5 lg:flex lg:space-x-5">
        <div id="bio" className="md:w-full lg:w-3/5">
          <div className="sm:flex">
            <Image
              src={`${baseURL}${dataBio.photo}`}
              width={130}
              height={130}
              alt={`${dataBio.first_name}'s profile photo`}
              className="rounded-lg"
            />
            <div>
              <p className="font-bold text-xl mb-2 sm:ms-4">{dataBio.first_name} {dataBio.middle_name} {dataBio.last_name}</p>
              <p className="sm:ms-4">
                {dataBio.position}<br/>
                {dataBio.institution}<br/>
                {dataBio.address.city}, {dataBio.address.state? dataBio.address.state : dataBio.address.province}, {dataBio.address.country}<br/>
                Email: <Link
                  href={`mailto:${dataBio.email}`}>{dataBio.email}
                </Link>
              </p>
              <ul className="flex sm:ms-4 space-x-2 items-center">
                {
                  dataBio.weblinks.map(
                    (weblink: {
                      id: number,
                      name: string,
                      url: string,
                      icon: string
                    }) => (
                      <li key={weblink.id}>
                        <Link href={weblink.url}>
                          <Image
                            src={`${baseURL}${weblink.icon}`}
                            alt={weblink.name}
                            width={20}
                            height={20}
                          />
                        </Link>
                      </li>
                    )
                  )
                }
              </ul>
            </div>
          </div>
          <div className="mt-5">
            <p className="text-justify">
              {dataBio.bio_short}
            </p>
          </div>
        </div>
        <div className="md:w-full lg:w-2/5 flex flex-col justify-between">
          <div>
            <h1 className="section-title">News</h1>
            <Divider />
            <ScrollShadow className={`w-full h-[400px]`}>
            <div>
              {
                dataNews.map(
                  ({ id, date, content, url }: { id: string, date: {year: number, month: number, day:number}, content: string, url: string }) => (
                    <div key={id} className="flex space-x-4 pb-1 pe-2">
                      <p>{date.day}/{date.month}/{date.year}</p>
                      <p className="text-justify">{content} {url ? <Link href={url}>Learn more ...</Link>: ""}</p>
                    </div>
                  )
                )
              }
            </div>
            </ScrollShadow>
          </div>
          <div className="pt-2">
            <SubscribeForm baseURL={baseURL} />
          </div>
        </div>
      </div>
      <div className="py-4">
        <div className="flex justify-between">
          <p className="section-title">Publications</p>
          <p>View all</p>
        </div>
        <Divider />
        <CardPublication />
      </div>
      <div className="py-4">
        <div className="flex justify-between">
          <p className="section-title">Talks</p>
          <p className="hidden">View all</p>
        </div>
        <Divider />
        <div className="gap-2 grid grid-cols-1 py-2 sm:grid-cols-2 md:grid-cols-4">
          <CardTalk />
          <CardTalk />
          <CardTalk />
        </div>
      </div>
      <div className="py-4">
        <div className="flex justify-between">
          <p className="section-title">Projects</p>
          <p className="hidden">View all</p>
        </div>
        <Divider />
        <div className="gap-2 grid grid-cols-1 py-2 sm:grid-cols-2 md:grid-cols-4">
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
        </div>
      </div>
    </>
  );
}