import './ToDoList.css'

function TodoItem(props) {
    const taskText=props.taskText;
    const remove=props.remove;
    return (
        <>
        <p className="task-item">{taskText}</p>
        <button className="remove-button" onClick={remove}>Remove</button>
        </>
    );
}
export default TodoItem;