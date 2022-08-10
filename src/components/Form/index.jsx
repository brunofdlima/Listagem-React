import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

import './Form.css'

export default function Form({Submit, Change, novaTarefa}) {
  return (
    <form action="#" className='form' onSubmit={Submit}>
      <input
        type="text"
        onChange={Change}
        value={novaTarefa} />
      <button type='submit'><FaPlus /></button>
    </form>
  );
}

Form.propTypes = {
  Change: PropTypes.func.isRequired,
  Submit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
}
