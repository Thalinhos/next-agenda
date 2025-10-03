"use client";
import { CalendarComponent } from '@/components/CalendarComponent';
import { useSession, signOut } from "next-auth/react";
import Image from 'next/image';

export default function Home() {
    const { data: session, status } = useSession();

    if (status === "loading") return <p>Carregando...</p>;

    if (!session) {
        if (typeof window !== 'undefined') {
        window.location.href = "/api/auth/signin";
        }
        return null;
    }


    const date = new Date(); 
    let nomeDoMes = date.toLocaleString('pt-BR', { month: 'long' });
    nomeDoMes = nomeDoMes.charAt(0).toUpperCase() + nomeDoMes.slice(1);
    const nomeDoAno = date.getFullYear();

    const auau = () => {
        const idx = Math.floor(Math.random() * 3) + 1; 
        const audio = new Audio(`./auau-${idx}.mp3`);
        audio.play();
    }

  return (
          <>
            <div className="flex flex-col min-h-screen">
               
                <div className='bg-blue-400 p-1 flex justify-between'>
                    <div className='ml-14 cursor-pointer' onClick={() => auau()}>
                        <Image src={'/dokikoda.jpg'} alt={''} width={720} height={720} className='w-14 h-14 rounded-full'/>
                    </div>
                    <div className='items-center justify-center flex mr-14'>
                        <button
                        onClick={() => signOut()}
                        className="cursor-pointer ml-auto bg-red-500 text-white px-4 py-2 rounded items-center justify-center"
                        >
                        Sair
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-center mt-4 mb-4">
                    <h1 className="text-2xl font-bold">
                        {nomeDoMes + " de " + nomeDoAno}
                    </h1>
                </div>
                
                
                <div className="container mx-auto  flex-1 overflow-auto  px-1">
                    <div>
                        <CalendarComponent />
                    </div>
                </div>
            </div>
        </>
  );
}
