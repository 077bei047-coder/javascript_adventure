//JavaScript uses the Stack and Heap to manage memory


//STACK
//The Stack is used for static memory allocation, primarily for storing primitive types and function calls. 
//It's a simple, last-in, first-out (LIFO) structure, 
//making it very fast to access.

//HEAP
//The Heap is used for dynamic memory allocation,
// where objects and arrays (non-primitive types) are stored.
//Unlike the Stack, the Heap is more complex and slower to access, as it allows for flexible memory allocation.

//example of stack
let myYoutubeName = "arati"; // Primitive type stored in the Stack.
let anotherName = myYoutubeName;   // A copy of the value is created in the Stack.
anotherName = "arati";        // Changing the copy does not affect the original.

console.log(myYoutubeName); // Output: ayushyadavz (Original value remains unchanged)
console.log(anotherName);   // Output: amanyadavz (Only the copy value is changed)

//example of heap
let userOne = {         // The reference to this object is stored in the Stack.
    email: "user@google.com",
    upi: "user@ybl"
};                      // The actual object data is stored in the Heap.

let userTwo = userOne;  // userTwo references the same object in the Heap.

userTwo.email = "arati@google.com"; // Modifying userTwo also affects userOne.

console.log(userOne.email); // Output: ayush@google.com
console.log(userTwo.email); // Output: ayush@google.com