import { getStats, getContactLeads, getFounderLeads } from "@/lib/kv";
import { Users, BookOpen, UserCheck, MessageCircle } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const [stats, contactLeads, founderLeads] = await Promise.all([
    getStats(),
    getContactLeads(),
    getFounderLeads(),
  ]);

  const recentLeads = [
    ...contactLeads.map((l) => ({ ...l, type: "Contacto" })),
    ...founderLeads.map((l) => ({ ...l, type: "Fundador", interest: "—", message: "—" })),
  ]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5);

  const statCards = [
    {
      label: "Leads de contacto",
      value: stats.leads.contact,
      icon: MessageCircle,
      color: "text-[var(--color-moss)]",
      bg: "bg-[var(--color-moss)]/10",
    },
    {
      label: "Miembros fundadores",
      value: stats.leads.founders,
      icon: UserCheck,
      color: "text-[var(--color-sage)]",
      bg: "bg-[var(--color-sage)]/10",
    },
    {
      label: "Entradas en KB",
      value: stats.kb.total,
      icon: BookOpen,
      color: "text-[var(--color-sage)]",
      bg: "bg-[var(--color-sage)]/10",
    },
    {
      label: "KB activas",
      value: stats.kb.active,
      icon: Users,
      color: "text-[var(--color-forest)]",
      bg: "bg-[var(--color-forest)]/10",
    },
  ];

  return (
    <div>
      <h1 className="font-display font-bold text-2xl text-[var(--color-charcoal)] mb-1">
        Dashboard
      </h1>
      <p className="text-[var(--color-steel)] text-sm mb-8">
        Resumen general de Gorobel Kirol Gunea
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {statCards.map(({ label, value, icon: Icon, color, bg }) => (
          <div key={label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center mb-3`}>
              <Icon className={`w-5 h-5 ${color}`} />
            </div>
            <p className="font-display font-black text-3xl text-[var(--color-charcoal)]">
              {value}
            </p>
            <p className="text-[var(--color-stone)] text-xs mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Recent leads */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="font-display font-bold text-[var(--color-charcoal)]">Últimos leads</h2>
        </div>
        {recentLeads.length === 0 ? (
          <p className="px-6 py-8 text-[var(--color-stone)] text-sm text-center">
            Aún no hay leads registrados.
          </p>
        ) : (
          <div className="divide-y divide-gray-50">
            {recentLeads.map((lead) => (
              <div key={lead.id} className="px-6 py-4 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-medium text-[var(--color-charcoal)] text-sm truncate">
                    {lead.name}
                  </p>
                  <p className="text-[var(--color-stone)] text-xs truncate">{lead.email}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      lead.type === "Fundador"
                        ? "bg-[var(--color-sage)]/10 text-[var(--color-sage)]"
                        : "bg-[var(--color-forest)]/10 text-[var(--color-forest)]"
                    }`}
                  >
                    {lead.type}
                  </span>
                  <p className="text-[var(--color-mist)] text-xs">
                    {new Date(lead.createdAt).toLocaleDateString("es-ES", {
                      day: "numeric",
                      month: "short",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
