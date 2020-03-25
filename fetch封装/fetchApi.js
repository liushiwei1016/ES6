// import http from "./fetch_fengzhaung"//引入方式 这里用的是ES6的方法，需要babel配合webpack打包
//普通引入使用src引入之后  const http = new Ajax();即可
const http = new Easyhttp;
// get请求数据
http.get('http://jsonplaceholder.typicode.com/users')
  .then((data) => {
    console.log(data)
  })
  .catch(err => console.log(err))


// post传输数据
const data = {
  name: 'candy',
  username: 'candy',
  email: 'htmlcs@163.com'
};
http.post('http://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(err => console.log(err))


// update user ,修改后会发现修改后ID为2的数据会变成上页面定义的data
http.put('http://jsonplaceholder.typicode.com/users/2', data)
  .then(data => console.log(data))
  .catch(err => console.log(err))


//delete user 删除下标为2里的数据
http.delete('http://jsonplaceholder.typicode.com/users/2', data)
  .then(data => console.log(data))
  .catch(err => console.log(err))
