import { initializeTimes, updateTimes } from "../utils/utils";

test("utils functions", () => {
  let times = initializeTimes();
  expect(times.length).toBeGreaterThan(0);

  times = updateTimes(times, new Date());
  expect(times.length).toBeGreaterThan(0);
});
