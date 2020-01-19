import { createQueue } from './queue'

/**
 * A simple priority queue allows the user to add items to the queue
 * that are deemed to be high priority, and get moved ahead in the line.
 */
export function createPriorityQueue() {
  const highPriority = createQueue()
  const lowPriority = createQueue()

  return {
    add: (item, isHighPriority = false) =>
      isHighPriority ? highPriority.add(item) : lowPriority.add(item),
    remove: () =>
      !highPriority.isEmpty() ? highPriority.remove() : lowPriority.remove(),
    view: () =>
      highPriority.view() === undefined
        ? lowPriority.view() || []
        : highPriority
            .view()
            .concat(lowPriority.view() || [])
            .filter(item => item !== undefined),
    peek: () =>
      !highPriority.isEmpty() ? highPriority.peek() : lowPriority.peek(),
    isEmpty: () => highPriority.isEmpty() && lowPriority.isEmpty(),
    length: () => highPriority.length() || 0 + lowPriority.length() || 0,
  }
}
