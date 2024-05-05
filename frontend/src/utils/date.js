export const currentDate = new Date()
  .toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
  .replaceAll("/", "-");
