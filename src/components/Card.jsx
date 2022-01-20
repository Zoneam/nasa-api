import * as React from 'react';
import { useState } from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const DisplayCard = ({data}) => {
  const { title , url, explanation } = data;
  const [like, setLike] = useState();

 function handleLike() {
      const likes = JSON.parse(localStorage.getItem("Likes")) || [];
      if (!likes.includes(title)){
        likes.push(title);
        localStorage.setItem("Likes", JSON.stringify(likes));
        setLike(true)
      } else {
        const i = likes.indexOf(title);
        likes.splice(i, 1);
        localStorage.setItem("Likes", JSON.stringify(likes));
        setLike(false)
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
          {like?<i className="bi bi-hand-thumbs-up-fill float-right mr-2 mb-2" style={{"color": "red", "fontSize":"2rem" }} onClick={handleLike}></i>:<i className="bi bi-hand-thumbs-down-fill float-right mr-2 mb-2" style={{"color": "blue", "fontSize":"2rem" }} onClick={handleLike}></i>}
        </MDBCol>
      </MDBRow>
      
    </MDBCard> 
    
  );
}

export default DisplayCard;


