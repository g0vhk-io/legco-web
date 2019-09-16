
import taipo from './district/taipo.jpeg';
import kwuntong from './district/kwuntong.jpg';
import tsuenwan from './district/tsuenwan.jpg';
import hunghom from './district/hunghom.jpg';
import hki from './district/hki.jpg';
import fn from './district/function.jpg';

import HongKongIslandConstituency from './map/hki.svg';
import KowloonWestConstituency from './map/kw.svg';
import NewTerritoriesEastConstituency from './map/nte.svg';
import KowloonEastConstituency from './map/ke.svg';
import NewTerritoriesWestConstituency from './map/ntw.svg';

export default [
  {
    label: '新界東',
    map: NewTerritoriesEastConstituency,
    img: taipo,
  },
  {
    label: '新界西',
    map: NewTerritoriesWestConstituency,
    img: tsuenwan,
  },
  {
    label: '九龍東',
    map: KowloonEastConstituency,
    img: kwuntong,
  },
  {
    label: '九龍西',
    map: KowloonWestConstituency,
    img: hunghom,
  },
  {
    label: '港島',
    map: HongKongIslandConstituency,
    img: hki,
  },
  {
    label: '功能',
    img: fn,
  },
]