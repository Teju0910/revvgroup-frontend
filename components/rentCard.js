// rendCard function used to render renting details of a car in a card format

function rentCard(car) {
  let { brand, model, imgUrl, seats, transmission, fuel, segment, rent,extra } = car;

  let keys = Object.keys(rent);

  
  return `
         <div class="rentCard">
                    <div class="car-details">
                        <h4 class='text-centre'>${model}</h4>
                        <img src=${imgUrl} alt="" class='car-img'>
                        <div class="d-flex space-around">
                            <p><img src="https://www.revv.co.in/imgs/car-card/automatic.svg" alt=""> ${transmission}</p>
                            <p><img src="https://www.revv.co.in/imgs/car-card/petrol.svg" alt=""> ${fuel}</p>
                            <p><img src="https://www.revv.co.in/imgs/car-card/seat.svg" alt=""> ${seats} seats</p>
                        </div>
                    </div>
                    <div class="rent-details d-flex space-between ">
                        
                            <div class="low d-flex col teal  ">
                                <p class=" price nmt-10">₹ ${rent.low}</p>
                                <p class=" distance small-txt ">150 kms</p>
                             </div>
                             <div class="avg d-flex col teal ">
                                <p class="price nmt-10">₹ ${rent.avg}</p>
                                <p class="distance small-txt ">450 km</p>
                            </div>
                            <div class="Unlimited d-flex col teal ">
                                <p class="price nmt-10">₹ ${rent.Unlimited}</p>
                                <p class="distance small-txt ">Unlimited </p>
                            </div>
                    </div>
                    <div class="extra-km d-flex space-between">
                        <p>Extra km charge @ ₹${extra}</p>
                        <button class="book-btn">Book</button>
                    </div>
                </div>

            
    
    
    `;
}

export default rentCard;
