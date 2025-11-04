import CustomNavButton from "@/components/gsap/nav-button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LatestPost = () => {
  const CONTENT_ITEMS = [
    {
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your manager?",
      author: "Md. Rafatul Islam",
      date: "Jan 2024",
      avatar: "/placeholder.svg?height=32&width=32",
      image : '/blog/blog-hero.png'
    },
    {
      category: "Product Design",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      author: "Md. Rafatul Islam",
      date: "Jan 2024",
      avatar: "/placeholder.svg?height=32&width=32",
      image : '/blog/blog-4.png'
      
    },
    {
      category: "UX Design",
      title: "Bill Walsh leadership lessons",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      author: "Md. Rafatul Islam",
      date: "17 Jan 2024",
      avatar: "/placeholder.svg?height=32&width=32",
      image : '/blog/blog-5.jpg'
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto md:px-20 sm:px-6 px-4 py-16 bg-white">
      <div className="flex lg:flex-row flex-col gap-14 lg:gap-0 justify-between items-start">
        <div>
          <p className="text-[#F76F00] font-semibold">Latest posts</p>
          <p className="py-6 text-4xl font-semibold text-[#101828]">
            Protoja Blog
          </p>
          <p className="text-2xl text-[#475467]">
            Interviews, tips, guides, industry best practices
          </p>
        </div>
        <CustomNavButton
          href={"/contact"}
          buttonBg="#F76F00"
          textColor="#1E1E1E"
          label={"View all posts"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {CONTENT_ITEMS.map((item, index) => (
          <Link href={`/blogs/${index}`}>
            <Card
              key={index}
              className="group hover:shadow-lg transition-shadow border-0 shadow-sm cursor-pointer"
            >
              <CardContent className="p-0 mt-8">
                <div className="w-full h-[250px] overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    width={300}
                    height={240}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-4 py-4">
                  <p className="text-[#F76F00]">{item.category}</p>

                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-[#101828] text-2xl leading-tight  transition-colors">
                      {item.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-[#101828]  transition-colors flex-shrink-0 ml-2" />
                  </div>

                  <p className="text-base text-[#475467] mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex items-center space-x-3">
                    <Image
                      src={"/blog/rafat.jpg"}
                      className="rounded-full border border-[#D6CFB7]"
                      width={50}
                      height={50}
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#101828]">
                        {item.author}
                      </p>
                      <p className="text-sm text-[#475467]">{item.date}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <div className="flex flex-row py-12 gap-6">
        <div className="px-3 py-3 border cursor-pointer border-[#EAECF0] rounded-full">
          <MoveLeft />
        </div>
        <div className="px-3 py-3 border cursor-pointer border-[#EAECF0] rounded-full">
          <MoveRight />
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
