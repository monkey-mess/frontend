import { AppProvider } from "./(Redux)/AppProvider";
import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <AppProvider>
                <body>{children}</body>
            </AppProvider>
        </html>
    );
}
