function DoctorDetails(props){
let nstar = props.docObj.stars;
let iarr=[];
for (let index = 0; index < nstar; index++) {
//    iarr.push( <i class="bi bi-star-fill"></i>);
    iarr.push(<img src="star.jpg" style={{height: "20px", width: "20px"}}/>)
    
}
return(
<div style={{width: "200px", border: "2px solid black", float: "left", textAlign: "center", marginLeft: "20px",marginTop: "20px", borderRadius: "15px", padding: "15px",}}>
                <img src= {props.docObj.avatar} style={{borderRadius: " 50%"}}/>
                <p style={{margin: "none"}}><b>{props.docObj.dname}</b></p>
                <p>{props.docObj.profile}</p>
                <p>{iarr}</p>
                <input type="button" href="javascript:void(0)" value=" BOOK APPOINTMENT " style={{backgroundcolor: "lightgray", borderRadius: "25px", padding: "5px" }}/>
            </div>
);
}

export default DoctorDetails;