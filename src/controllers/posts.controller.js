exports.getAllPosts = (req,res)=>{

const posts=[
{id:1,title:"First Post"},
{id:2,title:"Second Post"}
];

res.status(200).json({

success:true,

data:posts

});

};

exports.getPostById=(req,res)=>{

const postId=req.params.postId;

res.status(200).json({

success:true,

data:{
id:postId
}

});

};
