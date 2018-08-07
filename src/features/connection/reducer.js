import {
  MQTT_CONFIG,
  MQTT_DISCONNECT,
  MQTT_CONNECTION_SUCCESS
} from "../../types";

let initialState = {
  host: "mqtt.cmmc.io",
  port: 9001,
  clientId:
    "CMMC_" +
    Math.random()
      .toString(16)
      .substr(2, 8),
  username: "",
  password: "",
  topic: "CMMC/#"
};

export default (state = initialState, action) => {
  let actions = {};

  actions[MQTT_CONFIG] = () => action.configs;
  actions[MQTT_CONNECTION_SUCCESS] = () => ({
    ...state,
    disconnect: "connected",
    connection: true
  });
  actions[MQTT_DISCONNECT] = () => {
    state.connection = false;
    return { ...state, connection: false };
  };

  if (typeof actions[action.type] !== "function") {
    return state;
  }

  return actions[action.type]();
};
