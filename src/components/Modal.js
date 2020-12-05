import React ,{Component} from 'react'
import {ProductConsumer} from '../Context'
import {ButtonConatainer,ModalContainer} from './Button'
import {Link} from 'react-router-dom'

export default class Modal extends Component{
render() {
    return (
   <ProductConsumer>
       {(value) => {
           const {modalOpen,closeModal} =value;
           const {img,title,price} = value.modalProduct;
           if(!modalOpen) {return null}
           else
           { 
            return (<ModalContainer>
                  <div className="container">
                     <div className="row">
                         <div id="modal" class="col-8 mx-auto p-5 col-md-6 col-lg-4 text-center text-capitalize">
                             <h5>Item added to the cart</h5>
                             <img src={img} alt="product" className="img-fluid"/>
                             <h5>{title}</h5>
                             <h5 className="text-muted">price :$ {price}</h5>
                             <Link to="/">
                                 <ButtonConatainer onClick={()=>closeModal()}>
                                     Store
                                 </ButtonConatainer>
                             </Link>
                             <Link to="/cart">
                                 <ButtonConatainer cart onClick={()=>closeModal()}>
                                    goto cart
                                 </ButtonConatainer>
                             </Link>
                         </div>
                     </div>
                 </div>
            </ModalContainer>)
                
            }
       }}
   </ProductConsumer>
 )
}

}