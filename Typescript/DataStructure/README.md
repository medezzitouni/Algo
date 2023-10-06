# Data Structure In Typescript

### Run tests with Jest
```bash
npm run jest-test
npm run jest-test-watch
npm run jest-test-coverage
```

### Run tests with Mocha
```bash
npm run mocha-test
npm run mocha-test-watch
```

## References
- Introduction to Algorithms, Third Edition By Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest and Clifford Stein.
- [Wikipedia](https://en.wikipedia.org/wiki/List_of_data_structures)
- [Sketch](https://okso.app/showcase/data-structures)
### Todo List
 - [X] LinkedList
 - [X] Stacks
 - [X] Queues
 - [X] Hash Tables
 - [X] Trees
      ### Binary Trees
      - [X] Depth Traversal (Recursive implementation, or implementation With Stack)
      - [X] Breadth Traversal (implementation With Queue)
      ### Binary Search Trees
      - [X] Insert
      - [X] Search
      - [X] Delete
      - [ ] Balance a Tree (methods: [AVL](https://www.geeksforgeeks.org/insertion-in-an-avl-tree/), or [Red-Black Tree](https://www.geeksforgeeks.org/introduction-to-red-black-tree/))
      ### Heaps (priority queue)
      - [X] Heap Insert
      - [X] Heap Delete

      ***Heap Definition***
      ```
      Heap is a binary tree where every child and grand child is smaller (MaxHeap), or larger (MinHeap) than the current node.
       • Whenever a node is added, we must adjust the tree
       • Whenever a node is deleted, we must adjust the tree
       • There is no traversing the tree (whiteboard)
      ```
      ### Treaps

      [***Treaps Definition***](https://www.geeksforgeeks.org/treap-a-randomized-binary-search-tree/)
      ```
      Like Red-Black and AVL Trees, Treap is a Balanced Binary Search Tree, but not guaranteed to have height as O(Log n). The idea is to use Randomization and Binary Heap property to maintain balance with high probability. The expected time complexity of search, insert and delete is O(Log n).
      ```
      ### Trie Tree
      ***Heap Definition***
      
      Named after Re-***trie***-val Tree, people call them try trees / prefix / digital tree
      [Implementation](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/trie/Trie.js)
  - [ ] Graphs
      ### Terminology
      - cycle
      - acyclic graph
      
      - [ ] Directed Graphs
      - [ ] Undirected Graphs


