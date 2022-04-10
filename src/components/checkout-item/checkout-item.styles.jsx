import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 240px;
  margin-bottom: 15px;
`;

export const Img = styled.img`
  width: 20%;
  object-fit: none;
`;

export const ItemDetails = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 20px;
`;

export const Name = styled.span`
  font-size: 30px;
`;

export const Quantity = styled.span`
  text-decoration: solid;
  margin: 0% 5%;
`;

export const Arrow = styled.button`
  font-weight: bold;
`;

export const Remove = styled.button`
  font-weight: bold;
`;
// .checkout - item - container {
//   width: 100%;
//   display: flex;
//   height: 240px;
//   margin-bottom: 15px;
//   img {
//     width: 20%;
//     object-fit: none;
//   }

//   .item-details {
//     width: 20%;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     padding: 10px 20px;
//     font-size: 20px;
//     .name {
//       font-size: 30px;
//     }
//     .quantity {
//       text-decoration: solid;
//       margin: 0% 5%;
//     }
//     .arrow {
//       font-weight: bold;
//     }
//     .remove {
//       font-weight: bold;
//     }
//   }
// }
