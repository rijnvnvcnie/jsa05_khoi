const fetchData = async () => {
    try{
        const response = fetch("https://jsonplaceholder.typicode.com/todos/1")
        const data = await response.json();

        let userId = document.createElement('h2');
        let title = document.createElement('h2');
        let completedTask = document.createElement('h2');

        userId.textContent = "User ID" + data.userId;
        title.textContent =  "Task title" + data.title;
        completedTask.textContent = "completed" + data.completed;
        
        const dataElement = document.getElementById('data');
        dataElement.appendChild(userId);
        dataElement.appendChild(title);
        dataElement.appendChild(completedTask);
    }
    catch(error){
        console.error('error',error);
    }
};
fetchData();

