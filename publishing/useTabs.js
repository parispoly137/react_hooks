export const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  console.log(currentIndex);
  if (!allTabs || !Array.isArray(allTabs)) {
    return console.log(currentIndex);
    ;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};
