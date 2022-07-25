import { getGreetingByHour } from "./getGreetingByHour";

describe("getGreetingByHour.ts", () => {
  test("4時台の場合`Good morning`を返す", () => {
    const greeting = getGreetingByHour(4);
    expect(greeting).toBe("Good morning");
  });
  test("15時台の場合`Good afternoon`を返す", () => {
    const greeting = getGreetingByHour(15);
    expect(greeting).toBe("Good afternoon");
  });
  test("20時台の場合`Good evening`を返す", () => {
    const greeting = getGreetingByHour(20);
    expect(greeting).toBe("Good evening");
  });
  test("23時台の場合`Good night`を返す", () => {
    const greeting = getGreetingByHour(23);
    expect(greeting).toBe("Good night");
  });
  test("3時台の場合`Good night`を返す", () => {
    const greeting = getGreetingByHour(3);
    expect(greeting).toBe("Good night");
  });
});
