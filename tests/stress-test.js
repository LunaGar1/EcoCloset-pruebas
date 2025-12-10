import http from "k6/http";
import { sleep } from "k6";

export let options = {
  stages: [
    { duration: "20s", target: 50 },
    { duration: "20s", target: 100 },
    { duration: "20s", target: 150 },
    { duration: "10s", target: 0 }
  ]
};

export default function () {
  http.get("https://ecocloset-pi.onrender.com/");
  sleep(1);
}
