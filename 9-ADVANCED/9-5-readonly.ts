{
    type ToDo = {
        title: string;
        description: string;
    };

    function dispaly(todo: Readonly<ToDo>) {
        // todo.title = 'jaja';
        // readonly로 해놨기 때문에 오류나지요~
    }
}