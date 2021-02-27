import React from 'react';
import styled from 'styled-components';

const TodoItemContainer = styled.div`
background: #fff;
border-radius: 8px;
margin-top: 8px;
padding: 16px;
position: relative;
box-shadow: 0 4px 8px grey;
`;

const ButtonContainer = styled.div`
background: #fff;
border-radius: 8px;
margin-top: 8px;
padding: 16px;
position: relative;
box-shadow: 0 4px 8px grey;
`;

const CompletedButton = styled.button`
font-size: 16px;
padding: 8px;
border: none;
border-radius: 8px;
outline: none;
cursor: pointer;
display: inline-block;
background-color: #22ee22;
`;
const RemoveButton = styled.button`
font-size: 16px;
padding: 8px;
border: none;
border-radius: 8px;
outline: none;
cursor: pointer;
display: inline-block;
background-color: #ee2222;
margin-left: 8px;
`;


const TodoListItem = ({todo, onRemovedPressed, onMarkCompleted}) => {
    return (
        <TodoItemContainer>
        <h3>{todo.text}</h3>
        <ButtonContainer>
            {todo.isCompleted ? null:
                <CompletedButton
                    onClick={()=> onMarkCompleted(todo.id)}>
                    Mark As completed</CompletedButton>}
                <RemoveButton 
                    className="remove-button"
                    onClick={()=> onRemovedPressed(todo.id)}>Remove</RemoveButton>
        </ButtonContainer>
        </TodoItemContainer>
    )

}

export default TodoListItem;