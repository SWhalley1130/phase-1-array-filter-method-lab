// Code your solution here
const findMatching=(array, name)=> array.filter(e=>e.toLowerCase()===name.toLowerCase());

const fuzzyMatch=(array, name)=>array.filter(e=>e.charAt(0)===name.charAt(0));

const matchName=(arrayOfObjs,nameInput)=>arrayOfObjs.filter(e=>e.name===nameInput);
