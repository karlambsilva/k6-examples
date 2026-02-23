import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 5,
  duration: "10s",
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<200'],
  },
};

export default function () {
  const response = http.get("https://quickpizza.grafana.com/test.k6.io/");
  sleep(1);
}