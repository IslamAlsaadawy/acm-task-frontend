import axios from 'axios'
import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react'
import "./viewProducts.css"

const ViewProducts = () => {
    const[productData, setProductData] = useState<Product[]>([]);
    const [pageNumber, setPageNumber] = useState(0);
    const productsPerPage = 5;
    const pagesVisited = pageNumber * productsPerPage;
    const pageCount = Math.ceil(productData.length / productsPerPage);
   interface Product{
    name:string,
    price:number,
    quantity:number
   }

    useEffect(() => {
        const fetchProductData = async ()=>{
            const response = await axios.get("http://localhost:2300/products/");
            setProductData(response.data);
            console.log(productData);
            
            
    
        }
        fetchProductData()

    },[])
  return (
    <>
<table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {productData.slice(pagesVisited, pagesVisited + productsPerPage).map(item =>
                     (<tr> 
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    
                </tr>))}
              
            </tbody>
        </table>
         <ReactPaginate
         previousLabel={'previous'}
         nextLabel={'next'}
         pageCount={pageCount}
         onPageChange={page => setPageNumber(page.selected)}
         containerClassName={'pagination'}
         activeClassName={'active'}
       />
       </>
       
       )
}

export default ViewProducts