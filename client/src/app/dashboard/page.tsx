'use client'

import PopularProductCard from "./(sections)/PopularProductCard";
import PurchaseSummaryCard from "./(sections)/PurchaseSummaryCard";
import SalesSummaryCard from "./(sections)/SalesSummaryCard";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <PopularProductCard/>
      <SalesSummaryCard />
      <PurchaseSummaryCard />
      <div className="row-span-3 bg-gray-500" />
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500" />
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500" />
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500" />
    </div>
  )
}

export default Dashboard;