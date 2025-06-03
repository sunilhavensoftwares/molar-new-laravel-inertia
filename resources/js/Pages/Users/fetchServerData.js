const fetchServerData = async ({ page, pageSize, sortKey, sortOrder, searchQuery, filters }) => {
  const params = new URLSearchParams({
    page,
    pageSize,
    sortKey,
    sortOrder,
    search: searchQuery,
    ...filters,
  });

  const res = await fetch(`/api/users?${params}`);
  const json = await res.json();

  return {
    data: json.results,
    total: json.total,
  };
};
