import Link from "next/link";


const LeftSidebar = ({ categories, active_Id }) => {
  console.log(categories);
  return (
    <div className=" col-span-3"> <h2 className="font-bold text-lg">All Category</h2>
      <ul className=" flex flex-col gap-3 mt-6">
        {categories.news_category.map(category =>
       
          <li key={category.category_id} className={`
    ${active_Id === category.category_id ? ' bg-slate-100' : ''}
    p-2 rounded-md text-center font-bold  text-md`}> <Link className="block p-2" href={`/category/${category.category_id} `}>{category.category_name} </Link></li>
   
        )}

      </ul>
    </div>
  );
};

export default LeftSidebar;