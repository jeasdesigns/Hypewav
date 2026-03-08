import { User, Settings, Bell, HelpCircle, LogOut, Music } from "lucide-react";
import { AppLayout } from "../components/AppLayout";
import { HypeHeader } from "../components/HypeHeader";

export function ProfilePage() {
  return (
    <AppLayout>
      <HypeHeader />
      
      <main className="px-4 pt-6 pb-24">
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#67E8F9] flex items-center justify-center">
            <div className="w-[88px] h-[88px] rounded-full bg-[#13121E] flex items-center justify-center text-3xl font-bold">
              ME
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-1">Music Lover</h2>
          <p className="text-[#9CA3AF]">Seattle, WA</p>
        </div>

        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 bg-[#13121E] rounded-xl p-4 hover:bg-[#1A1927] transition-colors">
            <Music className="w-5 h-5 text-[#A78BFA]" />
            <span className="flex-1 text-left">My Favorite Artists</span>
            <span className="text-sm text-[#9CA3AF]">12</span>
          </button>

          <button className="w-full flex items-center gap-3 bg-[#13121E] rounded-xl p-4 hover:bg-[#1A1927] transition-colors">
            <Bell className="w-5 h-5 text-[#67E8F9]" />
            <span className="flex-1 text-left">Notifications</span>
          </button>

          <button className="w-full flex items-center gap-3 bg-[#13121E] rounded-xl p-4 hover:bg-[#1A1927] transition-colors">
            <Settings className="w-5 h-5 text-[#9CA3AF]" />
            <span className="flex-1 text-left">Settings</span>
          </button>

          <button className="w-full flex items-center gap-3 bg-[#13121E] rounded-xl p-4 hover:bg-[#1A1927] transition-colors">
            <HelpCircle className="w-5 h-5 text-[#9CA3AF]" />
            <span className="flex-1 text-left">Help</span>
          </button>

          <button className="w-full flex items-center gap-3 bg-[#13121E] rounded-xl p-4 hover:bg-[#1A1927] transition-colors">
            <LogOut className="w-5 h-5 text-[#9CA3AF]" />
            <span className="flex-1 text-left">Log Out</span>
          </button>
        </div>

        <div className="mt-8 p-6 bg-[#13121E] rounded-2xl border border-[#A78BFA]/30">
          <h3 className="font-semibold mb-2 text-[#A78BFA]">About Hype.Wav</h3>
          <p className="text-sm text-[#9CA3AF] leading-relaxed mb-3">
            Discover the best live music in Greater Seattle. We surface upcoming shows enriched with deep artist data from Spotify.
          </p>
          <p className="text-xs text-[#9CA3AF]">Version 1.0.0</p>
        </div>
      </main>
    </AppLayout>
  );
}