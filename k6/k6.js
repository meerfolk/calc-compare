import http from "k6/http";

export const options = {
  vus: 10,
  duration: "1m",
};

export default function () {
  http.get(`http://${__ENV.HOST}/points/calculate`);
}
