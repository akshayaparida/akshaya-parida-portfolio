// src/app/layouts/SubPagesLayout.tsx
import { SubPagesLayoutProps } from "@/app/lib/definitions"; 
import HomeBtn from "@/components/HomeBtn";  

export default function SubPagesLayout({ children }: SubPagesLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 xs:px-16 lg:px-32 py-20">
      <HomeBtn />
      {children}
    </main>
  );
}
