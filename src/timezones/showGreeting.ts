import { getGreetingByDateClass } from "./getGreetingByDateClass";
import { getGreetingByHour } from "./getGreetingByHour";

export function showGreeting(): void {
  const hour = new Date().getHours();
  console.log(getGreetingByHour(hour));

  console.log("----------");

  console.log(getGreetingByDateClass(new Date()));
}

showGreeting();
