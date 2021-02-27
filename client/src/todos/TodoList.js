import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import {getTodosLoading, getCompleteTodos, getIncompleteTodos} from './selectors.js';
import {loadTodos, removeToDoRequest, markCompletedRequest} from './thunks'

const ListWrapper = styled.div`
max-width: 700px;
margin: auto;`;

const TodoList = ({completedTodos, incompleteTodos, onRemovedPressed, onMarkCompleted, isLoading,startLoadingTodos}) => {
    useEffect(()=> {
        startLoadingTodos();
    }, []);
    const loadingMessage = <div>Loading todos...</div>
    const content = (
        <ListWrapper>
            <NewTodoForm />
            <h3>Incomplete:</h3>
            {incompleteTodos.map( todo => 
            <TodoListItem todo={todo} 
                onRemovedPressed={onRemovedPressed}
                onMarkCompleted={onMarkCompleted}/>)}
            <h3>Completed:</h3>
            {completedTodos.map( todo => 
            <TodoListItem todo={todo} 
                onRemovedPressed={onRemovedPressed}
                onMarkCompleted={onMarkCompleted}/>)}
    </ListWrapper>
    )
    return isLoading ? loadingMessage : content;
}
const mapStateToProps = state => ({
    completedTodos: getCompleteTodos(state),
    incompleteTodos: getIncompleteTodos(state),
    isLoading: getTodosLoading(state),
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovedPressed: id=> dispatch(removeToDoRequest(id)),
    onMarkCompleted: id => dispatch(markCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);