import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import getMember from 'api/member';
import {
  Badge,
} from 'reactstrap';
import classnames from 'classnames';
import styles from './index.module.scss';

function Member({ history, match }) {
  const { id } = match.params;
  const [ member, setMember ] = useState({});
  
  useEffect(() => {
    getMember(id).then(setMember);
  }, [id]);
  
  return (
    <div className={classnames('animated fadeIn bg-white row', styles.info)}>
      Votes
    </div>
  );
}

export default withRouter(Member);
