export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-10">
      
      <h1 className="text-4xl font-bold mb-10">
        🚀 Purunjay's Homelab
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">

        <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">🖥 Proxmox VE</h2>
          <p>Status: 🟢 Online</p>
          <p>Uptime: 3 Days 4 Hours</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">🐉 Kali Linux</h2>
          <p>Status: 🟢 Running</p>
          <p>IP: 192.168.29.234</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">📦 Other VMs</h2>
          <p>Debian Server: 🟢 Running</p>
          <p>Test VM: 🔴 Stopped</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">🌍 Public Access</h2>
          <p>Cloudflare Tunnel: 🟢 Active</p>
          <p>SSH: Enabled</p>
        </div>

      </div>
    </main>
  );
}