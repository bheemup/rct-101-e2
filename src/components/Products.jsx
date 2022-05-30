import React from "react";
import AddProduct from "./AddProduct"
import Pagination from "./Pagination";
import Product from "./Product";


const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const Flex = () => <div />;
  const Grid = () => <div />;

  return (
   <>


   <h1>hello this also products page</h1>
          
      <h1>hello products main page</h1>
      
      <AddProduct/>
      <Grid>
        <Product/>
      </Grid>
     
      <Pagination/>
    
   </>
  );
};

export default Products;
