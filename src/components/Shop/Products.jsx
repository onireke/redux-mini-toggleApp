import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  console.log(props);
  const DUMMY_PRODUCT = [
    {
      id: "p1",
      price: 6,
      title: "my first book",
      description: "the first cart project code i have ever written",
    },
    {
      id: "p2",
      price: 6,
      title: "my second book",
      description: "the second cart project code i have ever written",
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
