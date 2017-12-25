function addTwoNumbers(l1, l2) {
  let curr1 = l1;
  let curr2 = l2;
  let curr3;
  let l3;
  let jinwei = false;
  if (curr1.val + curr2.val >= 10) {
    curr3 = new ListNode(curr1.val + curr2.val - 10)
    jinwei = true;
  } else {
    curr3 = new ListNode(curr1.val + curr2.val)
  }
  l3 = curr3;

  while (true) {
    if (curr1.next === null && curr2.next === null) {
      if (jinwei) {
        curr3.next = new ListNode(1)
      }
      return l3
    } else if (curr1.next !== null && curr2.next !== null) {
      if (!jinwei) {
        if (curr1.next.val + curr2.next.val >= 10) {
          curr3.next = new ListNode(curr1.next.val + curr2.next.val - 10)
          jinwei = true
        } else {
          curr3.next = new ListNode(curr1.next.val + curr2.next.val)
          jinwei = false
        }
      } else {
        if (curr1.next.val + curr2.next.val + 1 >= 10) {
          curr3.next = new ListNode(curr1.next.val + curr2.next.val + 1 - 10)
          jinwei = true
        } else {
          curr3.next = new ListNode(curr1.next.val + curr2.next.val + 1)
          jinwei = false
        }
      }
      curr1 = curr1.next
      curr2 = curr2.next
      curr3 = curr3.next
    } else if (curr1.next == null) {
      if (jinwei) {
        if (curr2.next.val + 1 >= 10) {
          curr3.next = new ListNode(0)
          jinwei = true;
        } else {
          curr3.next = new ListNode(curr2.next.val + 1)
          jinwei = false
        }
      } else {
        curr3.next = new ListNode(curr2.next.val)
      }
      curr2 = curr2.next;
      curr3 = curr3.next;
    } else if (curr2.next == null) {
      if (jinwei) {
        if (curr1.next.val + 1 >= 10) {
          curr3.next = new ListNode(0)
          jinwei = true
        } else {
          curr3.next = new ListNode(curr1.next.val + 1)
          jinwei = false;
        }
      } else {
        curr3.next = new ListNode(curr1.next.val)
      }
      curr1 = curr1.next;
      curr3 = curr3.next;
    }
  }
}