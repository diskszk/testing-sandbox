export function getGreetingByHour(hour: number): string {
  if (4 <= hour && hour < 12) {
    return "Good morning";
  }
  if (12 <= hour && hour < 18) {
    return "Good afternoon";
  }
  if (18 <= hour && hour < 21) {
    return "Good evening";
  }
  if ((21 <= hour && hour < 24) || (0 <= hour && hour < 4)) {
    return "Good night";
  }

  throw new Error("Date is not defined");
}
