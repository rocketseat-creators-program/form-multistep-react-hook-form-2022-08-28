import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Controller, useFormContext } from "react-hook-form";

type FormInputProps = {
  name: string;
  label: string;
};

export const FormInput = ({ name, label }: FormInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <Box display="flex" flexDirection="column">
            <TextField
              label={label}
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
              {...field}
            />
          </Box>
        );
      }}
    />
  );
};
