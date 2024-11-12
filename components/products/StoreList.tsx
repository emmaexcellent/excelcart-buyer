'use client'
import { Filter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import StoreSingle from './StoreSingle'

const StoreList = () => {

  return (
    <section className="w-full my-10">
      <div className="w-full bg-muted">
        <div className="w-full flex items-center justify-between p-3 bg-muted mb-3 max-w-6xl mx-auto">
          <h5 className="text-xl font-semibold">14 Groceries Store</h5>
          <Button variant="link" className="p-2">
            View All
          </Button>
        </div>
      </div>

      <div className="w-full max-w-6xl lg:mx-auto grid px-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <StoreSingle
          imgUrl="/vendors/em.png"
          name="EcoMarket"
          status="open"
          address="Arepo titun, Coker town, Ifo."
          rating={4.2}
          qtySold={55}
        />
        <StoreSingle
          imgUrl="/vendors/fsm.png"
          name="Fresh Supermarket"
          status="closed"
          address="Osungboye, Ibodun, Ifo."
          rating={3.0}
          qtySold={23}
        />
        <StoreSingle
          imgUrl="/vendors/fs.png"
          name="Family Supermarket"
          status="closed"
          address="Osungboye, Ibodun, Ifo."
          rating={0}
          qtySold={23}
        />
        <StoreSingle
          imgUrl="/vendors/ss.png"
          name="Smart Shopping"
          status="opened"
          address="Osungboye, Ibodun, Ifo."
          rating={2.5}
          qtySold={23}
        />
      </div>
    </section>
  );
}

export default StoreList