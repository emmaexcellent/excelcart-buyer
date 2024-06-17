import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Info, X } from "lucide-react"
import ShopCategory from "./ShopCategory"

const CategoryPopup = ({...props}) => {
  console.log(props.campus)
  return (
    <Dialog open={props.categoryPopup}>
      <DialogContent className="w-[90%] mx-auto rounded-xl shadow-sm p-5">
        <DialogHeader>
          <DialogTitle className="w-full text-center text-md">Select a category to continue shopping</DialogTitle>
        </DialogHeader>
        <div className="flex flex-wrap py-4 w-[98%] gap-y-3">
          <ShopCategory imgUrl='/shop-category/grocery.png' shopName='Grocery' path={`/${props.campus && props.campus.replaceAll(' ','-')}/products/groceries`}/>
          <ShopCategory imgUrl='/shop-category/food.png' shopName='Food' path={`/${props.campus && props.campus.replaceAll(' ','-')}/products/foods`}/>
          <ShopCategory imgUrl='/shop-category/pharmacy.png' shopName='Pharmacy' path={`/${props.campus && props.campus.replaceAll(' ','-')}/products/pharmacy`}/>
          <ShopCategory imgUrl='/shop-category/shop.png' shopName='Shop' path={`/${props.campus && props.campus.replaceAll(' ','-')}/products/general`}/>
          <ShopCategory imgUrl='/shop-category/parcel.png' shopName='Parcel' path={`/parcel/${props.campus && props.campus.replaceAll(' ','-')}`}/>
        </div>
        <div className="absolute right-2 top-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" onClick={()=> props.setCategoryPopup(false)}>
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </div>
        <DialogFooter className="bg-muted/40 flex flex-row gap-4 sm:justify-center items-center text-xs p-2 text-center">
        <Info width={15}/>
        <span>A category must be selected to continue.</span>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CategoryPopup