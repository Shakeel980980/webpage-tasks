let list = [
{
  id:"001",
  ProductName : "Suger",
  OrigiolPrice : "Rs:150",
  ExpirDate : "01-01-2025",
  discountPer: "5%",
},
{
  id:"002",
  ProductName : "Oil",
  OrigiolPrice : "Rs:250",
  ExpirDate : "01-10-2025",
  discountPer: "7%",
 },
 {
  id:"003",
  ProductName : "Rice",
  OrigiolPrice : "Rs:450",
  ExpirDate : "01-10-2026",
  discountPer: "8%",
 },
 {
  id:"004",
  ProductName : "Tea",
  OrigiolPrice : "Rs:200",
  ExpirDate : "01-10-2027",
  discountPer: "1%",
 },
];


// for(let i =0; i < list.length; i++){}

  let listContainer = document.querySelector(".container");
  let innerhtml='';
  list.forEach(item =>{
    innerhtml += `
    <div class="conteiner-inner-text">
    <h3>Products</h3>
    <div class="list-items">
          <div class="items">
          <p> Product Name:</p>
          <p> Origional Price: </p>
          <p> Expire Date : </p>
          <p> Discount Percentage:</p>
        </div>
        <div class="items-detail">
          <p>${item.ProductName}</p>
          <p>${item.OrigiolPrice} </p>
          <p> ${item.ExpirDate } </p>
          <p> ${item.discountPer}</p>
        </div>
    </div>
      <button>Order</button>
    </div>
    `;
  });
listContainer.innerHTML = innerhtml;

