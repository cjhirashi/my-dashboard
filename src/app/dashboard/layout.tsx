import { Sidebar } from "@/components";


export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
  return (
    <div className=" w-screen min-h-max antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
        
        <div className="flex  ">

            <Sidebar />
            
            <div className="p-2 w-full">

            { children }

            </div>
        
        </div>
    </div>
  );
}