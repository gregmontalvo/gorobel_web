import "../globals.css";
import AdminNav from "@/components/admin/AdminNav";
import { montserrat, inter } from "../fonts";

export const metadata = {
  title: "Admin — Gorobel",
  robots: "noindex,nofollow",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="antialiased">
        <div className="flex min-h-screen bg-[var(--color-surface)]">
          <AdminNav />
          <main className="flex-1 p-8 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
