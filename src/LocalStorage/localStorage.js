const getLsData = () => {

    const lsData = localStorage.getItem('bookmark');
    if (lsData) {
        return JSON.parse(lsData);
    }
    return [];
}

const addLsData = (title) => {
    const lsBookData = getLsData();

    const newlsBookData = [...lsBookData, title];
    setLsData(newlsBookData);
}

const setLsData = (data) => {    
    localStorage.setItem('bookmark', JSON.stringify(data));
}

export {addLsData, getLsData}