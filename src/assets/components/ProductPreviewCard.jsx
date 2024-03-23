const ProductPreviewCard = () => {
  return (
    <section>
      <div>
        <picture>
          <source
            media="(min-width: 550px)"
            srcset="./images/image-product-desktop.jpg"
          />
          <img
            src="./images/image-product-mobile.jpg"
            alt="Gabrielle Chanel Paris Perfume"
          />
        </picture>
      </div>
      <div>
        <header>
          <p>P E R F U M E</p>
          <h1>Gabrielle Essence Eau De Parfum</h1>
        </header>
        <div>
          <p className="description">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="price">
            <p>$149.99</p>
            <p>$169.99</p>
          </div>
          <button>
            <img src="/images/icon-cart.svg" alt="Cart Icon" />
            <p>Add to Cart</p>
          </button>
        </div>
      </div>
    </section>
  )
}
export default ProductPreviewCard
