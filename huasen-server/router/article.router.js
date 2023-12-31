/*
 * @Autor: huasenjio
 * @Date: 2021-08-21 21:07:58
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-10-26 01:12:47
 * @Description:
 */
const express = require('express');
const router = express.Router();

const { add, findAllByPage, findAllByList, remove, findById, update, findByCode } = require('../controller/article.controller.js');

const { handleJWT, handleUselessParams } = require('../middleware/common.middleware.js');
const { checkManagePower } = require('../middleware/manage.middleware.js');

router.post('/add', handleJWT, checkManagePower, handleUselessParams, add);
router.get('/findByPage', handleJWT, checkManagePower, findAllByPage);
router.get('/findByList', handleJWT, checkManagePower, findAllByList);
router.get('/remove', handleJWT, checkManagePower, remove);
router.post('/update', handleJWT, checkManagePower, update);

router.get('/findById', handleJWT, findById);

// 用户调用
router.post('/findByCode', handleJWT, findByCode);

module.exports = router;
