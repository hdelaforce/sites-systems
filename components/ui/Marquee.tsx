export function Marquee({
  items,
  separator = '·',
}: {
  items: string[]
  separator?: string
}) {
  const text = items.join(` ${separator} `)
  const doubled = `${text} ${separator} ${text} ${separator} `

  return (
    <div className="overflow-hidden" aria-hidden="true">
      <div className="flex animate-[marquee_18s_linear_infinite] whitespace-nowrap">
        <span className="font-mono text-[10px] tracking-[4px] uppercase text-[rgba(0,0,0,0.55)]">
          {doubled}
        </span>
        <span
          className="font-mono text-[10px] tracking-[4px] uppercase text-[rgba(0,0,0,0.55)]"
          aria-hidden="true"
        >
          {doubled}
        </span>
      </div>
    </div>
  )
}
