const extendObj  = (obj: { [index: string]: any; }) => {
  const newObj: { [index: string]: any; } = Object.create({
    size: function(
      recurseInto?: Array<string> | null,
    ) {
      return size({ obj: this, recurseInto });
    },
  });

  for (let k in obj) {
    if (obj.hasOwnProperty(k)) newObj[k] = obj[k];
  };

  return newObj;
};

export default extendObj;
