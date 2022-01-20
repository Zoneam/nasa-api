import * as React from 'react';
import { useState } from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './card.css';

const DisplayCard = ({data}) => {
  const { title , url, explanation, date, hdurl } = data;
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
            <MDBCardTitle>Capture Date: {date}</MDBCardTitle>
            <MDBCardText>
            {explanation}
            </MDBCardText>
          </MDBCardBody>
          <a href={"https://www.facebook.com/sharer/sharer.php?u=" + hdurl} target="_blank">
          <button type="button" className="btn btn-info mb-3" >Share Image</button>
          </a>
          {like?<i className="bi bi-hand-thumbs-up-fill mr-4 mb-2 thumb" style={{"color": "green", "fontSize":"3rem" }} onClick={handleLike}></i>:<i className="bi bi-hand-thumbs-down-fill  mr-4 mb-2 thumb" style={{"color": "red", "fontSize":"3rem" }} onClick={handleLike}></i>}
        </MDBCol>
      </MDBRow>
    </MDBCard> 
    
  );
}

export default DisplayCard;


