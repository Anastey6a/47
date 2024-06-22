import React from 'react';
import OrderList from './orderlist'; // припускаємо, що файл OrderList.js знаходиться у тому ж каталозі

const App = () => {
    // Інші компоненти та стани вашого інтернет-магазину
    return (
        <div>
            <OrderList />
            {/* Інші компоненти, наприклад, список категорій */}
        </div>
    );
};

export default App;
