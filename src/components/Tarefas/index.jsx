import React from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import PropTypes from 'prop-types';

import './Tarefas.css';

export default function Tarefas({tarefas, Edit, Delete}) {
  return (
    <ul className='tarefas'>
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>{tarefa}
          <div>
            <FaEdit className='edit' onClick={(e) => Edit(e, index)} />
            <FaWindowClose className='delete' onClick={(e) => Delete(e, index)} />
          </div>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  Edit: PropTypes.func.isRequired,
  Delete:PropTypes.func.isRequired,
}
