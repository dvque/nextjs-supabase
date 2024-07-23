import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    // The NextResponse.next() function is typically used to pass control to the next middleware function in the chain. 
    const res = NextResponse.next();

    const supabase = createMiddlewareClient({ req, res });

    const {
        data: {
            session
        }
    } = await supabase.auth.getSession();

    if (!session) {
        return NextResponse.rewrite(new URL('/login', req.url));
    }

    return res;
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ]
}