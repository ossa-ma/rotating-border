import RotatingBorder from "@/components/rotating-border"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-900 gap-8">
      <h1 className="text-3xl font-bold text-white mb-10">Rotating Border Examples</h1>

      {/* Simple button with rotating border */}
      <RotatingBorder borderRadius="rounded-full" borderColor="#FF00FF" className="w-40">
        <button className="w-full h-full rounded-full bg-slate-800 text-white py-2 px-4">Glowing Button</button>
      </RotatingBorder>

      {/* Simple card with rotating border */}
      <RotatingBorder borderWidth={2} borderColor="#00FFFF" rotationSpeed={4} className="w-80">
        <div className="w-full bg-slate-800 p-6 rounded-lg text-white">
          <h3 className="text-xl font-bold mb-2">Card Title</h3>
          <p className="text-slate-300 mb-4">This is a simple card with a rotating border.</p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input type="text" className="w-full p-2 rounded bg-slate-700 text-white" placeholder="Your name" />
            </div>
            <button className="w-full bg-blue-600 py-2 rounded">Save</button>
          </div>
        </div>
      </RotatingBorder>

      {/* Image placeholder with rotating border */}
      <RotatingBorder
        borderWidth={3}
        borderColor="#FFFF00"
        highlightPercentage={30}
        borderRadius="rounded-full"
        className="w-64 h-64"
      >
        <div className="w-full h-full bg-slate-700 rounded-full flex items-center justify-center text-white">
          Image Placeholder
        </div>
      </RotatingBorder>

      {/* Debug element to verify animation is working */}
      <div className="mt-8 p-4 bg-slate-800 text-white rounded">
        <h3 className="font-bold mb-2">Animation Test</h3>
        <div className="w-16 h-16 bg-yellow-400" style={{ animation: "spin 2s linear infinite" }}></div>
        <p className="mt-2 text-sm">If the square above is rotating, animations are working correctly.</p>
      </div>
    </main>
  )
}

