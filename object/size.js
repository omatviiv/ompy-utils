/*::
type SizeArgs = {
  obj: {
    [index: string]: any,
  },
  recurseInto?: Array<string> | null,
};
*/

const size = ({
  obj,
  recurseInto = [],
}/*: SizeArgs*/): number => {
  let propsNumber = 0;

  const recursionCriteria = () => {
    if (recurseInto === null)
      return (k: string, v: any) => false;
    return recurseInto
      && recurseInto.find
      && recurseInto.length > 0
      ? (k: string, v: any) => !!recurseInto.find(r => r === k)
      : (k: string, v: any) => typeof v === 'object';
  };

  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      if (recursionCriteria()(k, obj[k])) {
        propsNumber = propsNumber + size({
          obj: obj[k],
          recurseInto,
        });
      } else {
        propsNumber = propsNumber + 1;
      };
    };
  };
  return propsNumber;
};

export default size;
