const { PerformanceObserver, performance } = require('perf_hooks');

const nemo=["nemo"];

const large=new Array(100000).fill("nemo");

function findNemo(array){
  for(let i=0;i<array.length;i++){
    if(array[i]==="nemo"){
      console.log("Found Nemo!!");
    }
  }
}

findNemo(large);