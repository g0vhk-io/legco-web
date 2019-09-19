import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import getMember from 'api/member';
import {
  Badge,
  Card,
  CardBody,
} from 'reactstrap';
import classnames from 'classnames';
import styles from './Votes.module.scss';

const data = [
  {
    id: '12312',
    passed: true,
    name: '逃犯條例修訂案',
    date: '23/04/2019',
    action: 'agree',
    avatar: 'assets/img/avatars/1.jpg',
  },
  {
    id: '12312',
    passed: false,
    name: '逃犯條例修訂案',
    date: '23/04/2019',
    action: false, //TODO
    avatar: 'assets/img/avatars/1.jpg',
  }
]


function Member({ history, match }) {
  const { id } = match.params;
  const [ member, setMember ] = useState({});
  
  useEffect(() => {
    getMember(id).then(setMember);
  }, [id]);
  
  return (
    <div className={classnames('animated fadeIn bg-white', styles.container)}>
      {data.map(d => (
        <Card className={styles.card}>
          <CardBody className={classnames(styles.vote, { [styles.passed]: d.passed })}>
            <span>
              <h4>
                {d.name}
              </h4>
              <h5>
                <Badge color={d.passed ? 'secondary' : 'danger'} className="mr-2">
                  <i className={classnames('far mr-1', {'fa-check-circle': d.passed, 'fa-times-circle': !d.passed})} />
                  {d.passed ? '已通過' : '已否決'}
                </Badge>
              </h5>
            </span>
            <span className="float-right text-right">
              <small>{d.date}</small>
              <div className={styles.memberVote}>
                <img src="assets/img/avatars/1.jpg" className={styles.img}/>
                <h3 className={classnames(styles.badge, { [styles.passed]: d.action })}>
                  <Badge color="primary">
                    <span>
                      <i className={classnames('far mr-1', {'fa-thumbs-up': d.action, 'fa-thumbs-down': !d.action})} />
                      {d.action ? '贊成' : '反對'}
                    </span>
                  </Badge>
                </h3>
              </div>
            </span>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default withRouter(Member);
