const myComponents = {
    MuiButton: {
        defaultProps: {
            disableElevation: true,
            disableRipple: true,
            variant: 'contained',
            size: 'large',
            color: 'primary',
        },
    },
    MuiCard: {
        styleOverrides: {
            root: ({theme}: any) => ({
                display: 'flex',
                justifyContent: 'center',
                alignItems: "center",
                width: '100px',
                height: '100px',
                padding: '15px',
                borderRadius: '5px',
                border: '2px solid',
                borderColor: theme.palette.secondary.main,
                cursor: 'pointer'
            })
        }
    },
    MuiContainer: {
        styleOverrides: {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                padding: '20px',
                maxWidth: 'none !important'
            }
        }
    },
};

export default myComponents;