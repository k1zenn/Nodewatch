export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-8 md:px-12">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">Personal Dashboard</p>
          <h1 className="text-3xl md:text-4xl font-bold mt-1">🚀 Purunjay&apos;s Homelab</h1>
          <p className="text-zinc-300 mt-2 text-sm md:text-base">
            Quick overview of my self-hosted setup.
          </p>
        </header>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
            <p className="text-xs text-zinc-400">Total VMs</p>
            <p className="text-xl font-semibold">4</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
            <p className="text-xs text-zinc-400">Running</p>
            <p className="text-xl font-semibold text-green-400">3</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
            <p className="text-xs text-zinc-400">Alerts</p>
            <p className="text-xl font-semibold text-yellow-300">1</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
            <p className="text-xs text-zinc-400">Public Status</p>
            <p className="text-xl font-semibold text-green-400">Online</p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl">
            <h2 className="text-lg font-semibold mb-3">🖥 Proxmox VE</h2>
            <p className="text-zinc-300">Status: 🟢 Online</p>
            <p className="text-zinc-300">Uptime: 3 Days 4 Hours</p>
            <p className="text-zinc-400 text-sm mt-2">CPU: 24% | RAM: 58%</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl">
            <h2 className="text-lg font-semibold mb-3">🐉 Kali Linux</h2>
            <p className="text-zinc-300">Status: 🟢 Running</p>
            <p className="text-zinc-300">IP: 192.168.29.234</p>
            <p className="text-zinc-400 text-sm mt-2">Notes: Pentesting VM</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl">
            <h2 className="text-lg font-semibold mb-3">📦 Other VMs</h2>
            <p className="text-zinc-300">Debian Server: 🟢 Running</p>
            <p className="text-zinc-300">Test VM: 🔴 Stopped</p>
            <p className="text-zinc-400 text-sm mt-2">Last backup: Today 10:20 AM</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl">
            <h2 className="text-lg font-semibold mb-3">🌍 Public Access</h2>
            <p className="text-zinc-300">Cloudflare Tunnel: 🟢 Active</p>
            <p className="text-zinc-300">SSH: Enabled</p>
            <p className="text-zinc-400 text-sm mt-2">Domain: homelab.example.com</p>
          </div>
        </section>

        <footer className="mt-8 text-xs text-zinc-500">
          Last updated manually • v0.1
        </footer>
      </div>
    </main>
  );
}
