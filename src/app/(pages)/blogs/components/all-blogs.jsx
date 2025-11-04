"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TABS = ["View all", "Design", "Product Design", "UI Design", "UX Design"];

const CONTENT_ITEMS = [
  {
    category: "Design",
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your manager?",
    author: "Md. Rafatul Islam",
    date: "Jan 2024",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    category: "Product Design",
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    author: "Md. Rafatul Islam",
    date: "Jan 2024",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    category: "UX Design",
    title: "Bill Walsh leadership lessons",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    author: "Md. Rafatul Islam",
    date: "17 Jan 2024",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    category: "Leadership",
    title: "Bill Walsh leadership lessons",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    author: "Md. Rafatul Islam",
    date: "17 Jan 2024",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    category: "Design",
    title: "What is wireframing?",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    author: "Md. Rafatul Islam",
    date: "15 Jan 2024",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    category: "UI Design",
    title: "What is wireframing?",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    author: "Md. Rafatul Islam",
    date: "15 Jan 2024",
    avatar: "/placeholder.svg?height=32&width=32",
  },
];

const AllBlogs = () => {
  const [activeTab, setActiveTab] = useState("View all");

  const filteredItems =
    activeTab === "View all"
      ? CONTENT_ITEMS
      : CONTENT_ITEMS.filter((item) => item.category === activeTab);

  return (
    <div className="max-w-[1440px] mx-auto px-4  lg:pb-20 md:pb-12 pb-6 sm:px-6 md:px-20 bg-white">
      {/* Tabs */}
      <div className="flex items-center md:flex-row flex-col justify-between my-16">
        <div className="flex items-center space-x-6">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-base text-nowrap font-medium pb-2 border-b-2  transition-colors ${
                activeTab === tab
                  ? "text-[#F76F00] border-[#F76F00]"
                  : "text-[#667085] border-transparent hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center border cursor-pointer border-[#D0D5DD] px-3 py-2 rounded-full space-x-16">
          <span className="text-sm text-[#101828]">Most recent</span>
          <ChevronDown />
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredItems.map((item, index) => (
          <Link href={`/blogs/${index}`} >
            <Card
              key={index}
              className="group hover:shadow-lg transition-shadow border-0 shadow-sm cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="aspect-video bg-black rounded-2xl mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black" />
                </div>
                <div className="px-4 pb-4">
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

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          className="flex items-center space-x-2 text-gray-600"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </Button>

        <div className="flex items-center space-x-2">
          {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
            <Button
              key={index}
              variant={page === 1 ? "default" : "ghost"}
              size="sm"
              className={`w-8 h-8 p-0 ${
                page === 1
                  ? "bg-gray-900 text-white hover:bg-gray-800"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {page}
            </Button>
          ))}
        </div>

        <Button
          variant="ghost"
          className="flex items-center space-x-2 text-gray-600"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default AllBlogs;
