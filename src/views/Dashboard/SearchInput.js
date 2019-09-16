import React, { useState } from 'react';
import { withRouter } from 'react-router';
import {
  InputGroup,
  Input,
  InputGroupAddon,
  Table,
} from 'reactstrap';
import styles from './SearchInput.module.scss';

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

function SearchInput({ history }) {
  const [ keyword, setKeyword ] = useState('');
  return (
    <>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <span className="input-group-text"><i class="fas fa-search" /></span>
        </InputGroupAddon>
        <Input placeholder="議員名稱" size="lg" value={keyword} onChange={e => setKeyword(e.target.value)}/>
      </InputGroup>
      <InputGroup>
        <div className={`${styles.searchResult}`}>
          <Table hover responsive className="table-outline mb-0 d-sm-table">
            <tbody>
              {result.map(r => (
                <tr key={r.id} onClick={() => history.push(`/members/${r.id}`)} className="pointer">
                  <td className="text-center">
                    <div className="avatar">
                      <img src={r.avatar} className="img-avatar" alt={r.name} />
                    </div>
                  </td>
                  <td>
                    <div>{r.name}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </InputGroup>
    </>
  );
}

export default withRouter(SearchInput);
