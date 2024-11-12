import AdsBanner from '@/components/products/AdsBanner'
import NewArrived from '@/components/products/NewArrived'
import PopularProducts from '@/components/products/PopularProducts'
import PopularStore from '@/components/products/PopularStore'
import SpecialOffer from '@/components/products/SpecialOffer'
import StoreList from '@/components/products/StoreList'
import PageHero from '@/components/root/PageHero'
import ProductCategory from '@/components/root/ProductCategory'
import {
  groceryCategories,
  foodCategories,
  pharmacyCategories,
  shopCategories,
} from "@/data";



const getPopularProducts = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data.products;
  } catch(e: any) {
    return new Error('Something went wrong', e.message);
  }
}

const getSpecialProducts = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products?sortBy=title&order=asc');
    const data = await response.json();
    return data.products;
  } catch(e: any) {
    return new Error('Something went wrong', e.message);
  }
}

const CategoryProductPage = async ({ params }: { params: { campus: string, category: string } }) => {
  const popularProducts = await getPopularProducts()
  const specialOfferProducts = await getSpecialProducts();

  return (
    <>
      {params.category === "groceries" && (
        <>
          <PageHero category={params.category} />
          <ProductCategory
            subCategories={groceryCategories}
            category={params.category}
          />
          <PopularProducts
            popularProducts={popularProducts}
            category={params.category}
          />
          <SpecialOffer
            specialOfferProducts={specialOfferProducts}
            category={params.category}
          />
          <AdsBanner />
          <NewArrived
            NewProducts={specialOfferProducts}
            category={params.category}
          />
          <StoreList />
        </>
      )}

      {params.category === "foods" && (
        <>
          <PageHero category={params.category} />
          <ProductCategory
            subCategories={foodCategories}
            category={params.category}
          />
          {/* <SpecialOffer
            specialOfferProducts={specialOfferProducts}
            category={params.category}
          /> */}
          {/* <AdsBanner />
          <PopularProducts
            popularProducts={popularProducts}
            category={params.category}
          />
          <NewArrived
            NewProducts={specialOfferProducts}
            category={params.category}
          />
          <StoreList /> */}
        </>
      )}

      {params.category === "pharmacy" && (
        <>
          <PageHero category={params.category} />
          <ProductCategory
            subCategories={pharmacyCategories}
            category={params.category}
          />
          <SpecialOffer
            specialOfferProducts={specialOfferProducts}
            category={params.category}
          />
          <AdsBanner />
          <PopularProducts
            popularProducts={popularProducts}
            category={params.category}
          />
          <NewArrived
            NewProducts={specialOfferProducts}
            category={params.category}
          />
          <StoreList />
        </>
      )}

      {params.category === "general" && (
        <>
          <PageHero category={params.category} />

          <ProductCategory
            subCategories={shopCategories}
            category={params.category}
          />

          <AdsBanner />

          <PopularProducts
            popularProducts={popularProducts}
            category={params.category}
          />

          <AdsBanner />

          <SpecialOffer
            specialOfferProducts={specialOfferProducts}
            category={params.category}
          />

          <PopularStore category={params.category} />

          <NewArrived
            NewProducts={specialOfferProducts}
            category={params.category}
          />
          <StoreList />
        </>
      )}
    </>
  );
}

export default CategoryProductPage