import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-lvh flex-col items-center ">
     <div className='flex flex-col items-center  mt-24'>
     <div className="font-medium font-cursive text-6xl mr-10 ">
          FEASE
      </div>
      <div className="mt-24">
        <h3 className="font-medium font-serif italic text-6xl">
          Track and Save your Money
        </h3>
      </div>

      <div className="flex justify-evenly mt-24">
        <Button variant="outline" className="mr-20 w-32 h-16">
          GET STARTED
        </Button>
        <Button variant="outline" className=" w-32 h-16">
          LOGIN
        </Button>
      </div>
     </div>
    </main>
  );
}
