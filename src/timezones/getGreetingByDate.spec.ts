import { getGreetingByDate } from "./getGreetingByDate";

describe("getGreetingByDate.ts", () => {
  test("4時台の場合`Good morning`を返す", () => {
    const date = new Date("2022-06-07T04:00:00");

    const greeting = getGreetingByDate(date);
    expect(greeting).toBe(`Good morning`);
  });
  test("15時台の場合`Good afternoon`を返す", () => {
    const date = new Date("2000-01-01T15:10:02");

    const greeting = getGreetingByDate(date);
    expect(greeting).toBe(`Good afternoon`);
  });
  test("20時台の場合`Good evening`を返す", () => {
    const date = new Date("2020-12-17T20:23:41");

    const greeting = getGreetingByDate(date);
    expect(greeting).toBe(`Good evening`);
  });
  test("23時台の場合`Good night`を返す", () => {
    const date = new Date("2020-12-17T23:00:00");
    const greeting = getGreetingByDate(date);

    expect(greeting).toBe(`Good night`);
  });
  test("3時台の場合`Good night`を返す", () => {
    const date = new Date("2030-02-10T03:59:59");
    const greeting = getGreetingByDate(date);

    expect(greeting).toBe(`Good night`);
  });
});
