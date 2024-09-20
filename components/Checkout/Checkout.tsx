import {usePaymentMethod} from "@/hooks/react-query/usePayment";
import {usePaymentUpdateMutation} from "@/hooks/react-query/usePaymentMutations";
import {primaryColors} from "@/themes/_muiPalette";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import {Box} from "@mui/system";
import {
    CardElement,
    Elements,
    useElements,
    useStripe
} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import {type InputHTMLAttributes, useEffect, useMemo, useState} from "react";
import {LoadingPage} from "../LoadingPage/LoadingPage";

interface CustomInputFieldType extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    value: string;
    name: string;
    isEdit: boolean;
    // eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars
    onChange: (e: any) => void;
}

interface CheckoutFormType {
    paymentMethodDetails: any;
    refetchData: any;
    isLoading: boolean;
}

const CustomTextField = styled(Box)`
  padding: 14px 0px;
  color: ${primaryColors.primary};

  i {
    color: grey;
  }
`;

const Wrapper = styled(Box)`
  margin: 24px 0px;
  padding: 24px;
  border: 1px solid #012060;
  border-radius: 6px;
`;

const CustomInput = styled(InputFieldCommon)<any>`
  border-radius: 12px;
`;

const CustomText = styled.div`
  color: ${primaryColors.primary};
  font-size: 24px;
  line-height: 36px;
`;

const CustomInputField = ({
                              label,
                              value,
                              name,
                              onChange,
                              isEdit,
                              ...props
                          }: CustomInputFieldType) => {
    return (
        <>
            <div>{label || "None"}</div>
            {isEdit ? (
                <CustomInput
                    type="text"
                    placeholder="Name"
                    name={name}
                    value={value}
                    onChange={onChange}
                    {...props}
                />
            ) : (
                <CustomTextField>{value || <i>None</i>}</CustomTextField>
            )}
        </>
    );
};

const stripePromise = loadStripe(
    "pk_test_51PUlYXP0cyYM8ORhOOiof1YDwlzmX95cHYdaOhymtnVD88YIAxYL0rCYM9FdhMMdkcThlg5cdWqGu9d4AGDhRE3w00ei9maw0s"
);

const CheckoutForm = ({
                          paymentMethodDetails,
                          isLoading,
                          refetchData
                      }: CheckoutFormType) => {
    const stripe = useStripe();
    const elements = useElements();
    const paymentMethodMutation = usePaymentUpdateMutation();

    const [isEdit, setIsEdit] = useState<boolean>(!paymentMethodDetails);
    const [billingDetails, setBillingDetails] = useState({
        name: "",
        email: "",
        address: {
            line1: "",
            line2: "",
            city: "",
            state: "",
            postal_code: "",
            country: ""
        }
    });

    const handleEdit = () => {
        setIsEdit(!isEdit);
    };

    const handleBillingDetailsChange = (e: any) => {
        const {name, value} = e.target;

        setBillingDetails((prev) => ({
            ...prev,
            ...(name.includes("address.")
                ? {address: {...prev.address, [name.split(".")[1]]: value}}
                : {[name]: value})
        }));
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);
        if (cardElement) {
            const {error, paymentMethod} = await stripe.createPaymentMethod({
                type: "card",
                card: cardElement,
                billing_details: billingDetails
            });

            if (!error) {
                paymentMethodMutation.mutate(paymentMethod.id, {
                    onSuccess: () => {
                        handleEdit();
                        refetchData();
                    }
                });
            } else {
                alert(error.message);
            }
        }
    };

    useEffect(() => {
        paymentMethodDetails &&
        setBillingDetails(paymentMethodDetails?.billing_details);
        setIsEdit(!paymentMethodDetails);
    }, [paymentMethodDetails]);

    return isLoading || paymentMethodMutation.isPending ? (
        <LoadingPage height={400}/>
    ) : (
        <>
            {!isEdit && (
                <Wrapper>
                    <Box width="100%">
                        <Box display="flex" justifyContent="space-between">
                            <CustomText>Card Brand:</CustomText>
                            <CustomText>{paymentMethodDetails?.card?.brand}</CustomText>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <CustomText>Last Four Digits:</CustomText>
                            <CustomText>
                                **** **** **** {paymentMethodDetails?.card?.last4}
                            </CustomText>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <CustomText>Expiration Date:</CustomText>
                            <CustomText>
                                {paymentMethodDetails?.card?.exp_month}/
                                {paymentMethodDetails?.card?.exp_year}
                            </CustomText>
                        </Box>
                    </Box>
                </Wrapper>
            )}
            <form id="payment-form" onSubmit={handleSubmit}>
                <Grid container spacing={2} padding={2}>
                    <Grid item xs={4}>
                        <CustomInputField
                            label="Name"
                            name="name"
                            value={billingDetails.name}
                            onChange={handleBillingDetailsChange}
                            isEdit={isEdit}
                            required
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <CustomInputField
                            label="Email"
                            name="email"
                            value={billingDetails.email}
                            onChange={handleBillingDetailsChange}
                            isEdit={isEdit}
                            required
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <CustomInputField
                            label="Address Line 1"
                            name="address.line1"
                            value={billingDetails.address.line1}
                            onChange={handleBillingDetailsChange}
                            isEdit={isEdit}
                            required
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <CustomInputField
                            name="address.line2"
                            label="Address Line 2 (Optional)"
                            value={billingDetails.address.line2}
                            onChange={handleBillingDetailsChange}
                            isEdit={isEdit}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <CustomInputField
                            label="City"
                            name="address.city"
                            value={billingDetails.address.city}
                            onChange={handleBillingDetailsChange}
                            isEdit={isEdit}
                            required
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <CustomInputField
                            label="State"
                            name="address.state"
                            value={billingDetails.address.state}
                            onChange={handleBillingDetailsChange}
                            isEdit={isEdit}
                            required
                        />
                    </Grid>
                    {!isEdit && (
                        <Grid item xs={4}>
                            <CustomInputField
                                label="Postal Code"
                                name="address.postal_code"
                                value={billingDetails.address.postal_code}
                                onChange={handleBillingDetailsChange}
                                isEdit={isEdit}
                                required
                            />
                        </Grid>
                    )}
                    <Grid item xs={4}>
                        <CustomInputField
                            label="Country"
                            name="address.country"
                            value={billingDetails.address.country}
                            onChange={handleBillingDetailsChange}
                            isEdit={isEdit}
                            required
                        />
                    </Grid>
                    {isEdit && (
                        <Grid item xs={12}>
                            <Wrapper>
                                <CardElement/>
                            </Wrapper>
                        </Grid>
                    )}
                </Grid>
                <Box
                    display="flex"
                    justifyContent="flex-end"
                    gap={3}
                    sx={{marginTop: 4}}
                >
                    <CustomButtonPrimary
                        type="button"
                        variant="contained"
                        color="secondary"
                        buttonType="small"
                        onClick={handleEdit}
                        disabled={!paymentMethodDetails}
                    >
                        {isEdit ? "Cancel" : "Edit"}
                    </CustomButtonPrimary>
                    {isEdit && (
                        <CustomButtonPrimary
                            disabled={!stripe || !elements}
                            type="submit"
                            variant="contained"
                            color="secondary"
                            buttonType="small"
                        >
                            {`${paymentMethodDetails ? "Update" : "Create"} a Payment`}
                        </CustomButtonPrimary>
                    )}
                </Box>
            </form>
        </>
    );
};

const StripePage = () => {
    const [paymentMethodDetails, setPaymentMethodDetails] = useState<any>(null);

    const {data: paymentMethodData, isFetching, refetch} = usePaymentMethod();
    useEffect(() => {

        refetch();
    }, []);


    useMemo(() => {

        if (!isFetching) {
            //@ts-ignore
            if (paymentMethodData?.data?.id) {
                setPaymentMethodDetails(paymentMethodData?.data);
            }
        }
    }, [paymentMethodData]);

    return (
        <div>
            {isFetching ? (
                <LoadingPage height={400}/>
            ) : (
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        paymentMethodDetails={paymentMethodDetails}
                        isLoading={isFetching}
                        refetchData={refetch}
                    />
                </Elements>
            )}
        </div>
    );
};

export default StripePage;
