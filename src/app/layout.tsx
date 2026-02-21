import "./globals.css";
import ClientNavbar from "../components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ClientNavbar />
        {children}
      </body>
    </html>
  );
}
