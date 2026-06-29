interface SectionHeaderProps {
  overline: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeader({
  overline,
  title,
  description,
  align = 'left',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : 'text-left'
  const descClass = align === 'center' ? 'mx-auto' : ''

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <p className="overline">{overline}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {description && (
        <p className={`text-body-muted mt-4 max-w-xl ${descClass}`}>{description}</p>
      )}
    </div>
  )
}
