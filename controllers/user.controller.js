const {response, request } = require('express');

const indexUsers = (req = request, res = response)=>{
    const params = req.query;
    res.json({
        msg: 'Get - controller',
        params
    });
}

const postUsers = (req, res = response)=>{
    const {nombre, edad} = req.body;
    res.json({
        msg: 'POST  - controller',
        nombre, 
        edad
    });
}
const updateUsers = (req, res = response)=>{
    const id = req.params.id;
    res.json({
        msg: 'PUT  - controller',
        id 
    });
}

module.exports = {
    indexUsers,
    postUsers,
    updateUsers
}