import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Companies from '../../Components/Companies/Companies';
import Fotter from '../../Components/Fotter/Fotter';
import HaveQuestion from '../../Components/HaveQuestion/HaveQuestion';
import Product from '../../Components/products/Product';
import ProductSelect from '../../Components/ProductSelect/ProductSelect';



const Home = () => {
    return (
        <div>

 <Banner></Banner>
<Product></Product>
<HaveQuestion></HaveQuestion>
<ProductSelect></ProductSelect>
<Companies></Companies>
<Fotter></Fotter>
        </div>
    );
};

export default Home;