import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { login } from "../../features/slices/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const intitalState = {
    name: "",
    password: "",
    image: "",
  };
  const [values, setValues] = useState(intitalState);
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const [credentialsInvalid, setCredentialsInvalid] = useState(false);

  const dispatch = useDispatch();

  const loginFun = () => {
    const userValidation = /[A-Za-z]{1,10}$/i.test(values.name);
    const passwordValidation =
      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/.test(values.password);

    console.log("password Validation", passwordValidation, userValidation);
    if (userValidation && passwordValidation) {
        console.log("crendentiials valid")
        dispatch(login(values))
    }
    else {
      setCredentialsInvalid(true);
    }
  };

  return (
    <div className="grid grid-cols-1 items-center justify-items-center h-screen">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Name"
            size="lg"
            type="text"
            name="name"
            value={values.name}
            onChange={onChange}
          />
          <Input
            label="Password"
            size="lg"
            type="password"
            name="password"
            value={values.password}
            onChange={onChange}
          />
          <Input
            label="Profile Image URL address"
            size="lg"
            type="text"
            name="image"
            value={values.image}
            onChange={onChange}
          />
          <Typography variant="small" className="mt-6 flex justify-center">
            Image is Optional
          </Typography>
          <div className="-ml-2.5"></div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth onClick={() => loginFun()}>
            Sign In
          </Button>
          {credentialsInvalid ? (
            <>
              <Typography
                variant="small"
                className="mt-6 flex justify-center text-red-600"
              >
                Invalid Credentials
              </Typography>
              <Typography
                variant="small"
                className="mt-6 flex flex-col justify-center"
              >
                Password must:
                <div className="pl-5 flex flex-col justify-center">
                  <i>Be at least 8 characters long</i>
                  <i>Contain at least one capital letter</i>
                  <i>Contain at least one special character</i>
                  <i>Contain at least one number</i>
                </div>
              </Typography>
            </>
          ) : (
            <Typography variant="small" className="mt-6 flex justify-center">
              Please Enter Your Credentials To Login
            </Typography>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
