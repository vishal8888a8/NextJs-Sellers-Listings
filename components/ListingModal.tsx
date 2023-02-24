import React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";

type Props = {
    listing: Array<ProductInterface>;
    updateListing: any;
};
type ProductInterface = {
    title: string;
    stock: string;
    price: string;
};

export default function ListingModal({ listing, updateListing }: Props) {
    const [open, setOpen] = React.useState(false);
    const [product, updateProduct] = React.useState({
        title: "",
        stock: "",
        price: "",
    });

    return (
        <React.Fragment>
            <Button
                variant="solid"
                color="primary"
                onClick={() => setOpen(true)}
                style={{ backgroundColor: "#3d1766", color: "white" }}
            >
                Add new Listings
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog
                    aria-labelledby="basic-modal-dialog-title"
                    aria-describedby="basic-modal-dialog-description"
                    sx={{ maxWidth: 500 }}
                >
                    <Typography id="basic-modal-dialog-title" component="h2">
                        Add Product Details
                    </Typography>
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            updateListing((prev: any) => [...prev, product]);
                            setOpen(false);
                        }}
                    >
                        <Stack spacing={2}>
                            <FormControl>
                                <FormLabel>Product Name</FormLabel>
                                <Input
                                    onChange={(e) =>
                                        updateProduct((prev) => {
                                            return {
                                                ...prev,
                                                title: e.target.value,
                                            };
                                        })
                                    }
                                    autoFocus
                                    required
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>SKU</FormLabel>
                                <Input required />
                            </FormControl>
                            <FormControl>
                                <FormLabel>cost price</FormLabel>
                                <Input required />
                            </FormControl>
                            <FormControl>
                                <FormLabel>selling price</FormLabel>
                                <Input
                                    onChange={(e) =>
                                        updateProduct((prev) => {
                                            return {
                                                ...prev,
                                                price: e.target.value,
                                            };
                                        })
                                    }
                                    required
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>stock</FormLabel>
                                <Input
                                    onChange={(e) =>
                                        updateProduct((prev) => {
                                            return {
                                                ...prev,
                                                stock: e.target.value,
                                            };
                                        })
                                    }
                                    required
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Image link</FormLabel>
                                <Input required />
                            </FormControl>
                            <Button type="submit">Submit</Button>
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
        </React.Fragment>
    );
}
