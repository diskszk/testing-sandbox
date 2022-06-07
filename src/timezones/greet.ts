export function simpleGreet(): string {
  const hour = new Date().getHours();
  if (4 <= hour && hour < 12) {
    return "Good morning";
  }
  if (12 <= hour && hour < 18) {
    return "Good afternoon";
  }
  if (18 <= hour && hour < 21) {
    return "Good evening";
  } else {
    return "Good night";
  }
}

console.log(simpleGreet());
