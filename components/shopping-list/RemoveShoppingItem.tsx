// import React from "react";
// import { Alert } from "react-native";
// import { ShoppingListItem } from "./ShoppingListItem";

// export default function RemoveShoppingItem({item}: {item: string}) {
//   return (
//     Alert.alert(
//           "Remove Item",
//           `Are you sure you want to remove ${item} from your shopping list?`,
//           [
//             { text: "Cancel", style: "cancel" },
//             {
//               text: "OK",
//               style: "destructive",
//               onPress: () => {
//                 <ShoppingListItem key={`${item}`} item={item} isCompleted />
//                 Alert.alert(
//                   "Item removed",
//                   `${item} has been removed from your shopping list.`,
//                 );
//               },
//             },
//           ],
//         );
//   );
// }
