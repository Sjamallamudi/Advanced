function App() {
    
  let  custArrays =  [
    {cname:"Scott", cunm: 45679875, loc: "Hyderabad"},
    {cname:"Smith", cunm: 34567873, loc: "Banglore"},
    {cname:"Sandy", cunm: 12345344, loc: "Chennai"},
    {cname:"Sam", cunm: 12349872, loc: "Delhi"},
    {cname:"Sarah", cunm: 98767873, loc: "Nellore"},
    {cname:"Sanju", cunm: 87645344, loc: "Kochi"},
    {cname:"Sid", cunm: 63249872, loc: "Delhi"},
];
 
  let result = custArrays.map( item =>  {
      return (
        //var <p>Customer name : {item.cname} </p>
        <div>
          <p>Customer Name : {item.cname}</p> 
          <p>Phone number :  {item.cnum}</p>
          <p>Locality : {item.loc}</p>;
        </div>
      );
    });

  const ProductArr = [
    { product : "Bru", category : "Coffee", price : 100, units : 5},
    { product : "Maggi", category : "Noodles & Soups", price : 80, units : 0},
    { product : "Knor soups", category : "Noodles & Soups", price : 40, units : 2},
    { product : "Munch", category : "Snacks", price : 10, units : 8},
    { product : "ThumbsUp", category : "Cool Drinks", price : 65, units : 0},
    { product : "Kurkure", category : "Snacks", price : 20, units : 15},
];

let productDet  =  ProductArr.map( item =>  
  {
    return <tr> 
             <td> {item.product}  </td>  
             <td> {item.category}  </td>  
             <td> {item.price}  </td>  
             <td> {item.units}  </td>  
        </tr>
  });
 


return (
  <div>
    <h3>Customer details</h3>
      {result}

    <h3>Products table</h3>
      <table border="2"  width="500">
        <tr>
          <th>Product Name</th>
          <th>Category</th>
          <th>Unit Price</th>
          <th>Units in stock</th>
        </tr>
        {productDet}
      </table>
  </div>
);
}

export default App;
