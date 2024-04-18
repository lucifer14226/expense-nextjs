import StatusCard from "../status/StatusCard";
import CategoryHeader from "./CategoryHeader";
import CategoryCard from "./CatgoryCard";

const CategoryPage=()=>{
    return(
        <div className=" w-full  ">
            <div className="flex flex-col justify-around">
                <div className="p-12 text-4xl font-bold"  >
                    Category
                </div>
                <div className=" flex justify-around m-y-8">
                <StatusCard height={80} width={80}/>
                <StatusCard height={80} width={80}/>
                </div>
                <div className="m-8 text-xl font-medium">
                    Category Transaction
                </div>
               <div className="ml-20">
               <CategoryHeader/>
               </div>
               <div className=" rounded-xl ml-20">
               <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
               </div>

            </div>
        </div>
    )
}
export default CategoryPage;