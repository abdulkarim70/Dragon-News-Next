import Image from "next/image";
async function getCategories (){
const res=await fetch('https://openapi.programming-hero.com/api/news/categories')
const data=await res.json()
return data
}


export default async function Home() {
  const categories= await getCategories()
  console.log(categories);
  return (
  <div className=" grid grid-cols-12 gap-3 container mx-auto  my-5">
<div className="font-bold text-3xl bg-green-100 col-span-3">All Category</div>
<div className="font-bold text-3xl bg-purple-100 col-span-6">All News</div>
<div className="font-bold text-3xl bg-yellow-100 col-span-3">Social Icons</div>




  </div>
  );
}
