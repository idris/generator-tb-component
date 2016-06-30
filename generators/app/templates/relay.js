import './<%= component %>.scss';
import React from 'react';
import Relay from 'react-relay';

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

export default Relay.createContainer(<%= component %>, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
      }
    `,
  },
});
