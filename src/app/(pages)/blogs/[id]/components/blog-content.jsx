import Image from "next/image";
import React from "react";

const BlogContent = () => {
  return (
    <div className="max-w-[1040px] mx-auto px-4  sm:px-6 md:px-20 bg-white">
      <div className="flex lg:flex-row flex-col gap-24 justify-between">
        <div>
          <p className="border-b w-[200px] border-[#EAECF0]"></p>
          <p className="text-base text-[#F76F00] font-semibold pt-8">
            Table of contents
          </p>
          <p className="text-base text-[#475467] font-semibold pt-2">
            Software and tools
          </p>
          <p className="text-base text-[#475467] font-semibold pt-2">
            Other resources
          </p>
          <p className="text-base text-[#475467] font-semibold pt-2">
            Other resources
          </p>
          <p className="text-base text-[#475467] font-semibold pt-2">
            Other resources
          </p>
          <p className="text-base text-[#475467] font-semibold pt-2">
            Other resources
          </p>
          <p className="text-base text-[#475467] font-semibold pt-2">
            Other resources
          </p>
          <p className="text-base text-[#475467] font-semibold pt-2">
            Conclusion
          </p>
          <p className="border-b w-[200px] my-8 border-[#EAECF0]"></p>
          <div className="flex gap-4 flex-row items-center">
            <div className="border px-2 py-2 cursor-pointer border-[#D0D5DD] rounded-full  ">
              <Image src={"/blog/expert.svg"} width={20} height={20} alt="" />
            </div>
            <div className="border px-2 py-2 cursor-pointer border-[#D0D5DD] rounded-full  ">
              <Image src={"/blog/x.svg"} width={20} height={20} alt="" />
            </div>
            <div className="border px-2 py-2 cursor-pointer border-[#D0D5DD] rounded-full  ">
              <Image src={"/blog/fb.svg"} width={20} height={20} alt="" />
            </div>
            <div className="border px-2 py-2 cursor-pointer border-[#D0D5DD] rounded-full  ">
              <Image src={"/blog/linkedin.svg"} width={20} height={20} alt="" />
            </div>
          </div>
        </div>
        <div className="text-[#475467] text-xl ">
          <p className="text-[#475467] text-xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
            massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
            purus. Non massa enim vitae duis mattis. Vel in ultricies vel
            fringilla.
          </p>
          <p className="border-b my-8 border-[#EAECF0]"></p>
          <p className="font-semibold text-[#101828] text-[30px]">
            Introduction
          </p>
          <p className="py-8">
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
            suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
            quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
            posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
            feugiat sapien varius id.
          </p>
          <p>
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
            mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
            risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
            aliquet sodales id est ac volutpat.{" "}
          </p>
          <Image
            className="py-8"
            src={"/blog/blog-2.png"}
            width={686}
            height={480}
            alt=""
          />
          <p className="text-base">
            Image courtesy of Edmond Dantès via{" "}
            <span className="underline">Pexels</span>{" "}
          </p>
          <p className="py-8">
            Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris
            id. Non pellentesque congue eget consectetur turpis. Sapien, dictum
            molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis
            velit eget ut tortor tellus. Sed vel, congue felis elit erat nam
            nibh orci.
          </p>
          <div className="flex flex-row gap-4">
            <p className="h-[180px] w-1 bg-[#7F56D9] "></p>
            <div>
              <p className="text-[#101828] italic text-2xl">
                “In a world older and more complete than ours they move finished
                and complete, gifted with extensions of the senses we have lost
                or never attained, living by voices we shall never hear.”
              </p>
              <div className="flex pt-8 items-center space-x-3">
                <Image
                  src={"/blog/rafat.jpg"}
                  className="rounded-full border border-[#D6CFB7]"
                  width={50}
                  height={50}
                  alt=""
                />
                <div>
                  <p className="text-sm font-semibold text-[#101828]">
                    Md Rafatul Islam
                  </p>
                  <p className="text-sm text-[#475467]">Product Designer</p>
                </div>
              </div>
            </div>
          </div>
          <p className="py-8">
            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
            odio nisl vitae. In aliquet pellentesque aenean hac vestibulum
            turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada
            fringilla.
          </p>
          <p>
            Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
            commodo consectetur convallis risus. Sed condimentum enim dignissim
            adipiscing faucibus consequat, urna. Viverra purus et erat auctor
            aliquam. Risus, volutpat vulputate posuere purus sit congue
            convallis aliquet. Arcu id augue ut feugiat donec porttitor
          </p>
          <p className="py-8">
            Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
            commodo consectetur convallis risus. Sed condimentum enim dignissim
            adipiscing faucibus consequat, urna. Viverra purus et erat auctor
            aliquam. Risus, volutpat vulputate posuere purus sit congue
            convallis aliquet. Arcu id augue ut feugiat donec porttitor
          </p>
          <p className="font-semibold text-[#101828] text-[30px]">
            Software and tools
          </p>
          <p className="py-8">
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
            suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
            quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
            posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
            feugiat sapien varius id.
          </p>
          <p>
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
            mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
            risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
            aliquet sodales id est ac volutpat.
          </p>
          <p className="font-semibold pt-8 text-[#101828] text-[30px]">
            Other resources
          </p>
          <p className="py-8">
            Sagittis et eu at elementum, quis in. Proin praesent volutpat
            egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac.
            Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur
            ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim
            massa erat cursus vulputate gravida id. Sed quis auctor vulputate
            hac elementum gravida cursus dis.
          </p>
          <p>
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
            mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
            risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
            aliquet sodales id est ac volutpat.
          </p>
          <Image src={"/blog/blog-3.png"} width={720} height={720} alt="" />
          <p className="text-base">
            Image courtesy of Edmond Dantès via{" "}
            <span className="underline text-[#F76F00]">Pexels</span>{" "}
          </p>
          <p className="py-8">
            Lectus leo massa amet posuere. Malesuada mattis non convallis
            quisque. Libero sit et imperdiet bibendum quisque dictum vestibulum
            in non. Pretium ultricies tempor non est diam. Enim ut enim amet
            amet integer cursus. Sit ac commodo pretium sed etiam turpis
            suspendisse at.
          </p>
          <p>
            Tristique odio senectus nam posuere ornare leo metus, ultricies.
            Blandit duis ultricies vulputate morbi feugiat cras placerat elit.
            Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque
            suscipit accumsan. Cursus viverra aenean magna risus elementum
            faucibus molestie pellentesque. Arcu ultricies sed mauris
            vestibulum.
          </p>
          <div className="bg-[#F9FAFB] my-8 p-6 rounded-2xl">
            <p className="font-semibold text-[#101828] text-[30px]">
              Conclusion
            </p>
            <p className="py-8">
              Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus
              id scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
              blandit elit sagittis. Quisque tristique consequat quam sed. Nisl
              at scelerisque amet nulla purus habitasse.
            </p>
            <p>
              Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
              condimentum mi massa. In tincidunt pharetra consectetur sed duis
              facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
              dictum eget nibh tortor commodo cursus.
            </p>
            <p className="pt-8">
              Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce
              aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare
              id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur
              dictum. Donec posuere pharetra odio consequat scelerisque et, nunc
              tortor.
            </p>
          </div>
          <p className="border-b w-full my-8 border-[#EAECF0]"></p>
          <div className="flex gap-6" >
             <p className="bg-[#FEF1E6] flex items-center justify-center py-1 border border-[#FDD2B0] w-[87px] rounded-full " >Design</p>
             <p className="bg-[#E8E8E8] flex items-center justify-center py-1 border text-[#010101] border-[#DCDCDC] w-[97px] rounded-full " >Research</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
