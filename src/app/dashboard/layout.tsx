import { Dashboard } from "@/components/dashboard";


export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
  return (

        
    <div key={'dashboaurLayout'} className="flex h-screen w-screen ">

      <div className="flex-none w-72 h-screen ">
        <Dashboard />
      </div>
            
      <div className="flex-1 h-screen overflow-y-auto">

        { children }

      </div>
  
    </div>
  );
}