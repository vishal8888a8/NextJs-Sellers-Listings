import React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import axios from "axios";

let initial_state = {
    name: "",
    contact: "",
    location: "",
    address: "",
    gender: "",
    image: "",
};

type Props = {
    api_call: () => void;
    method: string;
    type: string;
    buttonStyle: object;
    id: string;
};

export default function SellerModal({
    api_call,
    method,
    type,
    buttonStyle,
    id,
}: Props) {
    const [open, setOpen] = React.useState(false);
    let [newSeller, updateNewSeller] = React.useState(initial_state);
    return (
        <React.Fragment>
            <Button
                variant="solid"
                color="primary"
                onClick={() => setOpen(true)}
                style={buttonStyle}
            >
                {type}
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog
                    aria-labelledby="basic-modal-dialog-title"
                    aria-describedby="basic-modal-dialog-description"
                    sx={{ maxWidth: 500 }}
                >
                    <Typography id="basic-modal-dialog-title" component="h2">
                        Sellers details
                    </Typography>
                    <form
                        onSubmit={async (event) => {
                            event.preventDefault();
                            let post_api_call = async () => {
                                return await axios.post(
                                    "http://localhost:3000/api/sellers",
                                    newSeller
                                );
                            };

                            let put_api_call = async () => {
                                return await axios.put(
                                    "http://localhost:3000/api/sellers?id=" +
                                        id,
                                    newSeller
                                );
                            };

                            if (method === "POST") await post_api_call();
                            else await put_api_call();
                            
                            await api_call();
                            updateNewSeller(initial_state);
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
                                                contact: e.target.value,
                                            };
                                        })
                                    }
                                    required
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Location</FormLabel>
                                <Input
                                    onChange={(e) =>
                                        updateNewSeller((prev) => {
                                            return {
                                                ...prev,
                                                location: e.target.value,
                                            };
                                        })
                                    }
                                    required
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Address</FormLabel>
                                <Input
                                    onChange={(e) =>
                                        updateNewSeller((prev) => {
                                            return {
                                                ...prev,
                                                address: e.target.value,
                                            };
                                        })
                                    }
                                    required
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Gender</FormLabel>
                                <Input
                                    onChange={(e) =>
                                        updateNewSeller((prev) => {
                                            return {
                                                ...prev,
                                                gender: e.target.value,
                                            };
                                        })
                                    }
                                    required
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Image link</FormLabel>
                                <Input
                                    onChange={(e) =>
                                        updateNewSeller((prev) => {
                                            return {
                                                ...prev,
                                                image: e.target.value,
                                            };
                                        })
                                    }
                                    required
                                />
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
