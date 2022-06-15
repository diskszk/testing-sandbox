export function simpleGreet(): void {
  const hour = new Date().getHours();
  if (4 <= hour && hour < 12) {
    console.log("Good morning");
  }
  if (12 <= hour && hour < 18) {
    console.log("Good afternoon");
  }
  if (18 <= hour && hour < 21) {
    console.log("Good evening");
  } else {
    console.log("Good night");
  }
}

simpleGreet();
