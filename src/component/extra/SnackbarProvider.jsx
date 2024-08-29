// src/components/SnackbarProvider.js
                                                                                   
import { SnackbarProvider } from 'notistack';

const CustomSnackbarProvider = ({ children }) => {
  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
      {children}
    </SnackbarProvider>
  );
};

export default CustomSnackbarProvider;
