import { delayResponse } from './';

export default function (keyword = '') {
  return delayResponse([
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
  ]);
}