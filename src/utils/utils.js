export const filterItems = (items, query) => {
    return items.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
    );
};
