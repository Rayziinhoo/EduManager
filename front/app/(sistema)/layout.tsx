'use client'
import { RootState } from "../redux/store";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function SistemaLayout({children}){

    const usuario = useSelector((state:RootState)=> state.auth.usuario);

    const router = useRouter();

    useEffect(()=>{
        if(usuario == null){
            router.push("/login")
        }
    })

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
