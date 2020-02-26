const cheeses = [
    {
      id: 'cheese1',
      type: 'swiss',
      price: 0.50
    },
    {
      id: 'cheese2',
      type: 'Blue',
      price: 0.50
    },
    {
      id: 'cheese3',
      type: 'American',
      price: 0.50
    },
  ];
  
  let selectedCheeseId = '';
  
  const setSelectedCheese = (cheeseId) => {
    selectedCheeseId = cheeseId;
    console.log('selectedCheeseId', selectedCheeseId);
  };
  
  const getCheese = () => {
    return cheeses;
  };
  
  export default { setSelectedCheese, getCheese };