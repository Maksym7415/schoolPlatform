export const handleSearch = (array, string) => array.filter((item) => item.name.includes(string));

export const handleMoveItem = (setAll, setSelected, array, checked, isRightSide) => {
  const prevValue = [...array];
  const result = [];
  if (isRightSide) {
    Object.keys(checked).forEach((key) => prevValue.forEach((item, index) => checked[key] && item.id === +key.split('.')[1] && result.push(...prevValue.splice(index, 1))));
    setSelected(prevValue);
    setAll((prev) => ([...prev, ...result]));
  } else {
    Object.keys(checked).forEach((key) => prevValue.forEach((item, index) => checked[key] && item.id === +key && result.push(...prevValue.splice(index, 1))));
    setAll(prevValue);
    setSelected((prev) => ([...prev, ...result]));
  }
};
