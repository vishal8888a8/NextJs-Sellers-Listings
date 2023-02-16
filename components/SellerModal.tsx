import React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";

type Props = {};

export default function SellerModal({ sellers, updateSellers }: Props) {
    const [open, setOpen] = React.useState(false);
    let [newSeller, updateNewSeller] = React.useState({
        name: "",
        phone: "",
    });
    return (
        <React.Fragment>
            <Button
                variant="solid"
                color="primary"
                onClick={() => setOpen(true)}
                style={{ backgroundColor: "#3d1766", color: "white" }}
            >
                Add Sellers
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog
                    aria-labelledby="basic-modal-dialog-title"
                    aria-describedby="basic-modal-dialog-description"
                    sx={{ maxWidth: 500 }}
                >
                    <Typography id="basic-modal-dialog-title" component="h2">
                        Add sellers details
                    </Typography>
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            updateSellers((prev) => [...prev, newSeller]);
                            setOpen(false);
                        }}
                    >
                        <Stack spacing={2}>
                            <FormControl>
                                <FormLabel>Full Name</FormLabel>
                                <Input
                                    onChange={(e) =>
                                        updateNewSeller((prev) => {
                                            return {
                                                ...prev,
                                                name: e.target.value,
                                            };
                                        })
                                    }
                                    autoFocus
                                    required
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Contact No.</FormLabel>
                                <Input
                                    onChange={(e) =>
                                        updateNewSeller((prev) => {
                                            return {
                                                ...prev,
                                                phone: e.target.value,
                                            };
                                        })
                                    }
                                    required
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Location</FormLabel>
                                <Input required />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Address</FormLabel>
                                <Input required />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Gender</FormLabel>
                                <Input required />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Image link</FormLabel>
                                <Input required />
                            </FormControl>
                            <Button
                                type="submit"
                                style={{
                                    backgroundColor: "#3d1766",
                                    color: "white",
                                }}
                            >
                                Submit
                            </Button>
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
        </React.Fragment>
    );
}
