import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const StoreSingle = ({...vendor}) => {  
  const fullStars = Math.floor(vendor.rating);
  const halfStar = vendor.rating % 1 !== 0;
  let stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={i} className="star"></span>);
  }
  if (halfStar) {
    stars.push(<span key={fullStars} className="half-star"></span>);
  }

  return (
    <Card>
      {vendor.listType !== "popular" && (
        <div className="p-2">
          <div className="relative overflow-hidden">
            <Image
              src={vendor.imgUrl}
              width={350}
              height={300}
              alt="vendor"
              className="rounded-lg w-full h-[200px] object-cover hover:scale-110"
            />
            {vendor.status === "closed" && (
              <div className="w-full h-[200px] bg-[#14141462] absolute inset-0 top-0 rounded-lg"></div>
            )}
          </div>
          <div className="space-y-1 pt-3">
            <div className="flex justify-between items-center">
              <h6 className="font-semibold text-lg">{vendor.name}</h6>
              <span
                className={`mr-2 ml-3 rounded text-sm ${
                  vendor.status == "closed"
                    ? "bg-white text-orange-700"
                    : "bg-primary text-white"
                } px-2 py-0.5 font-semibold capitalize`}
              >
                {vendor.status}
              </span>
            </div>
            <p className="text-sm w-[75%] text-wrap italic text-foreground/70">
              {vendor.address}
            </p>
            <div className="flex justify-between items-center">
              <div>
                {stars}
                <span className="mr-2 ml-3 rounded bg-yellow-200 px-2 py-0.5 text-xs font-semibold dark:text-gray-600">
                  {vendor.rating.toFixed(1)}
                </span>
              </div>
              <p className="text-sm font-medium text-foreground/70">
                {vendor.qtySold} Items Sold
              </p>
            </div>
          </div>
        </div>
      )}

      {vendor.listType === "popular" && (
        <div className="relative">
          <div className="relative">
            <Image
              src={vendor.imgUrl}
              width={350}
              height={300}
              alt="vendor"
              className="rounded-lg w-full h-[200px]"
            />
            {vendor.status === "closed" && (
              <div className="w-full h-[160px] bg-[#14141462] absolute top-0 rounded-lg"></div>
            )}
          </div>
          <div className="absolute rounded-tl-[3rem] top-1/2 bg-[#fffffff5] dark:bg-[#111111f5] w-full h-[100px]">
            <div className="flex">
              <div className="h-20 w-20 pt-3 pl-3">
                <Image
                  src={vendor.logo}
                  width={50}
                  height={50}
                  alt="logo"
                  className="rounded-full border border-primary"
                />
              </div>
              <div className="flex flex-col pt-2 font-semibold pr-2">
                <h6 className="font-bold text-gray-600 dark:text-gray-200">
                  {vendor.name}
                </h6>
                <p className="text-xs text-wrap text-gray-400">
                  {vendor.address}
                </p>
                <p className="text-primary text-sm pb-2">5+ Items</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}

export default StoreSingle