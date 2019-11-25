import React from "react";
import {
  Pane,
  Text,
  Avatar,
  Button,
  TextInput,
  Heading,
  Link
} from "evergreen-ui";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebookF, faGoogle, faMicrosoft } from "@fortawesome/free-brands-svg-icons";
const fbIcon = <FontAwesomeIcon className="icon" icon={faFacebookF} />;
const gIcon = <FontAwesomeIcon className="icon" icon={faGoogle} />;
const mIcon = <FontAwesomeIcon className="icon" icon={faMicrosoft} />;

function Login() {
  return (
    <Pane
      height={620}
      width={340}
      display="flex"
      padding={30}
      alignItems="center"
      justifyContent="center"
      border="default"
      flexDirection="column"
    >
      <Avatar
        src="https://media.licdn.com/dms/image/C4E0BAQHiyAXI6WPCdg/company-logo_200_200/0?e=2159024400&v=beta&t=KZLh7n1BtFyEG2XFWzi58q8Ga7MAzs-yFabHiUfiJMQ"
        name="Alan Turing"
        size={80}
      />
      <Heading className="margin-botton" size={800} marginTop="default">
        Welcome!
      </Heading>
      <TextInput name="text-input-name" placeholder="Email" />
      <TextInput name="text-input-password" placeholder="Password" />
      <Link alignSelf="flex-end" href="#" color="neutral">
        Forgot your password?
      </Link>
      <Button
        justifyContent="center"
        className="sigin"
        appearance="primary"
        intent="warning"
      >
        Sign in!
      </Button>
      <Text className="margin-botton" size={400}>
        Or
      </Text>
      <Button
        justifyContent="center"
        className="withButtons"
        appearance="primary"
        iconBefore={fbIcon}
      >
        <span className="textfb">
          Login with Facebook
        </span>
      </Button>
      <Button
        justifyContent="center"
        className="withButtons"
        appearance="primary"
        intent="danger"
        iconBefore={gIcon}
      >
        <span className="textg" >
          Login with Google
        </span>
      </Button>
      <Button
        justifyContent="center"
        className="withButtons"
        appearance="primary"
        intent="success"
        iconBefore={mIcon}
      >
        <span className="textm">
          Login with Microsoft
        </span>
      </Button>
    </Pane>
  );
}

export default Login;
