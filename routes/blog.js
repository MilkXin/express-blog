var express = require('express');
var router = express.Router();
const { getList, getDetail, newBlog, updateBlogData, delBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

router.get('/list', function(req, res, next) {
    const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        // const listData = getList(author, keyword)

        // return new SuccessModel(listData)

        const result = getList(author, keyword)
        return result.then(listData => {
            res.json(
                new SuccessModel(listData)
            )
        })
})

module.exports = router