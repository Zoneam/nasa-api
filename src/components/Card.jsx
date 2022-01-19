import * as React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const DisplayCard = ({data}) => {
  const { title , url, explanation} = data;

  const handleLike = async (e) => {
    e.preventDefault();
    const likes = JSON.parse(localStorage.getItem("Likes")) || [];
    if (!likes.includes(title)){
      likes.push(title);
      localStorage.setItem("Likes", JSON.stringify(likes));
    } else {
      const i = likes.indexOf(title);
      likes.splice(i, 1);
      localStorage.setItem("Likes", JSON.stringify(likes));
    }
  }

  return (

 <MDBCard >
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          {url.includes('youtube')?<MDBCardImage component="iframe" src={url} alt={title} fluid/>:<MDBCardImage  component="img" src={url} alt={title} fluid/>}
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>{title}</MDBCardTitle>
            <MDBCardText>
            {explanation}
            </MDBCardText>
          </MDBCardBody>
          <i className="bi bi-hand-thumbs-up-fill float-right mr-2 mb-2" style={{"color": "red", "fontSize":"2rem" }} onClick={handleLike}></i>
        </MDBCol>
      </MDBRow>
      
    </MDBCard> 
    
  );
}

export default DisplayCard;


