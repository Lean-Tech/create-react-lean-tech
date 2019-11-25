import React, { Fragment } from "react";
import {getItem} from "../../environment/firebase/firestore/index";
import { Button } from "evergreen-ui";

const eventButton = async () => {
    const abc = await getItem('test-collection', '1234erfcx');
    console.log(abc);
}

const Layout = () => (
    <Fragment>
        <h1>Layout</h1>
        <Button onClick={eventButton}>Testint firebase</Button>
    </Fragment>
);

export default Layout;
