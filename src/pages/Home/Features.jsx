import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../components/Cards/ProductCard';
import { getProductAPI } from '../../redux/reducers/productReducer';

export default function Features() {
    const {arrProduct} = useSelector(state => state.productReducer)
    const dispatch = useDispatch();

    useEffect(()=>{
        getProductAPI();
    },[])
  return (
    <div className='my-5 feature'>
        <h3 className='title mb-3'>Product Feature</h3>

        <div className="row">
            {
                arrProduct.map((item,index)=>{
                    return <div className="col-4" key={index}>
                        <ProductCard product={item}/>
                    </div>
                })
            }
        </div>
    </div>
  )
}
