import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

//
export default function SistemaLayout({children}){
    return (
        <div className="flex min-h-screen bg-cyan-50">
            <Sidebar/>
            <div className="flex-1 flex flex-col">
        <Header/>
        <main className="flex-1 p-8 overflow-y-auto">
        {children}
        </main>
        <Footer/>
        </div>
    
        </div>);
}
