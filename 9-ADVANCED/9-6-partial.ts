{
    type ToDo = {
        title: string;
        description: string;
        label: string;
        priority: 'high' | 'low' 
    };

    function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>){
        return {...todo, ...fieldsToUpdate}
    }
    const todo: ToDo = {
        title: 'learn TypeScript',
        description: 'study hard',
        label: 'study',
        priority: 'high'
    }
    const update = updateTodo(todo, {priority: 'low'})
    console.log(update);
}