import React from 'react';
import { string } from 'prop-types';

export function Hello({name = ''}) {
  // return React.createElement('div', { className: 'Hello' }, 'Hello React !');
  return (
    <div className="Hello">
      Hello {name}
    </div>
  );
}

Hello.propTypes = {
  name: string,
};
