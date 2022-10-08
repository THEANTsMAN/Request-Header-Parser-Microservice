// Request Header Parser Microservice

// Parses the request header for the:
//  - IP address of the request
//  - Language
//  - Software of the OS

import express from "express";
import { AddressInfo } from "net";

const app = express();

interface ResponseObject {
  ipaddress: string | null | undefined;
  language: string | undefined;
  software: string | undefined;
}

app.get("*", (request, response) => {
    let ipaddress = null;
    const jsonHeader = JSON.parse(JSON.stringify(request.headers));
    console.log(jsonHeader);

    if (jsonHeader["x-forwarded-for"]) {
        ipaddress = jsonHeader["x-forwarded-for"].split(",")[0];
    } else if (jsonHeader.host) {
        ipaddress = jsonHeader["host"].split(",")[0];
    }

    const language = jsonHeader["accept-language"]?.split(",")[0];
    const software = jsonHeader["user-agent"]?.split("(").toString().split(")")[0].split(",")[1];

    const responseJSON: ResponseObject = {
        ipaddress,
        language,
        software,
    };

    response.send(responseJSON);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
    let port: number;
    const addressInfo = listener.address();

    if (typeof addressInfo === "string") {
        port = Number(process.env.PORT);
    }

    port = (addressInfo as AddressInfo).port;

    console.log("Microservice is listening on port:", port);
});
