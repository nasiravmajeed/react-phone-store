import styled from 'styled-components'

export const  NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
      color : var(--mainWhite);
      font-size: 1.3rem;
      text-transform : capitaliza;
  }
`;

export const ButtonConatainer = styled.button`
text-transform : capitalize;
font-size : 1.4rem;
background : transparent;
border : 0.05rem solid var(--lightBlue);
border-color : ${props =>(props.cart?"var(--mainYellow)":"var(--lightBlue)")};
color :${props=>(props.cart?"var(--mainYellow)":"var(--lightBlue)")};
border-radius: 0.5rem;
cursor : pointer;
margin : 0.2rem 0.5rem 0.2rem;
&:hover {
    background :${props =>(props.cart?"var(--mainYellow)": "var(--lightBlue)")};
    color : var(--mainBlue);
}
&:focus {
    outline : none;
}
`;

export const ProductWrapper = styled.div`
.card {
    border-color :transparent;
    transition : all 1s linear; 
}
.card-footer {
    background:transparent;
    border-top : transparent;
    transition : all 1s linear;
}
 &:hover {
     .card {
         border : 0.04rem solid rgba(0,0,0,0.2);
         box-shadow : 2px 2px 5px 0px rgba(0,0,0,0.2);
     }
     .card-footer {
         background : rgba(247,247,247);
     }
     .card-img-top {
        transform : scale(1.2);
     }
 }
 .img-container {
     position : relative;
     overflow : hidden;
 }
 .card-img-top{
     transition : all 1s linear;
 }
 .cart-btn {
     position : absolute;
     bottom : 0;
     right : 0;
     padding : 0.2rem 0.4rem;
     border-radius : 0.5rem 0 0 0;
     background: var(--lightBlue);
     border : none;
     color : var(--mainWhite);
     font-size : 1.4rem;
     transform :translate(100px,100px);
     transition : all 1s linear;
 }
 .img-container:hover .cart-btn {
     transform :translate(0,0);
 }
`;

export const ButtonCart= styled.div`
border : 0.5rem solid var (--mainDark);
border-radius : 0.3rem;
background :var(--mainDark);
margin : 0.2rem 1rem 1rem 1 rem;

`;

export const ModalContainer= styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background:var(--mainWhite)
}

`;