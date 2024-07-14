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
    title: '半角全角转换',
    cid: 1,
    router: 'SBCDBC',
  },
  {
    id: 4,
    title: 'Hex编码/解码',
    cid: 1,
    router: 'HexEDcode',
  },
  {
    id: 5,
    title: 'PunyCode编码/解码',
    cid: 1,
    router: 'PunyCodeEDcode',
  },
  {
    id: 7,
    title: 'MD5加密/解密',
    cid: 2,
    router: 'MD5EDcrypt',
  },
  {
    id: 8,
    title: 'SHA1加密/解密',
    cid: 2,
    router: 'SHA1EDcrypt',
  },
  {
    id: 9,
    title: 'AES加密/解密',
    cid: 2,
    router: 'AESEDcrypt',
  },
  {
    id: 10,
    title: 'DES加密/解密',
    cid: 2,
    router: 'DESEDcrypt',
  },
  {
    id: 11,
    title: 'RC4加密/解密',
    cid: 2,
    router: 'RC4EDcrypt',
  },
  {
    id: 12,
    title: 'JWT加密/解密',
    cid: 2,
    router: 'JWTEDcrypt',
  },
  {
    id: 13,
    title: 'JSON格式化',
    cid: 3,
    router: 'JsonFormat',
  },
  {
    id: 14,
    title: 'XML格式化',
    cid: 3,
    router: 'XmlFormat',
  },
  {
    id: 15,
    title: 'YAML格式化',
    cid: 3,
    router: 'YamlFormat',
  },
  {
    id: 16,
    title: 'HTML格式化',
    cid: 3,
    router: 'HtmlFormat',
  },
  {
    id: 17,
    title: 'CSS格式化',
    cid: 3,
    router: 'CssFormat',
  },
  {
    id: 18,
    title: 'JS格式化',
    cid: 3,
    router: 'JsFormat',
  },
  {
    id: 19,
    title: 'SQL格式化',
    cid: 3,
    router: 'SqlFormat',
  },
  {
    id: 20,
    title: '时间戳转换',
    cid: 3,
    router: 'Timestamp',
  },
  {
    id: 21,
    title: 'RGB/HEX转换',
    cid: 3,
    router: 'RGBHEX',
  },
  {
    id: 22,
    title: '进制转换',
    cid: 3,
    router: 'NumberSystem',
  },
  {
    id: 23,
    title: '单位转换',
    cid: 3,
    router: 'UnitConversion',
  },
  {
    id: 24,
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
