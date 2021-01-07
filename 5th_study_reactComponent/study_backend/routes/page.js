const express = require('express');
const db = require('../models');
const router = express.Router();

router.get('/contents', async (req, res, next) => {
    try {
        const contents = await db.Content.findAll({
            order: [['createdAt', 'DESC']], // DESC는 내림차순, ASC는 오름차순
        });
        res.json(contents);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

router.post('/content', async (req, res, next) => { 
    try {
        const newContent = await db.Content.create({
            title: req.body.title,
            content: req.body.content,
        })

        const fullContent = await db.Content.findOne({
            where: { id: newContent.id },
        });
        res.json(fullContent);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

router.delete('/content/:id', async (req, res, next) => { 
    try {
        const content = await db.Content.findOne({ where: { id: req.params.id } });
        if (!content) {
            return res.status(404).send('포스트가 존재하지 않습니다.');
        }
        
        await content.destroy();
        res.status(200).send(`${req.params.id}번 포스트를 삭제하였습니다.`);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

router.patch('/content/:id', async (req, res, next) => { 
    try {
        const content = await db.Content.findOne({ where: { id: req.params.id } });
        if (!content) {
            return res.status(404).send('포스트가 존재하지 않습니다.');
        }

        req.body.updatedAt = Date.now();
        await db.Content.update(
            req.body, 
            { where: { id: req.params.id }, returning: true})
            .then(function(result) {
                res.json(result[1][0]);
            }).catch(function(err) {
                //TODO: error handling
            }
        );
    } catch (e) {
        console.error(e);
        next(e);
    }
});

module.exports = router;