import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import getMember from 'api/member';
import {
  Badge,
} from 'reactstrap';
import classnames from 'classnames';
import Tabs from './Tabs';
import styles from './index.module.scss';

function Member({ history, match }) {
  const { id } = match.params;
  const [ member, setMember ] = useState({});
  
  useEffect(() => {
    getMember(id).then(setMember);
  }, [id]);
  
  return (
    <>
      <div className={classnames('animated fadeIn bg-white row', styles.info)}>
        <div className={classnames(styles.avatar, 'col-md-auto')} style={{ 'background-image': `url(${member.avatar})`}}>
          <div className={styles.party}>{member.party}</div>
        </div>
        <div className={classnames('col', styles.topLine)}>
          <div className={classnames('row justify-content-between', styles.topLineFlex)}>
            <div>
              <h3>{member.name}</h3>
              {member.tags ?
                <div className={styles.tags}>
                  分類:
                  {member.tags.map(t => <h5><Badge color="primary">{t}</Badge></h5>)}
                </div>
              : null}  
            </div>
            <div>
              <div className={styles.statNumber}>
                <span className={styles.number}>56.5%</span>
                <span className={styles.label}>出席率</span>
              </div>
              <div className={styles.statNumber}>
                <span className={styles.number}>56.5%</span>
                <span className={styles.label}>投票率</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tabs id={id} />
    </>
  );
}

export default withRouter(Member);
