
export type AppTheme = {
  homePage: {
    fontSize: string,
    colors: {
      buttonSignUp: string,
      typography: string,
      background: string,
      inputError: string,
    },
  },
  LoginPage: {
    colors: {
      buttonSignIn: string,
      typography: string,
      backgroundMobile: string,
    },
  }
 createAccount: {
    SignIn: {
      colors:  string,
      fontSize: string,
    },
    colors:{
      typography: string,
      background: string,
      backgroundFooter: string,
      footerTypography: string,
      buttonBackground: string,
      buttonTypography: string,
    },
    fontSize: {
      title: string,
      subTitle: string,
      stepNumber: string,
      button: string,
  },
}
  media: {
    xs: number,
    sm: number,
    md: number,
    lg: number,
  },
}