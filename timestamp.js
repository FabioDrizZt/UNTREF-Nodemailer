const now = new Date()
console.log(now.getTime());
console.log(now.toDateString());
console.log(now.toISOString());
console.log(now.toJSON());
console.log(now.toLocaleDateString());
console.log({toLocaleString: now.toLocaleString()});
console.log({toLocaleTimeString: now.toLocaleTimeString()});