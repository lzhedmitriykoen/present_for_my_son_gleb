const baseUrl = 'https://jsonplaceholder.typicode.com';
const users = new Users();
const controller = new Controller(users);

(async ()=>{
    const response = await fetch(`${baseUrl}/users`);
    const json = await response.json();
    json.then(data => data.forEach(item =>controller.createUser(item)));
})();