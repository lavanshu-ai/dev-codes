
interface Us{
  name:string,
  age:number,
  email:string,
  gender?:string
}
function isLegal(user:Us
):boolean{
     if(user.age>18){
          return true
     }
     return false
     
}
const value=isLegal({
     name:'lv',
     age:21,
     email:'lv@gmail.com',
     gender:'male'

})
console.log('is legal: '+value)
 
interface person {
     name:string;
     age:number; 
     greet(phrase:string):(void);
}

class Employee implements person{
     name :string;
     age :number;
     constructor(n:string,a:number){
          this.name=n;
          this.age=a;
     }
   greet(phrase: string): (void) {
        console.log(phrase+' '+this.name)
   }
}

const nanni=new Employee('shivya',2)
nanni.greet('bhaaap');
console.log(nanni)

type human={
     name:string;
     class:number;
}
type animal={
     name:string;
     class:number;
}
type living=human & animal

const lion:living={
     name:'sher',
     class:2
}
console.log(lion)

