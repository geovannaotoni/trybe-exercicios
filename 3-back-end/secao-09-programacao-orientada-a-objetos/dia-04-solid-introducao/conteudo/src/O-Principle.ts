// export default function progressNotification(
//   message: string,
//   notificationType: string,
// ): void {
//   switch (notificationType) {
//     case 'Email':
//       console.log('Email: ', message);
//       break;
//     case 'Phone':
//       console.log('Phone: ', message);
//       break;
//     case 'Console':
//       console.log('Console: ', message);
//       break;
//     default:
//       console.log(message);
//       break;
//   }
// }

export default function progressNotification(
  message: string,
  notificationType: string,
): void {
  console.log(`${notificationType}: ${message}`)
}

// --------------------------------------------------------------------------------------------
type Notification = { type: string, send: (message: string) => void };

// const consoleNotification: Notification = {
//   type: 'Console',
//   send: (message) => console.log('Console: ', message),
// };

// const emailNotification: Notification = {
//   type: 'Email',
//   send: (message) => console.log('Email: ', message),
// };

// const phoneNotification: Notification = {
//   type: 'Phone',
//   send: (message) => console.log('Phone: ', message),
// };

// const notifications: Notification[] = [
//   consoleNotification,
//   emailNotification,
//   phoneNotification,
// ];

// export default function progressNotification(
//   message: string,
//   type_ = 'Console',
//   notificationsArray: Notification[] = notifications,
// ): void {
//   notificationsArray.forEach((notification) => {
//     if (notification.type === type_) {
//       notification.send(message);
//     }
//   });
// }