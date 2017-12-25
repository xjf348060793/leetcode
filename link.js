class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class NodeList {
  constructor(headVal) {
    this.head = new ListNode(headVal)
  }
  find(val) {
    let currNode = this.head;
    while (currNode.val != val) {
      currNode = currNode.next;
    }
    return currNode
  }
  findPrevious(val) {
    let currNode = this.head;
    while (currNode.next !== null && currNode.next.val != val) {
      currNode = currNode.next
    }
    return currNode
  }
  insert(newVal, oldVal) {
    let newNode = new ListNode(newVal);
    let current = this.find(oldVal);
    if (current === null) {
      return console.log('没有找到被插元素')
    }
    newNode.next = current.next;
    current.next = newNode;
  }
  remove(val) {
    let previous = this.findPrevious(val);
    if (previous.next !== null) {
      previous.next = previous.next.next;
    }
  }
  push(val) {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next
    }
    curr.next = new ListNode(val)
    return this
  }
}