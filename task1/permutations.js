o=new Map,s=process.argv.slice(2),g=s=>s.split("").sort().join()
s.forEach(w=>o.set(g(w),1+o.get(g(w))||1))
s.forEach(w=>g(w)==[...o].sort((a,b)=>b[1]-a[1])[0][0]&&console.log(w))
