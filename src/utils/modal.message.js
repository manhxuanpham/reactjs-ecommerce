import { notification } from "antd";


// const [api, contextHolder] = notification.useNotification();

const MESSAGE = (type, title, message) => {
    notification[type]({
        message: title,
        description: message,
        duration: 3,
    });
};

export default MESSAGE;