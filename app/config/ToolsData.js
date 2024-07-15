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
    title: 'JWT加密/解密',
    cid: 2,
    router: 'JWTEDcrypt',
  },
  {
    id: 11,
    title: 'JSON格式化',
    cid: 3,
    router: 'JsonFormat',
  },
  {
    id: 12,
    title: 'XML格式化',
    cid: 3,
    router: 'XmlFormat',
  },
  {
    id: 13,
    title: 'YAML格式化',
    cid: 3,
    router: 'YamlFormat',
  },
  {
    id: 14,
    title: 'HTML格式化',
    cid: 3,
    router: 'HtmlFormat',
  },
  {
    id: 15,
    title: 'CSS格式化',
    cid: 3,
    router: 'CssFormat',
  },
  {
    id: 16,
    title: 'JS格式化',
    cid: 3,
    router: 'JsFormat',
  },
  {
    id: 17,
    title: 'SQL格式化',
    cid: 3,
    router: 'SqlFormat',
  },
  {
    id: 18,
    title: '时间戳转换',
    cid: 3,
    router: 'Timestamp',
  },
  {
    id: 19,
    title: 'RGB/HEX转换',
    cid: 3,
    router: 'RGBHEX',
  },
  {
    id: 20,
    title: '进制转换',
    cid: 3,
    router: 'NumberSystem',
  },
  {
    id: 21,
    title: '单位转换',
    cid: 3,
    router: 'UnitConversion',
  },
  {
    id: 22,
    title: 'IP地址转换',
    cid: 3,
    router: 'IPAddress',
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
