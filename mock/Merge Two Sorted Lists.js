let dummy = new ListNode(0);
let current = dummy;

while (list1 !== null && list2 !== null) {
  if (list1.val < list2.val) {
    current.next = list1;
    list1 = list1.next;
  } else {
    current.next = list2;
    list2 = list2.next;
  }

  current = current.next;
}

if (list1 !== null) {
  current.next = list1;
} else {
  current.next = list2;
}

return dummy.next;

// que Reverse the link list
// let prev = null;
// let current = head;

// while (current !== null) {
//   let next = current.next;
//   current.next = prev;
//   prev = current;
//   current = next;
// }

// return prev;
