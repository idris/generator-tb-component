import './<%= component %>.scss';
import React from 'react';

/**
 * Briefly describe <%= component %> here
 */
class Card extends React.Component {
  static propTypes = {
  };

  static defaultProps = {
  };

  render() {
    return (
      <div className="<%= component %>">
        ...
      </div>
    );
  }
}

export default Card;
