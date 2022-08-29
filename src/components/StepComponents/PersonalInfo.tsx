import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FormInput } from "../FormInput";

export const PersonalInfo = () => {
  return (
    <Box marginY={10}>
      <Typography variant="h6">Dados Pessoais</Typography>

      <Box display="flex" flexDirection="column" gap={2} marginTop={3}>
        <FormInput name="name" label="Nome" />
        <FormInput name="age" label="Idade" />
      </Box>
    </Box>
  );
};
