import { Footer, Navbar } from "@/components";


export default function StaticPageLayout({ children }: { children: React.ReactNode; }) {
  return (
    <div className="flex flex-col items-center w-screen h-screen">

          <div className="z-20 w-screen">
            <Navbar />
          </div>
            
          <div className="p-4 grow overflow-y-auto w-screen">

            { children }

          </div>

          <div className="w-screen">
            <Footer />
          </div>
        
     
    </div>
  );
}