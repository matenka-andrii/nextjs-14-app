import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter as FontSans } from 'next/font/google';
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import './globals.css';
import { dark } from '@clerk/themes';
import Provider from '@/app/Provider';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
    title: 'Docs',
    description: 'Editor',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <ClerkProvider
          appearance={{
              baseTheme: dark,
              variables: { colorPrimary: "#3371FF", fontSize: '16px' }
          }}>
          <html lang="en" suppressHydrationWarning>
              <body
                  className={cn(
                      "min-h-screen font-sans antialiased",
                      fontSans.variable
                  )}
              >
              <Provider>
                  { children }
              </Provider>
              </body>
          </html>
      </ClerkProvider>
  )
}
