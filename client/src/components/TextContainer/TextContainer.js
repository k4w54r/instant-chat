import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className='textContainer'>
    <div>
      <h1 className='heading'>
        <span role='img' aria-label='emoji'>
          🖄
        </span>
        Instant Chat
      </h1>
      {users ? (
        <div>
          <h1>Online:</h1>
          <div className='activeContainer'>
            <h2>
              {users.map(({ name }) => (
                <div key={name} className='activeItem'>
                  {name}
                  <img alt='Online Icon' src={onlineIcon} />
                </div>
              ))}
            </h2>
          </div>
        </div>
      ) : null}
    </div>
  </div>
);

export default TextContainer;
