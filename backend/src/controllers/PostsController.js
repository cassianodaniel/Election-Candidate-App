const connection = require('../database/connection');

module.exports = {
    
    async create(request, response) {
        const { autor, imagem, descricao } = request.body;

        await connection('posts').insert({
            autor, 
            imagem, 
            descricao
        })

        return response.json({ autor });
    }, 

    async list(request, response) {
        const { autor } = request.body;

        const posts = await connection('posts').select('*').where('autor', autor);
    
        return response.json(posts);
    },

    async delete(request, response) {
        const { id } = request.body;

        await connection('posts').where('id', id).del();
    
        return response.json();
    },

};