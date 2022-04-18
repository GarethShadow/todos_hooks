import React, {useContext} from 'react'
import {Context} from '../../context'

function TodoItem({title, id, completed}) {
    const {dispatch} = useContext(Context)

    const cls = ['todo']

    if (completed) {
        cls.push('completed')
    }

    return (
        <li className={cls.join(' ')}>
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => dispatch({
                        type: 'toggle',
                        payload: id
                    })}
                />
                <span>{title}</span>

                <p
                    onClick={() => dispatch({
                        type: 'remove',
                        payload: id
                    })}
                >
                    delete
                </p>
            </label>
        </li>
    )
}

export default TodoItem;