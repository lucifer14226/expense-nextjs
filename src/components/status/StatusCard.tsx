
import { CircleDollarSign, DollarSign, Monitor } from "lucide-react"

const StatusCard = ({height=48,width=60}:any) => {
    return (
        <div className={`bg-cyan-50 rounded-xl border m-4 flex h-${height} w-${width} shadow-lg p-8 `}  >
            <div className="flex flex-col items-center justify-around ">
                <div className="flex ">
                    <div>
                        <CircleDollarSign className="m-4" />
                    </div>
                    <div className="mt-4 flex font-bold">

                        50,000
                    </div>
                </div>
                <div className="flex font-bold">
                    <div className="h4">
                        Total Expense
                    </div>
                </div>

                <div className="flex m-4 font-bold ">
                    <div className="h4">
                        Percentage Increase/Decrease
                    </div>
                    <div className="ml-2">
                        18%
                    </div>

                </div>

            </div>
        </div>)
}

export default StatusCard