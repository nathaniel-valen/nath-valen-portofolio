export const metadata = {
  title: "Nath Portfolio",
  description: "Personal website by Nath — built with Next.js, Tailwind CDN & GSAP",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Tailwind CDN */}
        <script src="https://cdn.tailwindcss.com"></script>

        {/* GSAP CDN */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>

        {/* Tailwind custom config via CDN */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: 'class',
                theme: {
                  extend: {
                    colors: {
                      primary: '#6366f1',
                      secondary: '#9333ea',
                    },
                  },
                },
              }
            `,
          }}
        />
      </head>
      <body className="bg-gray-950 text-gray-100 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
