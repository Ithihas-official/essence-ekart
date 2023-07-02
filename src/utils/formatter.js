export const formatCurrency = (price) => {
  const final_price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);
  return final_price;
};

export const getUniqueValues = (data, type) => {
  let collect = data.map((item) => item[type])
  if (type === 'colors') {
    collect = collect.flat();
    return ([...new Set(collect)]);
  }
  return ([
    'All', ...new Set(collect)
  ])
}
