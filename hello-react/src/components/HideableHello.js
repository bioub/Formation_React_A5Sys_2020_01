import React, { Component } from "react";
import { hideable } from "../hocs/hideable";
import { Hello } from "./Hello";

export const HideableHello = hideable(Hello);