import React from 'react';

export default function AppHeader({ todos }) {
    let all = todos.length;
    let done = todos.filter(todo => todo.done).length;
    let more = all - done;
    
    return (
        <header className="card-header d-flex">
            <h1 className="card-title m-0">To-do</h1>

            <ul className="mb-0 ml-auto list-group list-group-horizontal text-right">
                <li className="list-group-item d-flex align-items-center">
                    <strong className="mr-2">All:</strong> {all}
                </li>
                <li className="list-group-item d-flex align-items-center">
                    <strong className="mr-2">Done:</strong> {done}
                </li>
                <li className="list-group-item d-flex align-items-center">
                    <strong className="mr-2">More:</strong> {more}
                </li>
            </ul>
        </header>
    );
}