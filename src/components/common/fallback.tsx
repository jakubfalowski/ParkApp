import { Box, CircularProgress, Typography } from "@mui/material";

export default function Callback() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: 2,
        bgcolor: "background.default",
      }}
    >
      <CircularProgress size={40} thickness={4} />
      <Typography variant="body2" color="text.secondary">
        Ładowanie aplikacji…
      </Typography>
    </Box>
  );
}
