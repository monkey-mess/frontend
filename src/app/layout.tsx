import { AppProvider } from "./(Redux)/AppProvider";
import "./globals.css";
import Init from "./Init";
export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <AppProvider>
                <Init />
                <body>{children}</body>
            </AppProvider>
        </html>
    );
}
