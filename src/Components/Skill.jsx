import React, { useState, useEffect } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';

const App = () => {
    const [loading, setLoading] = useState(false);

    const startLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000); // Loader will stop after 3 seconds
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <ClimbingBoxLoader
                color="red"
                size={15}
                loading={loading}
            />

            {!loading && (
                <button onClick={startLoading} style={{ marginTop: '20px' }}>
                    Start Loading
                </button>
            )}
        </div>
    );
};

export default App;
