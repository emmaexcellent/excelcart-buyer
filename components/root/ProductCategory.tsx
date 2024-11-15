import * as React from "react"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"

type subCategoryProps = {
  name: string;
  image: string;
  examples: string;
};

const ProductCategory = ({
  subCategories,
  category,
}: {
  subCategories: subCategoryProps[];
  category: string;
}) => {
  return (
    <section className="my-5">
      <Carousel
        className="w-full my-3 px-3 max-w-6xl mx-auto"
        opts={{
          align: "center",
          loop: false,
        }}
      >
        <CarouselContent className="-ml-1 pt-2">
          {subCategories.map((subcategory) => (
            <CarouselItem
              key={subcategory.name}
              className={`pl-1 lg:pl-4 ${
                category === "general"
                  ? "basis-[60%] sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                  : "basis-[30%] md:basis-1/5 lg:basis-1/6"
              }`}
            >
              <div className="p-1">
                {category === "groceries" && (
                  <Card>
                    <CardContent className="flex flex-col justify-center items-center gap-2 p-1.5 lg:p-2 cursor-pointer">
                      <Image
                        src={subcategory.image}
                        width={100}
                        height={100}
                        alt={subcategory.name}
                        className="rounded-lg w-full object-cover hover:scale-110"
                        priority
                      />
                      <p className="w-full text-sm lg:text-lg truncate font-medium text-center">
                        {subcategory.name}
                      </p>
                    </CardContent>
                  </Card>
                )}

                {category === "foods" && (
                  <div className="flex flex-col justify-center items-center gap-2 p-2">
                    <Image
                      src={subcategory.image}
                      width={100}
                      height={100}
                      alt={subcategory.name}
                      className="rounded-full w-full object-cover hover:scale-110"
                    />
                    <p className="w-full text-sm lg:text-lg font-medium truncate text-center">
                      {subcategory.name}
                    </p>
                  </div>
                )}

                {category === "pharmacy" && (
                  <Card className="shadow-xl rounded-t-full">
                    <CardContent className="flex flex-col justify-center items-center gap-2 p-0 overflow-hidden">
                      <Image
                        src={subcategory.image}
                        width={100}
                        height={100}
                        alt={subcategory.name}
                        className="w-full h-[85px] object-cover rounded-t-full hover:scale-110"
                      />
                      <p className="w-full text-sm lg:text-lg truncate text-center p-2">
                        {subcategory.name}
                      </p>
                    </CardContent>
                  </Card>
                )}

                {category === "general" && (
                  <Card className="group shadow-xl p-0 cursor-pointer border border-gray-200">
                    <CardContent className="flex justify-start gap-2 p-1 !h-[120px]">
                      <div className="p-3 flex flex-col items-stretch justify-between font-semibold w-1/2">
                        <p className="w-full text-sm lg:text-base truncate pt-0 group-hover:text-primary group-hover:scale-110 transition duration-500 object-cover">
                          {subcategory.name}
                        </p>
                        <Link
                          href="/"
                          className="text-xs text-gray-500 text-nowrap"
                        >
                          Explore Items
                        </Link>
                      </div>
                      <div className="w-1/2 h-full overflow-hidden group-hover:rounded-lg">
                        <Image
                          src={subcategory.image}
                          width={150}
                          height={200}
                          alt={subcategory.name}
                          className="w-full h-full rounded-xl group-hover:rounded-lg group-hover:scale-110 transition duration-500 object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 text-bg--foreground" />
        <CarouselNext className="right-0 text-bg--foreground" />
      </Carousel>
    </section>
  );
};

export default ProductCategory