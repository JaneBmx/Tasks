let o=new Map(),s=process.argv.slice(2),g=s=>s.split("").sort().join("")
s.forEach(w=>o.set(g(w),o.has(g(w))?o.get(g(w))+1:1))
let r=[...o.entries()].reduce((a,e)=>e[1]>a[1]?e:a,["",0])[0]
s.forEach(w=>g(w)==r&&console.log(w))