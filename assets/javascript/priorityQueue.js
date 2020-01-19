import { createQueue } from './queue'

export function priorityQueue() {
  const highPriority = createQueue()
  const lowPriority = createQueue()

  return {
    add: (item, isHighPriority = false) =>
      highPriority ? highPriority.add(item) : lowPriority.add(item),
    remove: () =>
      !highPriority.isEmpty() ? highPriority.remove() : lowPriority.remove(),
    view: () => [...highPriority, ...lowPriority],
    peek: () =>
      !highPriority.isEmpty() ? highPriority.peek() : lowPriority.peek(),
    isEmpty: () =>
      highPriority.isEmpty() && lowPriority.isEmpty() ? true : false,
  }
}
