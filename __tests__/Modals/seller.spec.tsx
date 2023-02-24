import SellerModal from "../../components/SellerModal";
// import SellerModal from "@/components/SellerModal";
import { render, screen } from "@testing-library/react";

describe("Testing redering of modal correctly", () => {
    test("", () => {
        render(
            <SellerModal
                // api_call={api_call}
                method="POST"
                type="test button"
                buttonStyle={{
                    backgroundColor: "#3d1766",
                    color: "white",
                }}
                id="0"
            />
        );
        expect(screen.getByText("test button")).toBeInTheDocument();
    });
});
