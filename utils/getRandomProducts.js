export const getRandomProducts = (products, count = 20) => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

export const getRandomProductsByCategory = (products, category, count = 100) => {
    const filtered = products.filter((item) => item.category === category);
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};
