import React, { useState, useEffect } from 'react';

const Demo = () => {
    const [apiData, setApiData] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });

    const filteredData = apiData.filter((item) => item.price >= priceRange.min && item.price <= priceRange.max);


    useEffect(() => {
        // Fetch data from your API here and update the state
        fetch('your-api-url')
            .then((response) => response.json())
            .then((data) => setApiData(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <input
                type="range"
                min="0"
                max="100"
                value={priceRange.min}
                onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) })}
            />
            <input
                type="range"
                min="0"
                max="100"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
            />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Demo;

