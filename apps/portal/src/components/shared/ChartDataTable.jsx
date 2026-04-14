import { downloadCsv } from '../../utils/csv'

/**
 * Screen-reader-friendly tabular summary for chart data (WCAG supplement to canvas/SVG charts).
 */
export function ChartDataTable({
  caption,
  columns,
  rows,
  className = '',
  exportFilename,
}) {
  return (
    <div className={`mt-4 overflow-x-auto ${className}`}>
      {exportFilename ? (
        <div className="mb-2 flex justify-end print:hidden">
          <button
            type="button"
            onClick={() => downloadCsv(exportFilename, columns, rows)}
            className="text-xs font-semibold text-cc-navy underline decoration-cc-yellow decoration-2 underline-offset-2 hover:text-cc-navy/80"
          >
            Export CSV
          </button>
        </div>
      ) : null}
      <table className="w-full min-w-[280px] border-collapse text-left text-sm text-cc-dark-text">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b border-cc-mid-gray/25">
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className="px-2 py-2 font-semibold text-cc-navy"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={row.id ?? ri}
              className="border-b border-cc-mid-gray/10 odd:bg-cc-light-gray/40"
            >
              {columns.map((col) => (
                <td key={col.key} className="px-2 py-2">
                  {row[col.key] ?? '—'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
