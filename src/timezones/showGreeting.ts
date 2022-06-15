import { getGreetingByDate } from "./getGreetingByDate";

export function showGreeting(): void {
  const date = new Date();

  const message = getGreetingByDate(date);

  console.log(message);
}

showGreeting();
