import http from "k6/http";
import { sleep, check } from "k6";

export const options = {
  vus: 5,
  duration: "10s",
};

export default function () {
  const response = http.get("https://quickpizza.grafana.com/test.k6.io/");
  
  check(response, {
    'is status 200': (res) => res.status === 200,
    'response body contains text': (res) => res.body.includes('QuickPizza page'),
  });  
  
  sleep(1);
}