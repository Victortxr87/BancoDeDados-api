const {pool} = require('../config/db');

exports.getAllExperiencias = async()  => {

    const result = await pool.query ('SELECT * FROM experiencias');
    return result.rows;

}
exports.getExperienciasById = async (id) => {
const result = await pool.query ('SELECT * FROM experiencias WHERE id = $1', [id]);
return result.rows[0]; 
}

