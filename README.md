### Services run with such parameters 

```
docker run --rm --cpus=0.2 -m 512m
```

### In collection we created 1000 documents

#### k6 java results
```
data_received..................: 8.6 kB 137 B/s
data_sent......................: 6.5 kB 103 B/s
http_req_blocked...............: avg=2.86ms  min=4µs   med=9µs   max=26.66ms  p(90)=13.42ms p(95)=20.96ms
http_req_connecting............: avg=2.83ms  min=0s    med=0s    max=26.65ms  p(90)=13.21ms p(95)=20.73ms
http_req_duration..............: avg=9.55s   min=5.79s med=8.72s max=27.18s   p(90)=11.99s  p(95)=13.05s
  { expected_response:true }...: avg=9.55s   min=5.79s med=8.72s max=27.18s   p(90)=11.99s  p(95)=13.05s
http_req_failed................: 0.00%  ✓ 0        ✗ 65
http_req_receiving.............: avg=10.53ms min=50µs  med=176µs max=337.92ms p(90)=1.78ms  p(95)=82.46ms
http_req_sending...............: avg=43.95µs min=9µs   med=39µs  max=242µs    p(90)=52.2µs  p(95)=86.19µs
http_req_tls_handshaking.......: avg=0s      min=0s    med=0s    max=0s       p(90)=0s      p(95)=0s
http_req_waiting...............: avg=9.54s   min=5.79s med=8.72s max=27.18s   p(90)=11.99s  p(95)=13.05s
http_reqs......................: 65     1.026285/s
iteration_duration.............: avg=9.56s   min=5.79s med=8.72s max=27.2s    p(90)=11.99s  p(95)=13.05s
iterations.....................: 65     1.026285/s
vus............................: 3      min=3      max=10
vus_max........................: 10     min=10     max=10
```
#### k6 nodejs results 
```
data_received..................: 4.0 kB 44 B/s
data_sent......................: 2.7 kB 30 B/s
http_req_blocked...............: avg=12.94ms  min=5µs   med=13.45ms max=26.16ms p(90)=23.61ms p(95)=25.27ms
http_req_connecting............: avg=9.5ms    min=0s    med=12.23ms max=26.11ms p(90)=23.6ms  p(95)=25.26ms
http_req_duration..............: avg=33.71s   min=5.96s med=32.64s  max=1m0s    p(90)=58.93s  p(95)=59.99s
  { expected_response:true }...: avg=30.62s   min=5.96s med=28.37s  max=58.67s  p(90)=49.12s  p(95)=55.15s
http_req_failed................: 10.52% ✓ 2        ✗ 17
http_req_receiving.............: avg=169.47µs min=0s    med=168µs   max=420µs   p(90)=226.2µs p(95)=282.29µs
http_req_sending...............: avg=2.82s    min=10µs  med=29µs    max=18.2s   p(90)=12.93s  p(95)=14.25s
http_req_tls_handshaking.......: avg=0s       min=0s    med=0s      max=0s      p(90)=0s      p(95)=0s
http_req_waiting...............: avg=30.89s   min=5.96s med=32.64s  max=46.18s  p(90)=45.73s  p(95)=45.97s
http_reqs......................: 19     0.211113/s
iteration_duration.............: avg=33.72s   min=5.97s med=32.66s  max=1m0s    p(90)=58.93s  p(95)=1m0s
iterations.....................: 19     0.211113/s
vus............................: 3      min=3      max=10
vus_max........................: 10     min=10     max=10
```
#### k6 bun results
```
data_received..................: 3.0 kB 33 B/s
data_sent......................: 2.1 kB 23 B/s
http_req_blocked...............: avg=8.33ms   min=7µs   med=6.62ms  max=24.59ms p(90)=21.54ms p(95)=23.38ms
http_req_connecting............: avg=8.32ms   min=0s    med=6.6ms   max=24.58ms p(90)=21.53ms p(95)=23.36ms
http_req_duration..............: avg=36.03s   min=5.81s med=41.04s  max=59.97s  p(90)=51.53s  p(95)=59.97s
  { expected_response:true }...: avg=33.04s   min=5.81s med=38.8s   max=47.92s  p(90)=44.92s  p(95)=47.88s
http_req_failed................: 11.11% ✓ 2        ✗ 16
http_req_receiving.............: avg=157.61µs min=0s    med=166.5µs max=271µs   p(90)=217.5µs p(95)=240.39µs
http_req_sending...............: avg=23.88µs  min=5µs   med=19.5µs  max=49µs    p(90)=47.3µs  p(95)=48.15µs
http_req_tls_handshaking.......: avg=0s       min=0s    med=0s      max=0s      p(90)=0s      p(95)=0s
http_req_waiting...............: avg=36.03s   min=5.81s med=41.04s  max=59.97s  p(90)=51.53s  p(95)=59.97s
http_reqs......................: 18     0.200002/s
iteration_duration.............: avg=36.04s   min=5.82s med=41.04s  max=1m0s    p(90)=51.54s  p(95)=1m0s
iterations.....................: 18     0.200002/s
vus............................: 3      min=3      max=10
vus_max........................: 10     min=10     max=10
```
