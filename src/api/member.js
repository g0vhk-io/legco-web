import { delayResponse } from './';

import response from './test.json';
const members = response.reduce((acc, r) => acc.concat(r.members), []); 

export default function (id) {
  const member = members.find(m => `${m.id}` === `${id}`);
  if (!member) return delayResponse({});
  return delayResponse({
    id: id,
    name: member.name_ch,
    avatar: `https://g0vhk.io${member.image}`,
    party: member.party && member.party.name_ch,
    attendance: '50%',
    vote: '12.2%',
    lastAction: 'agree',
    tags: [
      '建制', '功能組別'
    ]
  });  
}

export function voteHistory(id) {
  return delayResponse([
    {
      id: '12434',
      name: '逃犯條例修訂案',
      date: '2019/04/23',
      result: 'passed',
      vote: 'agree'
    },
    {
      id: '124334',
      name: '逃犯條例修訂案',
      date: '2019/04/23',
      result: 'negatived',
      vote: 'disagree'
    },
    {
      id: '124324',
      name: '逃犯條例修訂案',
      date: '2019/04/23',
      result: 'negatived',
      vote: 'abstention'
    },
    {
      id: '12434',
      name: '逃犯條例修訂案',
      date: '2019/04/23',
      result: 'passed',
      vote: 'agree'
    },
    {
      id: '124334',
      name: '逃犯條例修訂案',
      date: '2019/04/23',
      result: 'negatived',
      vote: 'disagree'
    },
    {
      id: '124324',
      name: '逃犯條例修訂案',
      date: '2019/04/23',
      result: 'negatived',
      vote: 'abstention'
    }
  ]);  
}

export function news(id) {
  return delayResponse([
    {
      id: '12434',
      url: 'https://hk.news.appledaily.com/local/realtime/article/20190912/60038070?utm_campaign=hkad_social_hk.nextmedia&utm_medium=social&utm_source=facebook&utm_content=link_post&fbclid=IwAR05JYRsZ9Bl9wkyobnW4c2WDGDD2aCvBTAOWTu-KqDzJlsPO89vWMCDAy8',
      date: '2019-04-23',
      source: '香港01',
      title: '【逆權運動】民主派倡警執勤衝突前讀誓詞被否決 沙田區會主席稱令警「仲失控'
    },
    {
      id: '12434',
      url: 'https://hk.news.appledaily.com/local/realtime/article/20190912/60038070?utm_campaign=hkad_social_hk.nextmedia&utm_medium=social&utm_source=facebook&utm_content=link_post&fbclid=IwAR05JYRsZ9Bl9wkyobnW4c2WDGDD2aCvBTAOWTu-KqDzJlsPO89vWMCDAy8',
      date: '2019-04-23',
      source: '香港01',
      title: '【逆權運動】民主派倡警執勤衝突前讀誓詞被否決 沙田區會主席稱令警「仲失控'
    }
  ]);  
}