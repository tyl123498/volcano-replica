import { cn } from "@/lib/utils"

export function MiniQR({ size = 92 }: { size?: number }) {
  const cells = Array.from({ length: 49 }, (_, i) => {
    const row = Math.floor(i / 7)
    const col = i % 7
    const corner =
      (row < 2 && col < 2) || (row > 4 && col < 2) || (row < 2 && col > 4)
    if (corner) return true
    return ((i * 17 + row * 11 + col * 5) % 5) < 2
  })

  return (
    <div
      className="rounded-lg bg-white p-1.5 shadow-sm ring-1 ring-gray-200"
      style={{ width: size, height: size }}
    >
      <div className="grid h-full w-full grid-cols-7 gap-px">
        {cells.map((on, index) => (
          <div key={index} className={cn(on ? "bg-gray-900" : "bg-white")} />
        ))}
      </div>
    </div>
  )
}
