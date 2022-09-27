import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Carts() {
  const cartList = useSelector(state => state.cartReducer.cartList);
  const dispatch = useDispatch();

  const renderCartList = ()=>{
    return cartList.map((item,index)=>{
      return <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>{item.id}</td>
      <td>{item.img}</td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>
        <button className='btn btn-success'>+</button>
        <span>1</span>
        <button className='btn btn-danger'>-</button>
      </td>
      <td>1</td>
      <td>
        <button className='btn btn-warning'>
          Del
        </button>
      </td>
    </tr>
    })
  }

  // const handleDelete = ()=>{
  //   dispatch()
  // }
  return (
    <div className='container carts'>
      <h3>Carts</h3>

      <table className='table'>
        <thead>
          <th></th>
          <th>Id</th>
          <th>Img</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Action</th>
        </thead>
        <tbody>
          {renderCartList()}
        </tbody>
      </table>
      
    </div>
  )
}
