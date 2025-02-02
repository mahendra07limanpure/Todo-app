const zod = require("zod");

const createTodo = zod.object({
    tittle : zod.string(),
    discription : zod.string()
});

const updateTodo = zod.object({
    id : zod.string()
})

module.exports = {
    createTodo : createTodo ,
    updateTodo : updateTodo 
}
