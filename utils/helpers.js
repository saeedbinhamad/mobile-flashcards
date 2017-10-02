import { Alert, View, StyleSheet, AsyncStorage, Platform } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'MobileFlashcards:notifications';
let eventSubscription = null;

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

function createNotification() {
  return {
    title: 'Study your flashcards!',
    body: "Don't forget finish a quiz today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    },
  };
}

export function setLocalNotification() {
  // system alerts do not appear if iOS app is in foreground
  //  https://forums.expo.io/t/psa-reminder-notifications-in-ios-foregrounded-apps/641
  if (Platform.OS === 'ios' && eventSubscription === null) {
    eventSubscription = Notifications.addListener(x => {
      Alert.alert(
        'Study your flashcards!',
        "Don't forget finish a quiz today!"
      );
    });
  }
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(10, 18, 0);
            const notification = createNotification();

            Notifications.scheduleLocalNotificationAsync(notification, {
              time: tomorrow,
              repeat: 'day',
            });

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}
