

const NewsCategoryPage = async ({params}) => {
    const paramsRes= await params
    console.log(paramsRes);
    return (
        <div>
           News By Category 
        </div>
    );
};

export default NewsCategoryPage;