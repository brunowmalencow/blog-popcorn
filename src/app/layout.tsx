import type { Metadata } from "next";
import "../app/globals.css";

export const metadata: Metadata = {
  title: "Popcorn Blog",
  description: "Feito com amor, ou, pela falta dele",
};

type RootLayoutProps = {
children : React.ReactNode
}

export default function RootLayout({children,}: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
