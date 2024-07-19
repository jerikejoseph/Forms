/*a=53
if(a % 2 == 0)
    {
        console.log("is even");
    }
    else
    {
      console.log("is odd");
    }*/
  let a=[
    {name:'jerike',age:21},
    {name:'sarath',age:22},
    {name:'aljo',age:21},
    {name:'yadhav',age:21},
]
k=JSON.stringify(a);
console.log(k);
js=JSON.parse(k);
console.log(js);
for(i=0;i<a.length;i++)
  {
    console.log(a[i].name);
  }