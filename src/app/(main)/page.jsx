import Image from "next/image";
import LeftSidebar from "@/Components/homepage/news/LeftSidebar";
async function getCategories (){
const res=await fetch('https://openapi.programming-hero.com/api/news/categories')
const data=await res.json()
return data.data
}


export default async function Home() {
  const categories= await getCategories()
  console.log(categories.news_category);

  return (
  <div className=" grid grid-cols-12 gap-3 container mx-auto  my-5">
<LeftSidebar categories={categories} active_Id={"02"}/>

<div className="font-bold text-3xl bg-purple-100 col-span-6">All News</div>
<div className="font-bold text-3xl bg-yellow-100 col-span-3">Social Icons</div>




  </div>
  );
}
