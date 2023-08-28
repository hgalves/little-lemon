import { fetchAPI, submitAPI } from "./mockAPI";

export function updateTimes(times, date) {
  const data = fetchAPI(new Date(date));
  return data.length > 0 ? data : times;
}

export function initializeTimes() {
  return fetchAPI(new Date());
}
