import DoctorDetails from "./doctorDetails";

function Doctors(){
    let docArray = [
        {dname: "Scott Jenkins", profile: "Dentist" , stars: 3, avatar: "https://reqres.in/img/faces/1-image.jpg"},
        {dname: "Smith Wiscott", profile: "Neurosurgeon", stars: 4, avatar: "https://reqres.in/img/faces/2-image.jpg"},
        {dname: "Sandy Keller" , profile: "Urology",  stars: 4, avatar: "https://reqres.in/img/faces/4-image.jpg"},
        {dname: "Sam Jhonson" , profile: "Gynecologist" , stars: 3, avatar: "https://reqres.in/img/faces/5-image.jpg"},
        {dname: "Sarah Cook" , profile: "Eye specialist", stars: 4, avatar: "https://reqres.in/img/faces/3-image.jpg"},
        {dname: "Sanju Owens" , profile: "Neurosurgeon" , stars: 2, avatar: "https://reqres.in/img/faces/6-image.jpg"},
        {dname: "sid Salvatore", profile: "Cardiologist" , stars: 5, avatar: "https://reqres.in/img/faces/3-image.jpg"}
    ];

    let result= docArray.map( item=>{
        return(
            <DoctorDetails docObj= {item}/>
        )
    })

    return(
        <div style={{textalign: "center", marginLeft: "90px"}}>
            {result};
        </div>
    )
}

export default Doctors;