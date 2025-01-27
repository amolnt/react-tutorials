import { useDeferredValue, useEffect, useState, useTransition } from "react";


const getAllProducts = () => {
    let products = [];
    for(let i =0; i < 10000; i++) {
        products.push(`Product ${i}`)
    }
    return products;
}

const dummyProducts = getAllProducts();

const filterProd = (text) => {
    if(!text)
        return dummyProducts;
    return dummyProducts.filter(product => product.includes(text));
}

const UseDefferedValueAnduseTransition = () => {
    const [searchText, setSearchText] = useState("");
    const deferedValue = useDeferredValue(searchText);
    const [isPending, startTransition] = useTransition();

    const filteredProduct = filterProd(deferedValue);

    const filterProducts = (text) => {
        startTransition(() => {
            setSearchText(text);
        })

        // setSearchText(text);
    } 

    return <div style={{    paddingTop: "15%", paddingLeft: "5%"}}>
        <input type="text" onChange={(e) => filterProducts(e.target.value)}/>
        {
            (filteredProduct.length > 0) ? (<>
                {
                    filteredProduct.map((product, index) => (
                        <li key={index}>{product}</li>
                    ))
                }
            </>) : (<>
                <p>No products found</p>
            </>)
        }
    </div>
}

export default UseDefferedValueAnduseTransition;