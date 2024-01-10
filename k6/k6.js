import http from "k6/http";

export default function () {
  http.get(`http://${__ENV.HOST}/points/calculate`);
}
