import Image from "next/image";
import LeftSidebar from "@/Components/homepage/news/LeftSidebar";
import RightSidebar from "@/Components/homepage/news/RightSidebar";
async function getCategories (){
const res=await fetch('https://openapi.programming-hero.com/api/news/categories')
const data=await res.json()
return data.data
}

async function getNewsByCategoryId (id){
const res=await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
const data=await res.json()
return data.data
}

export default async function Home() {
  const categories= await getCategories()
  
  const news=await getNewsByCategoryId('01')
console.log(news);


  return (
  <div className=" grid grid-cols-12 gap-3 container mx-auto  my-5">
<LeftSidebar categories={categories} active_Id={null}/>

<div className="font-bold text-3xl 
 col-span-6"> <h2 className="p-5">All News</h2>
<div className="space-y-4">
   { 
  news.map(n=><div className="p-6 rounded-md border" key={n._id}>{n.title}</div>)
 }
</div>
 </div>
<div className=" col-span-3"><RightSidebar /> </div>




  </div>
  );
}
