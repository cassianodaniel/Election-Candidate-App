const connection = require('../database/connection');

module.exports = {
    
    async create(request, response) {
        const { id, email, apoiado } = request.body;

        await connection('apoiadores').insert({
            id,
            email,
            apoiado,
        })

        return response.json();
    }, 

    async list(request, response) {
        const apoiadores = await connection('apoiadores').select('*');
    
        return response.json(apoiadores);
    },

    async delete(request, response) {
        const { id } = request.body;

        await connection('apoiadores').where('id', id).del();
    
        return response.json();
    },

    async count(request, response) {
        
        const { apoiado } = request.body;

        const apoiadores = await connection('apoiadores').select('*').where('apoiado', apoiado);
    
        return response.json(apoiadores.length);
    },

};