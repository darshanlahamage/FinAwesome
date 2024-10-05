import * as Notifications from 'expo-notifications';

function scheduleNotification(){
    Notifications.scheduleNotificationAsync({
        content:{
            title:"My first local notification",
            body :"Body of notification",
            data:{
                username:'Max'
            },
        },
        trigger:{
            seconds:5
        }
    });
}

export default scheduleNotification;