import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FormInput } from "../FormInput";

export const Address = () => {
  return (
    <Box marginY={10}>
      <Typography variant="h6">Dados de Endereço</Typography>

      <Box display="flex" flexDirection="column" gap={2} marginTop={3}>
        <FormInput name="street" label="Rua" />
        <FormInput name="streetNumber" label="Número da rua" />
        <FormInput name="city" label="Cidade" />
      </Box>
    </Box>
  );
};
