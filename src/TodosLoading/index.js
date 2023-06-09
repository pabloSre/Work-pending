import React from 'react';
import './TodosLoading.css'
import { GiAbstract076 } from 'react-icons/gi'

function TodosLoading() {
  return (
    <div className='Loading'>
    <p className='LoadingAnim'> 
      <GiAbstract076 className='GiAbs'/>
    </p>
    </div>
  );
}

export { TodosLoading };