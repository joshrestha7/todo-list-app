import {createToDo, markCompleted, removeTodo, loadTodosInProgress, loadTodosSuccess, loadTodosFailure} from './actions'

export const displayAlert = text => () => {
    console.log(text)
}

export const loadTodos = () => async (dispatch) => {
    try {
        dispatch(loadTodosInProgress());
        const response = await fetch('http://localhost:8080/todos');
        const todos = await response.json();
    
        dispatch(loadTodosSuccess(todos));
    } catch (e) {
        dispatch(loadTodosFailure());
        dispatch(displayAlert(e));
    }
}

export const addToDoRequest = text => async dispatch => {
    try {
        const body = JSON.stringify({text});

        const response = await fetch('http://localhost:8080/todos', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body,
        })
        const todo = await response.json();
        dispatch(createToDo(todo));
    } catch (e) {
        dispatch(displayAlert(e))
    }

}

export const removeToDoRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}`,{
            method: 'delete'
        })
        const removedTodo = await response.json();
        dispatch(removeTodo(removedTodo));
    } catch (e) {
        dispatch(displayAlert(e))
    }

}

export const markCompletedRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}/completed`,{
            method: 'post'
        })
        const markedTodo = await response.json();
        dispatch(markCompleted(markedTodo));
    } catch (e) {
        dispatch(displayAlert(e))
    }

}
