import Link  from "next/link"

interface MainNavType{
    items?:any[]
}

const MainNavigation=({items}:MainNavType)=>{
    return (
       <div className="flex absolute">
             <div className="flex  flex-col items-center  bg-gray-50 h-full w-40 ">
                <div className="m-4 hover:bg-gray-500 pl-12 pr-12 pt-4 pb-4 rounded-xl">
                    HELLO
                </div >
                <div className="m-4 hover:bg-gray-500 pl-12 pr-12 pt-4 pb-4 rounded-xl">
                    HELLO
                </div>
                <div className="m-4 hover:bg-gray-500 pl-12 pr-12 pt-4 pb-4 rounded-xl">
                    HELLO
                </div>
                <div className="m-4 hover:bg-gray-500 pl-12 pr-12 pt-4 pb-4 rounded-xl">
                    HELLO
                </div>
                <div className="m-4 hover:bg-gray-500 pl-12 pr-12 pt-4 pb-4 rounded-xl">
                    HELLO
                </div>
                <div className="m-4 hover:bg-gray-500 pl-12 pr-12 pt-4 pb-4 rounded-xl">
                    HELLO
                </div>
                <div className="m-4 hover:bg-gray-500 pl-12 pr-12 pt-4 pb-4 rounded-xl">
                    HELLO
                </div>
                <div className="m-4 hover:bg-gray-500 pl-12 pr-12 pt-4 pb-4 rounded-xl">
                    HELLO
                </div>
                <div className="m-4 hover:bg-gray-500 pl-12 pr-12 pt-4 pb-4 rounded-xl">
                    HELLO
                </div>
              </div>
       </div>
    )
}

export default MainNavigation