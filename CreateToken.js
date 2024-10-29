import React, { useState } from 'react';
import axios from 'axios';

function CreateToken() {
    const [name, setName] = useState('');
    const [symbol, setSymbol] = useState('');
    const [supply, setSupply] = useState(0);

    const createToken = async () => {
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/tokens`, {
            name, symbol, supply
        });
    };

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input value={symbol} onChange={(e) => setSymbol(e.target.value)} placeholder="Symbol" />
            <input type="number" value={supply} onChange={(e) => setSupply(e.target.value)} placeholder="Supply" />
            <button onClick={createToken}>Create Token</button>
        </div>
    );
}

export default CreateToken;
