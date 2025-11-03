import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import Import from "@/Components/Import";
import Inventory from '@/Components/Inventory';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import AddProduct from '@/Components/AddProduct';
import MakeCapital from '@/Components/MakeCapital';
import ProductHistory from '@/Components/ProductHistory';
import UserHistory from '@/Components/UserHistory';
import TransactionHistory from '@/Components/TransactionHistory';
import Transaction from '@/Components/Transaction';
import { MantineProvider } from '@mantine/core';
import TransactionRecords from '@/Components/TransactionRecords';
import TransactionRecSection from './TransactionRecSection';

export default function Dashboard({ user, tHistory, pHistory, uHistory, tRecords }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [pageTitle, setPageTitle] = useState("Dashboard");

    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <AuthenticatedLayout
                header={
                   
    <h1 className="text-4xl font-bold text-gray-900" style={{ marginLeft: "7rem", marginTop:"-1.6rem", marginBottom:"-1.6rem" }}>
        Welcome,{" "}
            {user?.name
                ? user.name.charAt(0).toUpperCase() + user.name.slice(1)
                : "[USERNAME]"}
    
        !
    </h1>
                }
            >
                <Head title="Dashboard" />

                <div className="py-1">
                    <div className="mx-auto max-w-6xl sm:px-12">
                        {/* Dashboard Cards */}
                        <div className=" grid grid-cols-1 md:grid-cols-2 gap-3" style={{marginTop:"-1rem"}} >
                            
                            <DashboardCard
                                
                                title="Sales Report"
                                subtitle={`Capital: ${user.capital}`}
                                image="/images/3.png"
                                link="/sales-report"
                            />

                            <DashboardCard
                                title="Inventory Alert!"
                                subtitle="3 items low in stock!"
                                image="/images/5.png"
                                link="/inventory1"
                            />

                            <DashboardCard
        title="Recent Transactions"
        subtitle="Latest transaction list"
        image="/images/4.png"
        link="/transaction-rec-section"
      />

                            <DashboardCard
                                title="Inventory"
                                subtitle="View detailed stock info"
                                image="/images/5.png"
                                link="/inventory1"
                            />
                        </div>

                        {/* Import Excel Card */}
                        <div className="mt-10">
                            <h2 className="text-xl font-semibold text-[#4b2e17] mb-1">
    Import Excel
</h2>
<p className="text-gray-700 text-sm mb-4">
    Upload your Excel file to update products and transactions.
</p>

                            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                                <div className="bg-white rounded-xl border border-black p-6 flex flex-col items-center transition-shadow duration-300 hover:shadow-[10px_10px_15px_rgba(0,0,0,0.3)]">
                                    <Import />
                                </div>
                            </div>
                        </div>


<div id="quick-access" className="mt-10">
{/* Quick Access Section */}
<div className="mt-10">
  <h2 className="text-xl font-semibold text-[#4b2e17] mb-4">Quick Access</h2>

  <div className="flex flex-wrap justify-center sm:justify-start text-center gap-12">
    {[
      { img: "/images/6.png", label: <>Make<br />Transaction</>, href: "/make-transaction" },
      { img: "/images/7.png", label: <>Transaction<br />History</>, href: "/transaction-rec-section" },
      { img: "/images/8.png", label: "Add Product", href: "/add-product" },
      { img: "/images/9.png", label: <>Generate<br />Report</>, href: "/generate-report" },
    ].map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className="group flex flex-col items-center cursor-pointer transition-transform hover:scale-105 focus:outline-none"
      >
        <div
          className="flex items-center justify-center w-20 h-20 rounded-full 
          bg-gradient-to-b from-[#f3dfc3] to-[#d7bfa0]
          border border-[#4b2e17]
          hover:shadow-[5px_5px_15px_rgba(75,46,23,0.6)]
          transition-all duration-300"
        >
          <img
            src={item.img}
            alt="icon"
            className="w-10 h-10 object-contain"
          />
        </div>
        <span className="mt-2 text-sm font-light text-black group-hover:font-medium transition-all duration-100">
          {item.label}
        </span>
      </Link>
    ))}
  </div>

</div>
</div>

{/* Recent Activity */}
<div className="mt-12">
    <h2 className="text-xl font-semibold text-[#4b2e17] mb-4">
        Recent Activity
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
            { label: "Total Sales", value: "10" },
            { label: "Total Cost of Sales", value: "₱700" },
            { label: "Customer #", value: "8" },
        ].map((item) => (
            <div
                key={item.label}
                className="bg-gradient-to-b from-[#f9e7d0] to-[#e8d4b8] text-center h-48 sm:h-56 flex flex-col justify-center rounded-xl border border-black transition-shadow duration-300 hover:shadow-[10px_10px_15px_rgba(0,0,0,0.3)]"
            >
                <h3 className="text-4xl font-extrabold text-[#4b2e17]">
                    {item.value}
                </h3>
                <p className="text-base text-[#4b2e17] mt-3 font-medium">
                    {item.label}
                </p>
            </div>
        ))}
    </div>
</div>

                    </div>
                </div>
            </AuthenticatedLayout>
        </MantineProvider>
    );
}

/* DashboardCard Subcomponent */
function DashboardCard({ title, subtitle, image, link }) {
    return (
        <div
  className="relative group bg-white rounded-xl border border-black overflow-hidden transition-shadow duration-300 hover:shadow-[5px_5px_0px_#4b2e17]"
  style={{ height: "210px" }} //whitecard height
>

            <div className="p-6">
                <h2 className="text-lg font-bold text-gray-800">{title}</h2>
                <p className="mt-3 text-gray-700 text-sm">{subtitle}</p>
            </div>
            <div className="absolute inset-0 bg-[#00000088] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                <Link href={link} className="w-full h-full">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover object-center rounded-xl cursor-pointer transition-all duration-300 border border-black"
                 

                    />
                </Link>
            </div>
        </div>
    );
}
