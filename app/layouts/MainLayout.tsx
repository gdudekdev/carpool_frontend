import React from "react";
import { Links, Meta, Scripts, ScrollRestoration } from "react-router";
import Footer from "../components/footer/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
      return (
        <html lang="en">
          <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Meta />
            <Links />
          </head>
          <body>
            {children}
            <ScrollRestoration />
            <Scripts />
            <Footer />
          </body>
        </html>
      );
    }