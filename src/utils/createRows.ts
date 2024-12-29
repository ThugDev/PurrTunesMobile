export const createRows = <T>(data: T[], itemsPerRow: number): T[][] => {
  const rows: T[][] = [];
  for (let i = 0; i < data.length; i += itemsPerRow) {
    rows.push(data.slice(i, i + itemsPerRow));
  }
  return rows;
};
