import React from 'react';
import { router, usePage } from '@inertiajs/react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const generatePages = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 4) pages.push('...');
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 3) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  const pages = generatePages();

  return totalPages > 1 ? (
    <nav aria-label="Pagination">
      <ul className="pagination pagination-sm mb-0">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => onPageChange(currentPage - 1)}><i className='previous'></i></button>
        </li>

        {pages.map((page, idx) => (
          <li
            key={idx}
            className={`page-item ${page === currentPage ? 'active' : ''} ${page === '...' ? 'disabled' : ''}`}
          >
            {page === '...' ? (
              <span className="page-link">…</span>
            ) : (
              <button className="page-link" onClick={() => onPageChange(page)}>{page}</button>
            )}
          </li>
        ))}

        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => onPageChange(currentPage + 1)}><i className='next'></i></button>
        </li>
      </ul>
    </nav>
  ) : null;
};

const DataTable = ({
  columns,
  data,
  tableProps = {},
  currentPage,
  perPage,
  total,
  sortKey,
  sortOrder,
}) => {
  const { props } = usePage();
  const queryParams = props.query || {};
  const baseUrl = props.routeUrl || window.location.pathname;
  const totalPages = Math.ceil(total / perPage);

  const handleSort = (key) => {
    let order = 'asc';
    if (sortKey === key) {
      order = sortOrder === 'asc' ? 'desc' : 'asc';
    }

    router.get(baseUrl, {
      ...queryParams,
      page: 1,
      perPage,
      sort: key,
      order,
    }, {
      preserveScroll: true,
      preserveState: true,
    });
  };

  const handlePageChange = (page) => {
    router.get(baseUrl, {
      ...queryParams,
      page,
      perPage,
      sort: sortKey,
      order: sortOrder,
    }, {
      preserveScroll: true,
      preserveState: true,
    });
  };

  const handlePageSizeChange = (e) => {
    const newSize = Number(e.target.value);
    router.get(baseUrl, {
      ...queryParams,
      page: 1,
      perPage: newSize,
      sort: sortKey,
      order: sortOrder,
    }, {
      preserveScroll: true,
      preserveState: true,
    });
  };

  return (
    <div class="table-responsive">
      <table {...tableProps}>
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                onClick={() => col.sortable && handleSort(col.key)}
                style={{ cursor: col.sortable ? 'pointer' : 'default' }}
                {...col.thProps}
              >
                {col.label}
                {col.sortable && sortKey === col.key && (
                  <span> {sortOrder === 'asc' ? '▲' : '▼'}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIdx) => (
              <tr key={rowIdx}>
                {columns.map((col, colIdx) => (
                  <td key={colIdx} {...(col.tdProps || {})}>
                    {typeof row[col.key] === 'object' &&
                    row[col.key] !== null &&
                    'content' in row[col.key]
                      ? row[col.key].content
                      : row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center py-3">
                No records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Footer */}
      <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap gap-2">
        <div>
          Show{' '}
          <select
            className="form-select form-select-sm d-inline w-auto"
            value={perPage}
            onChange={handlePageSizeChange}
          >
            {[5, 10, 25, 50, 100].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>{' '}
          entries
        </div>

        <div>
          Showing {(currentPage - 1) * perPage + 1} to{' '}
          {Math.min(currentPage * perPage, total)} of {total} records
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default DataTable;
