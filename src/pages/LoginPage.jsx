import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import { FaLock } from "react-icons/fa";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const LoginPage = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: "10rem", textAlign: "center" }}>
      <Avatar
        sx={{
          backgroundColor: "primary.main",
          m: "auto",
          width: 60,
          height: 60,
        }}
        sizes="100px"
      >
        <FaLock size="40" />
      </Avatar>
      <Typography variant="h4" align="center" mb={4} color="primary.light">
        Login
      </Typography>

      <Formik
        initialValues={{ fullName: "", email: "", password: "" }}
        validationSchema={Yup.object().shape({
          fullName: Yup.string()
            .max(20, "Must be 20 or less characters")
            .required("Full Name is required"),
          email: Yup.string()
            .email("Please enter a valid email adress")
            .required("Please enter your email adress"),
          password: Yup.string()
            .min(8, "Must be at least 8 characters ")
            .max(16, "Must be a maximum of 16 characters")
            .required()
            .matches(/\d+/, "Password must contains numbers")
            .matches(/[a-z]+/, "Password must contain lowercase letters")
            .matches(/[A-Z]+/, "Password must contain uppercase letters")
            .matches(
              /[!,?{}><%&$#£+-.]+/,
              "Password must contain special characters"
            ),
        })}
        onSubmit={(values, actions) => {
          alert(`fullName: ${values.fullName}
        email: ${values.email} 
        password: ${values.password}`);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
      >
        {({ values, handleChange, errors, touched, handleBlur }) => (
          <Form>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <TextField
                label="Full Name"
                name="fullName"
                id="fullName"
                type="text"
                variant="outlined"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.fullName && errors.fullName}
                error={touched.fullName && Boolean(errors.fullName)}
              />
              <TextField
                label="Email"
                name="email"
                id="email"
                type="email"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.email && errors.email}
                error={touched.email && Boolean(errors.email)}
              />
              <TextField
                label="password"
                name="password"
                id="password"
                type="password"
                variant="outlined"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.password && errors.password}
                error={touched.password && Boolean(errors.password)}
              />
              <Button type="submit" variant="contained" size="large">
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginPage;
