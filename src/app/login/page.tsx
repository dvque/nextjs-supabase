'use client';

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {

    const [data, setData] = useState<{
        email: string,
        password: string
    }>({
        email: '',
        password: ''
    })

    const router = useRouter();

    const login = async () => {
        console.log('data', data)
        try {
            let { data: dataUser, error } = await supabase.auth.signUp({
                email: data.email,
                password: data.password
            })

            if (data) {
                router.refresh();
            }
        }
        catch (error) {
            console.log('error', error)
        }

    }

    const handleChange = (e: any) => {

        const { name, value } = e.target;

        setData((prev: any) => ({
            ...prev,
            [name]: value,
        }))
    }

    return <div className="container mx-auto w-[400px]">
        <h1>Login</h1>
        <div className='grid'>
            <label>Email</label>
            <input
                type="text"
                name="email"
                value={data?.email}
                onChange={handleChange}
                style={{ color: 'black' }}
            />
        </div>
        <div className='grid'>
            <label>Password</label>
            <input
                type="password"
                name="password"
                value={data?.password}
                onChange={handleChange}
                style={{ color: 'black' }}
            />
        </div>
        <div><button onClick={login}>Signup</button></div>
    </div>
}