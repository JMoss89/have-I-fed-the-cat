const { Cat } = require('../models');

const createCat = async (res, req) => {
    const { name, breed, lastFed } = req.body;

    try{
        const createdCat = await Cat.creat({
            name,
            breed,
            lastFed
        })

        return res.status(201).json(createdCat);
    }catch(e){
        console.error(e);
        return res.status(500).json({
            message: 'Oh no something went wrong'
        })
    }
};

const findCatByPk = async (res, req) => {
    const { catId } = req.params;

    try{
        const findCat = await Cat.findByPk(catId);

        return res.json(findCat)

    }catch(e){
        console.error(e);
        return res.status(500).json({
            message: 'Oh no something went wrong'
        })
    }
};

const findAllCats = async (res, req) => {

    try{
        const foundCats = await Cat.findAll();

        return res.json(foundCats)

    }catch(e){
        console.error(e);
        return res.status(500).json({
            message: 'Oh no something went wrong'
        })
    }
};

const updateLastFed = async (res, req) => {

    const { catId } = req.params;

    try{
        const updatedCat = await Cat.update({lastFed: new Date()}, { where: { id: catId }});

        return res.send();

    }catch(e){
        console.error(e);
        return res.status(500).json({
            message: 'Oh no something went wrong'
        })
    }
};

const deleteCat = async (res, req) => {

    const { catId } = req.params;

    try{
        const deletedCat = await Cat.destroy({ where: { catId } });

        return res.json({ catDestroyed: deleteCat});

    }catch(e){
        console.error(e);
        return res.status(500).json({
            message: 'Oh no something went wrong'
        })
    }
};

module.exports = {
    createCat,
    findCatByPk,
    findAllCats,
    updateLastFed,
    deleteCat
}