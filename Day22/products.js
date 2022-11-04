import {useState}  from 'react';

function ProdDetails()
{
    let [pname, setPname]  = useState("");
    let [price, setprice]  = useState(0);
    let [quant, setQuant]  = useState(0);
    let [result, setResult]  = useState(0);

    function inputpnameChange(event)
    {
        setPname(event.target.value);   
    }

    function inputpriceChange(event)
    {
        setprice(event.target.value);   
    }

    function inputquantChange(event)
    {
        setQuant(event.target.value);   
    }


    let getTotal  = function(){
        let  val  = 0;
        val = price*quant;
        setResult(val);
    };

    return (
        <>
            <h3>State in React</h3>
            <hr/>

            <fieldset>
                <legend>Product Details</legend>
                Product  : 
                <input type="text"  onBlur={inputpnameChange}  />
                <br/><br/>
                Price : 
                <input type="text"  onChange={inputpriceChange}  />
                <br/><br/>
                Quantity : 
                <input type="text"  onChange={inputquantChange}  />
                <br/><br/>
                <input type="button"  value="Total"  onClick={getTotal}  />
                <hr/>
                <p>The total cost for <b>{pname}</b> is : <b>{result}</b></p>
            </fieldset>

        </>
    );
}

export default ProdDetails;