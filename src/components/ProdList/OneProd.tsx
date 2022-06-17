import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useCartActions, useProductActions } from "../../hooks/useActions";
import { useAuth } from "../../store/action-creators/auth";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

interface CartProps {
  item: any;
}

const ProductCard: FC<CartProps> = ({ item }) => {
  const navigate = useNavigate();
  const { addCartProduct, checkProductCart } = useCartActions();
  const { deleteProduct } = useProductActions();
  const user = useAuth();

  return (
    <>
      <Card
        sx={{
          width: 370,
          marginBottom: 8,
          textAlign: "center",
          fontWeight: 900,
        }}
        key={item.data().id}
      >
        <Typography gutterBottom variant="h5" component="div">
          {item.data().title}
        </Typography>
        <CardMedia
          component="img"
          height="300"
          image={item.data().photo}
          alt={item.data().title}
        />
        <CardContent className="card-content">
          <Typography gutterBottom variant="h5" component="div">
            ${item.data().price}
          </Typography>
          <Button
            size="large"
            style={
              checkProductCart(item.data().id)
                ? { color: "red" }
                : { color: "green" }
            }
            onClick={() => {
              addCartProduct(item.data());
              checkProductCart(item.data().id);
            }}
          >
            <AddShoppingCartIcon />
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;
