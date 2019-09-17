import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import onClickOutside from "react-onclickoutside";
import classnames from 'classnames';
import searchResult from 'api/searchResult';

import {
  InputGroup,
  Input,
  InputGroupAddon,
  Table,
} from 'reactstrap';
import styles from './SearchInput.module.scss';


function SearchInput({ history }) {
  const [ keyword, setKeyword ] = useState('');
  const [ showResult, setShowResult ] = useState(false);
  const [ result, setResult ] = useState([]);

  SearchInput.handleClickOutside = () => setShowResult(false);
  
  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
    setShowResult(true);
  }
  const onFocus = () => setShowResult(true);
  
  useEffect(() => {
    if (keyword.length < 3) {
      setShowResult(false);
      setResult([]);
      return;
    }
    searchResult(keyword)
      .then(setResult);
  }, [keyword])
  
  return (
    <>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <span className="input-group-text"><i class="fas fa-search" /></span>
        </InputGroupAddon>
        <Input placeholder="議員名稱" size="lg" value={keyword} onChange={onChangeKeyword} onFocus={onFocus}/>
      </InputGroup>
      <div className={classnames(styles.searchResultWrapper, { 'd-none': !showResult })}>
        <div className={styles.searchResult}>
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
      </div>
    </>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => SearchInput.handleClickOutside
};
 
 
export default withRouter(onClickOutside(SearchInput, clickOutsideConfig));
