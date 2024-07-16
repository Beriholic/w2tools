export const ToolCategories = [
  {
    id: 1,
    name: '编码解码',
  },
  {
    id: 2,
    name: '加密解密',
  },
  {
    id: 3,
    name: '格式处理',
  },
  {
    id: 4,
    name: '文件处理',
  },
  {
    id: 5,
    name: '计算工具',
  },
  {
    id: 6,
    name: '杂类工具',
  },
];

export const Tools = [
  {
    id: 1,
    title: 'Base64编码/解码',
    cid: 1,
    router: 'Base64EDcode',
  },
  {
    id: 2,
    title: 'URL编码/解码',
    cid: 1,
    router: 'URLEDcode',
  },
  {
    id: 3,
    title: 'Hex编码/解码',
    cid: 1,
    router: 'HexEDcode',
  },
  {
    id: 4,
    title: 'PunyCode编码/解码',
    cid: 1,
    router: 'PunyCodeEDcode',
  },
  {
    id: 5,
    title: 'MD5加密',
    cid: 2,
    router: 'MD5Encrypt',
  },
  {
    id: 6,
    title: 'SHA加密',
    cid: 2,
    router: 'SHAEncrypt',
  },
  {
    id: 7,
    title: 'AES加密/解密',
    cid: 2,
    router: 'AESEDcrypt',
  },
  {
    id: 8,
    title: 'DES加密/解密',
    cid: 2,
    router: 'DESEDcrypt',
  },
  {
    id: 9,
    title: 'RC4加密/解密',
    cid: 2,
    router: 'RC4EDcrypt',
  },
  {
    id: 10,
    title: 'RGB/HEX转换',
    cid: 3,
    router: 'RGBHEX',
  },
  {
    id: 11,
    title: '进制转换',
    cid: 3,
    router: 'NumberSystem',
  },
];

export function getToolsSectionListByCid(cid) {
  const cat = ToolCategories[cid - 1];
  return {
    title: cat.name,
    data: Tools.filter(tool => tool.cid === cat.id).map(tool => tool.title),
  };
}

export function getToolsByName(name) {
  if (name === '') {
    return Tools;
  }
  return Tools.filter(tool => tool.title.includes(name));
}
