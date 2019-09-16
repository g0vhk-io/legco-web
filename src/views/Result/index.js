import React from 'react';
import { withRouter } from 'react-router';

import {
  Badge,
  Table,
} from 'reactstrap';

const result = [
  {
    id: '123',
    name: '陳方安生',
    avatar: 'assets/img/avatars/1.jpg',
    party: '新民黨',
    attendance: '50%',
    lastAction: 'agree',
  },
  {
    id: '1233',
    name: '葉劉淑儀',
    avatar: 'assets/img/avatars/1.jpg',
    party: '新民黨',
    attendance: '30%',
    lastAction: 'disagree',
  },
  {
    id: '1234',
    name: '田北辰',
    avatar: 'assets/img/avatars/1.jpg',
    party: '新民黨',
    attendance: '20%',
    lastAction: 'abstention',
  },
  {
    id: '1235',
    name: '田北辰',
    avatar: 'assets/img/avatars/1.jpg',
    party: '新民黨',
    attendance: '20%',
    lastAction: 'absent',
  }
];
const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

function Result({ history }) {
  return (
    <div className="animated fadeIn bg-white">

      <Table hover responsive className="table-outline mb-0 d-sm-table">
        <thead className="thead-light">
        <tr>
          <th className="text-center"><i className="icon-people"></i></th>
          <th>議員姓名</th>
          <th className="text-center">出席率</th>
          <th className="text-center">最近表決</th>
        </tr>
        </thead>
        <tbody>
          {result.map(r => (
            <tr className="pointer" onClick={() => history.push(`/members/${r.id}`)}>
              <td className="text-center">
                <div className="avatar">
                  <img src={r.avatar} className="img-avatar" alt={r.name}/>
                </div>
              </td>
              <td>
                <div className="py-0 h4">{r.name}</div>
                <div className="small mb-1">
                  <i className="flag-icon flag-icon-us h6 mb-0" title="us" id="us"></i>
                  <span className="h6 px-1">
                    {r.party}
                  </span>
                </div>
              </td>
              <td>
                <div className="text-center">
                  <strong>{r.attendance}</strong>
                </div>
              </td>
              <td className="text-center h4">
                <Badge color="danger">{r.lastAction}</Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default withRouter(Result);
