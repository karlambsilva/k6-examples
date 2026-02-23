import { expect } from 'https://jslib.k6.io/k6-testing/0.6.1/index.js';
import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 5,
  duration: "10s"
};

export default function () {
  const response = http.get("https://quickpizza.grafana.com/test.k6.io/");
  
  expect(response.status).toBe(200);
  sleep(1);
}