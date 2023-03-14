 import  axios from "axios"
 export default(async (userid = 1) => {
          const {data: users} = await axios("https://jsonplaceholder.typicode.com/users/"+userid)
    
          const {data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/"+userid)

          console.log(users,post1)

         })()
