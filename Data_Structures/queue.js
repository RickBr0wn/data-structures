/**
 * QUEUE
 * A queue is a first-in, first-out data structure (FIFO).
 * We can only remove items from the queue one at a time,
 * and must remove items in the same sequence as they were placed in the queue.
 */
export function createQueue() {
  const queue = []
  return {
    add: (item) => queue.unshift(item),

    remove: () => (queue.length === 0 ? undefined : queue.pop()),

    view: () => (queue.length === 0 ? undefined : queue),

    peek: () => (queue.length === 0 ? undefined : queue[queue.length - 1]),

    length: () => queue.length,

    isEmpty: () => queue.length === 0,
  }
}
