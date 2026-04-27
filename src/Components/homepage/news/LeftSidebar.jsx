

const LeftSidebar = ({categories, active_Id}) => {
    console.log(categories);
    return (
        <div className=" col-span-3"> <h2 className="font-bold text-lg">All Category</h2> 
  <ul className=" flex flex-col gap-3 mt-6">
    {categories.news_category.map(category=>
  <li key={category.category_id} className={ `
    ${active_Id===category.category_id ?' bg-slate-100':''}
    p-2 rounded-md text-center font-bold text-md`}>{category.category_name} </li>
)}

  </ul>
</div>
    );
};

export default LeftSidebar;