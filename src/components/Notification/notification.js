import { Store } from "react-notifications-component";

import { feedbackMessage } from "./feedbackMessage";

const notification = ({ item, action }) => {
  const feedback = feedbackMessage(item, action);
  Store.addNotification({
    title: feedback,
    type: "success",
    insert: "bottom",
    container: "bottom-left",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
};
export default notification;
