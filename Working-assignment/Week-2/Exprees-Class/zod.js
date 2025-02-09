const zod = require("zod");

function validateInput(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })
    const responce = schema.safeParse(obj);
    console.log(responce);
    
}

validateInput({
    email:"akshat@gmail.com",
    password:"123456789",
})