import { DollarSign, Monitor } from "lucide-react"
import Image from "next/image"
import MainNavigation from "../main-nav"
import TransactionCard from "../transaction/TransactionCard"
import StatusCard from "../status/StatusCard"
import TransactionHeader from "../transaction/TrasactionHeader"

const Introduction = () => {
  return (
    <div className="flex  flex-col w-full  justify-evenly">
      <div className="pl-12 flex items flex-col h-full w-full pt-8 text-4xl font-bold">
        Dashboard
      </div>
      <div className="flex justify-between w-full mt-8">
        <StatusCard height={80} />
        <StatusCard height={80} />
         <StatusCard height={80} />

      </div>
      <div className="h-full w-full flex flex-col mt-8 ">
        <div className="font-semibold text-lg ml-8">
          Sales
        </div>
        <div className="rounded-xl h-80 w-4/6 border ml-40 mt-4 relative" >
          <Image
            className="relative rounded-xl border "
            src={"/direwolf.png"}
            // width={500}
            // height={500}
            style={{ objectFit: 'none' }}
            fill
            alt="status bar"
          >

          </Image>
        </div>
        <div className="font-semibold text-lg ml-8 mt-8">
          Transaction History
        </div>
      <div className="ml-20">
      <TransactionHeader/>
      </div>
       <div className=" ml-20 ">
       <TransactionCard/>
        <TransactionCard/>
        <TransactionCard/>
        <TransactionCard/>
        <TransactionCard/>
        <TransactionCard/>
        <TransactionCard/>
        <TransactionCard/>
        <TransactionCard/>
        <TransactionCard/>  
        <TransactionCard/>
        <TransactionCard/>
       </div>

      </div>
    </div>

  )
}
export default Introduction