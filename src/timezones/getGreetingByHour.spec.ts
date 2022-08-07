import { getGreetingByHour } from "./getGreetingByHour";

describe("getMessageByHour.ts", () => {
  test("4時以降12時までの場合`Good morning`を返す", () => {
    expect(getGreetingByHour(4)).toBe("Good morning");
    expect(getGreetingByHour(11)).toBe("Good morning");
  });
  test("12時以降18時までの場合`Good afternoon`を返す", () => {
    expect(getGreetingByHour(12)).toBe("Good afternoon");
    expect(getGreetingByHour(17)).toBe("Good afternoon");
  });
  test("18時以降21時までの場合`Good evening`を返す", () => {
    expect(getGreetingByHour(18)).toBe("Good evening");
    expect(getGreetingByHour(20)).toBe("Good evening");
  });
  test("21時以降24時までの場合`Good night`を返す", () => {
    expect(getGreetingByHour(21)).toBe("Good night");
    expect(getGreetingByHour(23)).toBe("Good night");
  });
  test("0時以降4時までの場合`Good night`を返す", () => {
    expect(getGreetingByHour(0)).toBe("Good night");
    expect(getGreetingByHour(3)).toBe("Good night");
  });
});
