let arr=[1,2,-3,-4,5,6,8];
for(let i=0;i<arr.length;i++){
    if(arr[i]<0){
        continue;
    }
    console.log(arr[i]);
}