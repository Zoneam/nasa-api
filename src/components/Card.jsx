import * as React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

const DisplayCard = ({data}) => {

  return (

 <MDBCard >
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          {data.url.includes('youtube')?<MDBCardImage component="iframe" src={data.url} alt={data.title} fluid/>:<MDBCardImage  component="img" src={data.url} alt={data.title} fluid/>}
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>{data.title}</MDBCardTitle>
            <MDBCardText>
            {data.explanation}
            
            </MDBCardText>
            
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard> 
    
  );
}

export default DisplayCard;


