import { NextResponse } from 'next/server'

export function middleware(req, ev) {
    const currentEnv = process.env.NODE_ENV;

    if (currentEnv === 'production' && req.headers.get("x-forwarded-proto").indexOf("https") !== -1) {
        return NextResponse.redirect(
            `https://${req.headers.get('host')}${req.nextUrl.pathname}`,
            301
        );
    }
    return NextResponse.next();
}
