"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, BookOpen, Users, Settings, LogOut, Dumbbell } from "lucide-react";

const links = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/knowledge", label: "Base de conocimiento", icon: BookOpen },
  { href: "/admin/leads", label: "Leads", icon: Users },
  { href: "/admin/settings", label: "Configuración", icon: Settings },
];

export default function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <aside className="w-60 shrink-0 bg-[var(--color-charcoal)] min-h-screen flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 py-5 border-b border-white/10">
        <div className="w-8 h-8 rounded-lg bg-[var(--color-forest)] flex items-center justify-center">
          <Dumbbell className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-white font-display font-bold text-sm leading-none">Gorobel</p>
          <p className="text-[var(--color-stone)] text-xs mt-0.5">Admin</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-1">
        {links.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active
                  ? "bg-[var(--color-forest)] text-white"
                  : "text-[var(--color-mist)] hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-3 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--color-mist)] hover:bg-white/5 hover:text-white transition-colors"
        >
          <LogOut className="w-4 h-4 shrink-0" />
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}
