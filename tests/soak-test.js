import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 20,            // usuarios constantes
  duration: "5m"      // duración 5 minutos
};

export default function () {
  http.get("https://ecocloset-pi.onrender.com/");
  sleep(1);
}
