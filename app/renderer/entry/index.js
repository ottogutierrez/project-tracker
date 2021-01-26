import React, {useState} from 'react'

// local dependencies
import { getVersion } from 'common/util';

// import styles (for compilation)
import './styles.scss';

// export a react component
export default ( props ) => {
    
    return (
        <div className='hello'>
            <h1>Hello { props.name } World!</h1>
            <h3>Version: { getVersion() }</h3>
            
        </div>
    );
};