console.log("hola TypeScript");

type User = {
    id:number;
    name:string;
    email:string;
}

const user:User = {
    id:1,
    name: 'Luis Angel',
    email: 'email@gmail.com'
}

function getUser(id:number): User | undefined {

    if(id === user.id){
        return user;
    }
    return undefined;
}
console.log(getUser(2));