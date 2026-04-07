// M6 — Profile page
import { Settings, HelpCircle, LogOut, User } from "lucide-react";

const MENU_ITEMS = [
  { Icon: Settings,   label: "Settings",     sub: "Notifications, location, display" },
  { Icon: HelpCircle, label: "Help",          sub: "FAQ and support" },
  { Icon: LogOut,     label: "Log Out",       sub: null, destructive: true as const },
];

export default function MePage() {
  return (
    <div className="px-4 pt-5">
      {/* Avatar + name */}
      <div className="flex flex-col items-center py-8 gap-3">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "#13121E", border: "2px solid #A78BFA" }}
        >
          <User size={40} style={{ color: "#A78BFA" }} />
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold" style={{ color: "#F1F0FB" }}>
            Music Fan
          </p>
          <p className="text-sm" style={{ color: "#9CA3AF" }}>
            Seattle, WA
          </p>
        </div>
      </div>

      {/* Menu list */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ backgroundColor: "#13121E", border: "1px solid #1E1D2A" }}
      >
        {MENU_ITEMS.map(({ Icon, label, sub, destructive }, i) => (
          <button
            key={label}
            className="w-full flex items-center gap-4 px-5 py-4 transition-colors active:opacity-70"
            style={{
              borderBottom: i < MENU_ITEMS.length - 1 ? "1px solid #1E1D2A" : undefined,
            }}
          >
            <Icon
              size={20}
              style={{ color: destructive ? "#F87171" : "#9CA3AF" }}
            />
            <div className="flex-1 text-left">
              <p
                className="text-sm font-medium"
                style={{ color: destructive ? "#F87171" : "#F1F0FB" }}
              >
                {label}
              </p>
              {sub && (
                <p className="text-xs mt-0.5" style={{ color: "#9CA3AF" }}>
                  {sub}
                </p>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
