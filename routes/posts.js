const express = require('express');
const router = express.Router();
const Post = require('../models/posts');

router.post('/', async(req, res, next) =>  {
  try {
      /* 請在此填寫答案 */
      // 取得來自 request body 的資料
      
      // 驗證是否有 content 欄位 -> 若有則使用 mongoose 語法新增資料 -> 回傳成功回應
      //                       -> 未填寫 content 欄位 -> 回傳失敗回應
      const data = req.body;
      if (data.content !==undefined ){ 
       
         const newPost = await Post.create({
                name:data.name,
                image:data.image,
                content:data.content,
                type:data.type,
                tags:data.tags
         });
         res.status(200).json({
          'status':'success',
          data:newPost
         })

      }else{
        res.status(404).json({
          'status':false,
           error:'貼文內容必填'
         })
      }


  
  } catch (error) {
    res.status(400).json({
        status: false,
        error: error.message
    });
  }
})


module.exports = router;
