/**
 * Generic comparison table. Used for industry × dimension, persona × dimension,
 * and competitor × feature matrices. Columns can be filtered down to a single
 * column (toggle mode) or up to three columns (compare mode).
 *
 * Props:
 *   rows:    [{ key, label, help? }]
 *   columns: [{ key, label, accent?, subLabel? }]
 *   cells:   { [rowKey]: { [colKey]: ReactNode | string | { value, badge? } } }
 *   activeColumns: string[] (optional - filter columns)
 *   renderCell: optional custom renderer
 */
export function ComparisonTable({
  rows,
  columns,
  cells,
  activeColumns,
  caption,
  className = '',
  stickyFirstColumn = true,
}) {
  const visibleCols = activeColumns
    ? columns.filter((c) => activeColumns.includes(c.key))
    : columns

  return (
    <div className={`overflow-x-auto ${className}`}>
      {caption ? (
        <div className="mb-2 text-[11px] uppercase tracking-wider text-cc-mid-gray">
          {caption}
        </div>
      ) : null}
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-cc-border bg-cc-light-gray/60">
            <th
              className={`${
                stickyFirstColumn ? 'sticky left-0 z-10 bg-cc-light-gray/95' : ''
              } min-w-[160px] px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-cc-mid-gray`}
            >
              &nbsp;
            </th>
            {visibleCols.map((col) => (
              <th
                key={col.key}
                className="min-w-[180px] border-l border-cc-border px-3 py-2 align-bottom text-[12px] font-bold text-cc-navy"
                style={col.accent ? { borderTop: `3px solid ${col.accent}` } : undefined}
              >
                <div>{col.label}</div>
                {col.subLabel ? (
                  <div className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-cc-mid-gray">
                    {col.subLabel}
                  </div>
                ) : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={row.key}
              className={`border-b border-cc-border ${idx % 2 === 0 ? 'bg-white' : 'bg-cc-light-gray/40'}`}
            >
              <th
                scope="row"
                className={`${
                  stickyFirstColumn
                    ? 'sticky left-0 z-10 ' +
                      (idx % 2 === 0 ? 'bg-white' : 'bg-cc-light-gray/95')
                    : ''
                } px-3 py-2 align-top text-[12px] font-semibold text-cc-navy`}
              >
                <div>{row.label}</div>
                {row.help ? (
                  <div className="mt-0.5 text-[10px] font-normal text-cc-mid-gray">
                    {row.help}
                  </div>
                ) : null}
              </th>
              {visibleCols.map((col) => {
                const raw = cells?.[row.key]?.[col.key]
                return (
                  <td
                    key={col.key}
                    className="border-l border-cc-border px-3 py-2 align-top text-[12.5px] leading-snug text-cc-dark-text"
                  >
                    <CellRenderer value={raw} />
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function CellRenderer({ value }) {
  if (value == null || value === '') {
    return <span className="text-cc-mid-gray/70">—</span>
  }
  if (typeof value === 'string' || typeof value === 'number') {
    return <span>{value}</span>
  }
  if (Array.isArray(value)) {
    return (
      <ul className="list-disc space-y-0.5 pl-3">
        {value.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    )
  }
  if (value && typeof value === 'object' && 'value' in value) {
    return (
      <div className="flex flex-col gap-1">
        <span>{value.value}</span>
        {value.badge ? (
          <span
            className={`inline-block w-fit rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
              value.badge === 'yes'
                ? 'bg-cc-green/10 text-cc-green'
                : value.badge === 'no'
                  ? 'bg-cc-red/10 text-cc-red'
                  : value.badge === 'partial'
                    ? 'bg-cc-yellow-soft text-cc-amber'
                    : value.badge === 'verify'
                      ? 'bg-cc-mid-gray/10 text-cc-mid-gray'
                      : 'bg-cc-navy/5 text-cc-navy'
            }`}
          >
            {value.badge}
          </span>
        ) : null}
      </div>
    )
  }
  return value
}
