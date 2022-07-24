import axios from "axios";
import http from './http-common';
class PostService
{

    getPosts()
    {
        return http.get("/posts");
    }
    getPostsByUserId(userId)
    {
        return http.get("/user" + '/' + `${userId}`+ '/'+ "posts"); 
    }
    getPostById(postId)
   {
    return http.get(`/posts/${postId}`);
   }

   updatePostd(post , postId)
 {
    return http.put("/posts" + '/' + `${postId}`,post);
 }
 deletePost(postId)
 {
    return http.delete("/posts" + '/' + `${postId}`);
 }
 searchPost(keyword)
 {
    return http.get("/posts"+ '/'+ "search" + '/' + `${keyword}`);
 }
 postComment(postId)
 {
     return http.post("/post" + '/' + `${postId}`+ '/' + "comments");
 }
 postsbyCategory(categoryId)
 {
     return http.get("/category" + '/' + `${categoryId}`+ '/' + "posts");
 }

}
export default new PostService();