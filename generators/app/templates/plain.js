import './<%= component %>.scss';
import React from 'react';

/**
 * Briefly describe <%= component %> here
 */
class <%= component %> extends React.Component {
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

export default <%= component %>;
