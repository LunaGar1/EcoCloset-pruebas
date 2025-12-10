import http from "k6/http";
import { sleep } from "k6";

export let options = {
  stages: [
    { duration: "20s", target: 20 }, // subir a 20 usuarios
    { duration: "40s", target: 20 }, // mantener carga
    { duration: "10s", target: 0 }   // bajar carga
  ]
};

export default function () {
  http.get("https://ecocloset-pi.onrender.com/");
  sleep(1);
}