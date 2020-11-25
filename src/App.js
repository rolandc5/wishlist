import Particles from "react-particles-js";
import './App.css';

function App() {
  return (
    <div id="snowFlakeContainer">
      <div className="blur">
        <Particles
          className="snowflake"
          params={{
            "particles": {
              "number": {
                "value": 160,
                "density": {
                  "enable": false
                }
              },
              "size": {
                "value": 10,
                "random": true
              },
              "move": {
                "direction": "bottom",
                "out_mode": "out"
              },
              "line_linked": {
                "enable": false
              }
            },
            "interactivity": {
              "events": {
                "onclick": {
                  "enable": true,
                  "mode": "remove"
                }
              },
              "modes": {
                "remove": {
                  "particles_nb": 10
                }
              }
            },
          }}
        />
        <div className="wishlist-container">
          <div className="flex-direction">
            <h1 class="title-name"> Roland's Wishlist </h1>
            <div className="flex-middle">
              <ul className="wishlist-ul">
                <li className="wishlist-li">
                  <a href="https://www.32degrees.com/products/mens-waffle-sleep-jogger?collection=mens&variant=32018481578073" target="_blank" rel="noopener noreferrer">
                    <img class="image-size" src="https://cdn.shopify.com/s/files/1/1326/1029/products/TM0FLA58_HtCharcoal_F_0186.jpg?v=1603810506" alt="pant"/>
                  </a>
                </li>

                <li className="wishlist-li">
                  <a href="https://www.costco.com/kirkland-signature-plush-blanket.product.100419860.html" target="_blank" rel="noopener noreferrer">
                    <img class="image-size" src="https://richmedia.ca-richimage.com/ImageDelivery/imageService?profileId=12026540&id=1421393&recipeId=729" alt="blanket"/>
                  </a>
                </li>
                <li className="wishlist-li">
                  <a href="https://store.dji.com/product/tello?vid=45701&from=event-black-friday-sale-2020" target="_blank" rel="noopener noreferrer">
                    <img class="image-size" src="https://product1.djicdn.com/uploads/photos/35175/39661714-0921-4dcf-a8de-7314368af599.jpg" alt="drone"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
