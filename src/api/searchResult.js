import { delayResponse } from './';

import response from './test.json';
const members = response
  .reduce((acc, r) => acc.concat(r.members), [])
  .filter((m, i, arr) => i !== arr.findIndex(obj => obj.id === m.id)); 
export default function (keyword = '') {
  return delayResponse(
    members
      .filter(m => (
        m.name_ch.includes(keyword) ||
        m.name_en.includes(keyword) ||
        (m.party && m.party.name_ch.includes(keyword))
      ))
      .map(m => ({
        id: m.id,
        name: m.name_ch,
        avatar: `https://g0vhk.io${m.image}`,
        party: m && m.party.name_ch,
        attendance: '50%',
        lastAction: m.id % 2 ? 'agree' : 'disagree',
      }))
    )
  // return delayResponse([
  //   {
  //     id: '123',
  //     name: '陳方安生',
  //     avatar: 'assets/img/avatars/1.jpg',
  //     party: '新民黨',
  //     attendance: '50%',
  //     lastAction: 'agree',
  //   },
  //   {
  //     id: '1233',
  //     name: '葉劉淑儀',
  //     avatar: 'assets/img/avatars/1.jpg',
  //     party: '新民黨',
  //     attendance: '30%',
  //     lastAction: 'disagree',
  //   },
  //   {
  //     id: '1234',
  //     name: '田北辰',
  //     avatar: 'assets/img/avatars/1.jpg',
  //     party: '新民黨',
  //     attendance: '20%',
  //     lastAction: 'abstention',
  //   },
  //   {
  //     id: '1235',
  //     name: '田北辰',
  //     avatar: 'assets/img/avatars/1.jpg',
  //     party: '新民黨',
  //     attendance: '20%',
  //     lastAction: 'absent',
  //   }
  // ]);
}