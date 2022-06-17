import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useCartActions, useProductActions } from "../hooks/useActions";
import { useAuth } from "../store/action-creators/auth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

interface CartProps {
  item: any;
}

const ProductCard: FC<CartProps> = ({ item }) => {
  const navigate = useNavigate();
  const { addCartProduct, checkProductCart } = useCartActions();
  const { deleteProduct } = useProductActions();
  const user = useAuth();

  return (
    <div className="tabled">
      <TableContainer className="tablec" sx={{ minWidth: 350 }}>
        <TableRow
          key={item.data().id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell align="left">
            <img
              width="100px"
              src={item.data().photo}
              alt={item.data().title}
            />
          </TableCell>
          <TableCell className="tablec" component="th">
            {item.data().title}
          </TableCell>
          <TableCell className="tablec" align="left">
            ${item.data().price}
          </TableCell>
          <TableCell align="left">
            <IconButton
              className="tablec"
              onClick={() => deleteProduct(item.id)}
            >
              Delete Product
            </IconButton>
          </TableCell>
        </TableRow>
      </TableContainer>
    </div>
  );
};

export default ProductCard;
