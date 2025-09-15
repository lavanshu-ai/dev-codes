function identity<T>(arr:T[]){
   if(arr.length===0) throw new Error("Array cannot be empty");
    return arr[0];
}

let a=identity<string>(["lavanshu","shivam"])
let b=identity<number>([112,7,2])
let c=identity<boolean>([false,false])
let d=a.toUpperCase();

console.log(a,b,c,d)
