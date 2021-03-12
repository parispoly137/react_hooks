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

// 출력을 원하는 탭의 버튼 또는 링크 등을 누르면 해당 페이지로 이동 또는 내용을 출력한다.